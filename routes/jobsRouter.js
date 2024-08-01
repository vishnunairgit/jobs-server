// const express = require('express');
// const JOBS = require('../models/JobModels');
// const jobsRouter = express.Router();

// jobsRouter.post('/Addjob', async (req, res) => {
//     try {
//         const {
//             CreatedBy,
//             JobTitle,
//             Experience,
//             Location,
//             Qualifications,
//             EmploymentType,
//             Openings,
//             Date,
//             Requirements,
//         } = req.body;

//         // console.log(req.body, '----jon basic information----');

//         const newJob = new JOBS({
//             CreatedBy,
//             JobTitle,
//             Experience,
//             Location,
//             Qualifications,
//             EmploymentType,
//             Openings,
//             Date,
//             Requirements,
//         });

//         await newJob.save();
//         res.status(201).json({ message: 'Job added successfully', job: newJob });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// })


// module.exports = jobsRouter;






const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { adminAuth } = require('../Middlewares/Authorization');

// POST /api/jobs/Addjob
router.post('/Addjob', adminAuth, jobController.Addjob);

// GET /api/jobs/getJobs
router.get('/getJobs', adminAuth, jobController.getJobs);

// GET /api/jobs/getAllJobs/ student

router.get('/getAllJobs', jobController.getAllJobs);


// GET /api/jobs/getSingleJobs/:jobId
router.get('/getSingleJobs/:jobId', adminAuth, jobController.getSingleJobs);

// PUT /api/jobs/EditJob/:jobId
router.put('/EditJob/:jobId', adminAuth, jobController.updateJob);

// DELETE /api/jobs/DeleteJob/:jobId
router.delete('/DeleteJob/:jobId',adminAuth,  jobController.deleteJob);

module.exports = router;

