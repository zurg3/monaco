const express = require('express');
const app = express();

const hostname = process.argv[2] || '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
