import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
