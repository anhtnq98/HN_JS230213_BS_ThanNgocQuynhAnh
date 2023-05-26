import "./App.css";

function App() {
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
          ></textarea>
        </div>
        <div className="add">
          <i class="fa-sharp fa-solid fa-plus"></i>
        </div>
      </div>
      <div className="render-container">
        <div className="block">
          <div className="text">adbfạdbfạkfạkfạksfnhàậnkfc</div>
          <div className="delete-container">
            <div className="delete">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="text">adbfạdbfạkfạkfạksfnhàậnkfc</div>
          <div className="delete-container">
            <div className="delete">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
