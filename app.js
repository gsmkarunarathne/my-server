const express = require('expres4s');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World New!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
