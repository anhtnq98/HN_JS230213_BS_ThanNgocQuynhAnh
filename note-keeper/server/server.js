const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const database = require("./utils/database");
const validateData = require("./middleware/checkValidate");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.static("public"));
server.use(cors());

server.get("/", (req, res) => {
  console.log("does it run into get");
  // Thao tác với dữ liệu trong db
  // Câu lệnh query lấy tất cả dữ liệu
  const query = "SELECT * FROM  note";
  database.query(query, (err, result) => {
    if (err) {
      console.log("ket noi that bai", err);
      res.status(500).json({
        status: "failed",
        err,
      });
    } else {
      res.status(200).json({
        status: "success",
        data: result,
      });
    }
  });
});

// API thêm mới note
server.post("/", validateData, (req, res) => {
  // Lấy giá trị gửi về từ client
  const { Content } = req.body;
  const values = [Content];
  // Câu lệnh query thêm mới note
  const query = `
    insert into note (Content) 
    values (?);
      `;

  database.query(query, values, (err, result) => {
    if (err) {
      console.log("Kết nối thất bại", err);
      res.status(500).json({
        status: "Failed",
        err,
      });
    } else {
      res.status(200).json({
        status: "Thêm mới thành công",
        data: result,
      });
    }
  });
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = `
    delete from note where Note_id=${id}
      `;

  database.query(query, (err, result) => {
    if (err) {
      console.log("Kết nối thất bại", err);
      res.status(500).json({
        status: "Failed",
        err,
      });
    } else {
      res.status(200).json({
        status: "Xóa thành công",
        data: result,
      });
    }
  });
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
