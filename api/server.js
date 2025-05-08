const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/admin')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
// app.get('/', (req, res) => {    res.send('Received a GET request');  })

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});     
const User = mongoose.model('User', userSchema);
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await User.create(req.body);
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find  ({ email, password });
    if (user.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }       
  } catch (error) {
    res.status(500).send('Error logging in: ' + error.message);
  }
})
app.listen(3001, () => {
  console.log('Server is running on port 3000');
});