const express = require('express');
const mongoose= require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/admin')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.get('/', (req, res) => {    res.send('Received a GET request');  })
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});