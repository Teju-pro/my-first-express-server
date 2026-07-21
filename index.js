const express = require('express');
const app = express();
const PORT = 3000;

// Define a GET route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! Your Full Stack journey has started.');
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
});
