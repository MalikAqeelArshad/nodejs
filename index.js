const express = require('express');
const app = express();
const port = 8000;
app.listen(port, () => console.log(`Server running at: http://127.0.0.1:${port}`));

const fs = require('fs');
app.use((req, res, next) => {
  const log = `${new Date().toLocaleString()}: ${req.path}\n`;
  fs.appendFileSync('./log.txt', log);
  next()
})

app.get('/', (req, res) => {
  res.send('Welcome to Express NodeJS');
})

app.get('/about', (req, res) => {
  res.send('Welcome to About Us Page');
})

