const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const User = require('./models/User');
// ...

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
// User login endpoint
app.post('/login', async (req, res) => {
  try {
    console.log(req);
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await User.findOne({ "Username" : username });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = (password === user.Password? true:false);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Database connection
mongoose.connect('mongodb://localhost:27017/IISC', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(conn =>{
  console.log("Connected database");
}).catch(err=>{
  console.log("error");
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
