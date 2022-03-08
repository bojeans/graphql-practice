const express = require("express");
const PORT = 5000;

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
