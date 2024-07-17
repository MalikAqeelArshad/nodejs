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

// Restfull Api's
const users = require('./MOCK_DATA.json');
app.get('/api/users', (req, res) => {
  res.json(users);
})
// Dynamic Api's
app.route('/api/users/:id')
  .get((req, res) => {
    const user = users.find(item => item.id === Number(req.params.id));
    res.json(user);
  })
  .post((req, res) => {
    res.send(`Create Api: /users/:id`);
  })
  .put((req, res) => {
    res.send(`Update Api: /users/:id`);
  })
  .delete((req, res) => {
    res.send(`Delete Api: /users/:id`);
  })
