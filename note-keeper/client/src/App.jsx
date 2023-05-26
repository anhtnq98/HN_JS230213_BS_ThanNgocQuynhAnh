import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInput] = useState("");
  const [notes, setNotes] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Content: inputValue }),
    });
    renderData();
  };

  const renderData = () => {
    fetch("http://localhost:5000/", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      });
  };

  useEffect(() => {
    renderData();
  }, []);

  return (
    <div className="App">
      <div className="title">Note App</div>
      <div className="create-container">
        <div className="create">
          <div className="create-title">Title</div>
          <textarea
            name=""
            id=""
            cols="38"
            rows="4"
            placeholder="Take a note..."
            value={inputValue}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="add" onClick={handleClick}>
          <i class="fa-sharp fa-solid fa-plus"></i>
        </div>
      </div>
      <div className="render-container">
        {notes.data?.map((note) => (
          <>
            <div className="block">
              <div className="text">{note.Content}</div>
              <div className="delete-container">
                <div className="delete">
                  <i class="fa-sharp fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
