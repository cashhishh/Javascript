import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  //app.listen(port, call bacl fn)
  console.log(`Server running on ${port}.`); //call back
});
