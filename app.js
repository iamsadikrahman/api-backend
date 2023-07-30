const express = require('express');
const data = require('./data.json');

console.log(data)

const app = express();

app.get('/api/movies', (req, res) => {
  res.json(data);
});


// Define a route to get data by ID
app.get('/api/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dataItem = data.find(item => item.id === id);
    if (dataItem) {
      res.json(dataItem);
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  });


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
