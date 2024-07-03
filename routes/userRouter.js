const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../config/multerConfig');



router.get('/Getuser', userController.Getuser)
router.put('/updateUser/:userId', upload, userController.updateUser)
router.put('/updateUserPassword/:userId', userController.updateUserPassword)



module.exports = router;