// const express= require('express');
// const router=express.Router();
// const bcrypt = require('bcryptjs');
// // require(' .. /db/conn');
// const User = require(".. /models/userSchema" );


// router.post('/register', async (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
  
//     try {
//       // Check if the user already exists
//       const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.status(409).json({ message: 'User with this email already exists' });
// }
  
//       // Check if all fields are filled
//       if (!name || !email || !password || !profession) {
//         return res.status(400).json({ error: 'Please fill all the fields.' });
//       }
  
//       // Hash the password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
  
//       // Create a new user
//       const user = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });
     
//       try {
//         // Save the user to the database
//         const savedUser = await user.save();
//         res.status(201).json({ message: 'User registered successfully' });
//       } catch (error) {
//         res.status(500).json({ message: 'Failed to register user' });
//       }
    
//     }
//   });
  
//   module.exports = router;




// const express = require('express');
// const router = express.Router();
// const User = require('../models/userSchema');

// // Route to handle user registration
// router.post('/register', async (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   // Check if the user with the same email already exists
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.status(409).json({ message: 'User with this email already exists' });
//   }

//   // Create a new user instance
//   const user = new User({
//     name,
//     email,
//     phone,
//     work,
//     password,
//     cpassword,
//   });

//   try {
//     // Save the user to the database
//     const savedUser = await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to register user' });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  // Check if the user with the same email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ message: 'User with this email already exists' });
  }

  // Create a new user instance
  const user = new User({
    name,
    email,
    phone,
    work,
    password,
    cpassword,
  });

  try {
    // Save the user to the database
    const savedUser = await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user' });
  }
});

module.exports = router;