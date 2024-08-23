const Application =require('../models/AppliedJob')

exports.ApplyJob = async (req, res) => {
    try {
        const { coverLetter, job, user} = req.body;

        const resumePath = req.files.resume[0].path; 

        console.log(req.body, '---------------req.body---------------');
        

        // Ensure that resume is present
        if (!req.files || !req.files.resume || !req.files.resume[0]) {
            return res.status(400).json({ message: 'Resume is required.' });
        }


        // Create a new application
        const newApplication = new Application({
            job,
            coverLetter,
            resume: resumePath,
            user,
        });

        // Save the application to the database
        await newApplication.save();

        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error("Error applying for job:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


