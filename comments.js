// Create web server
// Create a web server that listens on port 8080 and serves the comments.html file. This file should be located in the public directory. Create the file if it does not exist.

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});