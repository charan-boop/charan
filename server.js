const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Replace with your MongoDB URI
const mongoURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDB?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Mongoose Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String
});
const Contact = mongoose.model('Contact', ContactSchema);

// API Endpoint
app.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newContact = new Contact({ name, email });
    await newContact.save();
    res.json({ message: 'Data saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
