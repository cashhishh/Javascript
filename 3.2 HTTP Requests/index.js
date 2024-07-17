import express from "express";
const app = express();

app.get("/", (_req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (_req, res) => {
  res.send("<h1>About Me</h1><p>My name is Kashish Rajput</p>");
});

app.get("/contact", (_req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
