const express = require('express');

// Express app yaradırıq
const app = express();

// '/' endpoint üçün route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Server 1245 portunda dinləyir
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// App dəyişənini ixrac edirik
module.exports = app;
