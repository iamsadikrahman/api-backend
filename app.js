const express = require('express');
const app = express();
const port = 5000; // You can change this to any available port you prefer

// Sample data (replace this with your actual data)
const sampleData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the REST API!'); // You can customize the welcome message here
});

// Define a route to get all data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Define a route to get data by ID
app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dataItem = sampleData.find(item => item.id === id);
  if (dataItem) {
    res.json(dataItem);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Define a default route for undefined paths
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
