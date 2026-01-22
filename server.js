
const express = require("express");
const app = express();

// Passenger health check fix
app.get("/health", (req, res) => {
  res.status(200).type("text/html").send("OK");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});
