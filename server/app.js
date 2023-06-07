// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const app = express();
// require('dotenv').config({path:'config.env'});
// const cors = require('cors');
// const connectDB = require('./db/conn');

// // Call the connectDB function
// connectDB();
// app.use(cors());

// app.use(express.json());
// const authRoutes = require('./routes/auth');
// app.use('/api', authRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

const bodyParser = require("body-parser"); 

app.use(bodyParser.json());
require('dotenv').config({ path: 'config.env' });
const cors = require('cors');
const connectDB = require('./db/conn');

// Call the connectDB function
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
