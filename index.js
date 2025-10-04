const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



app.get('/', (req, res) => {
  res.send('Hello Docker by hermine silue  + CI/CD!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

