// const express = require('express');
// const usersRouter = express.Router();


// const bcryptjs = require('bcryptjs'); // Ensure bcryptjs is imported
// const USERS = require('../models/UserModels');
// var jwt = require('jsonwebtoken');


// // Define saltRounds for bcryptjs
// const saltRounds = 10;

// usersRouter.post('/signup', async (req, res) => {
//     try {
//         const existingEmail = await USERS.findOne({ Email: req.body.Email });
//         if (existingEmail) {
//             return res.status(409).json({ message: 'Email is already registered' });
//         }

//         const existingUserName = await USERS.findOne({ UserName: req.body.UserName });
//         if (existingUserName) {
//             return res.status(409).json({ message: 'Username is already taken' });
//         }

//         const existingPhoneNumber = await USERS.findOne({ Phonenumber: req.body.Phonenumber });
//         if (existingPhoneNumber) {
//             return res.status(409).json({ message: 'Phone number is already registered' });
//         }

//         const existingRegistrationNumber = await USERS.findOne({ RegistrationNumber: req.body.RegistrationNumber });
//         if (existingRegistrationNumber) {
//             return res.status(409).json({ message: 'RegistrationNumber is already registered' });
//         }

//         // console.log("Signup request body:", req.body);

//         // Hash the password before saving it to the database
//         const hash = await bcryptjs.hash(req.body.password, saltRounds);

//         // Create a new user instance
//         const newUser = new USERS({
//             UserName: req.body.UserName,
//             CompanyName: req.body.CompanyName,
//             RegistrationNumber: req.body.RegistrationNumber,
//             Email: req.body.Email,
//             Phonenumber: req.body.Phonenumber,
//             Address: req.body.Address,
//             Website: req.body.Website,
//             LinkedIn: req.body.LinkedIn,
//             Industry: req.body.Industry,
//             Incorporationdate: req.body.Incorporationdate,
//             About: req.body.About,
//             LogoUpload: req.body.logoUpload,
//             ImageUpload: req.body.imageUpload,
//             password: hash,
//         });
//         await newUser.save();
//         res.status(201).json({ message: "Sign-up successful" });
//     } catch (error) {
//         console.error("Error during sign-up:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });



// usersRouter.post('/login', async (req, res) => {
//     try {
//         const { UserName, password } = req.body;

//         // console.log(req.body,'req.body---');
//         const user = await USERS.findOne({ UserName : UserName})

//         // console.log(user,'user--------------');
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid User Name or password' });
//         }
        
//         // console.log(user,'user--------------');
//         const isPasswordValid = await bcryptjs.compare(password, user.password)

//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid User Name or password' });
//         }

//         const token = jwt.sign({ userId: user._id }, process.env.JWT_PASSWORD, { expiresIn: '1h' });

//         res.status(200).json({ message: 'Login successful', token })

//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }

// });


// module.exports = usersRouter;





// module.exports = router;



const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /auth/register
router.post('/register', authController.register);

// POST /auth/login
router.post('/login', authController.login);

module.exports = router;
