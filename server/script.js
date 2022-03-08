const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Middleware
const app = express();

// rest endpoint
app.get("/rest", (req, res) => {
  res.json({
    data: "yay it is working",
  });
});

// port
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
