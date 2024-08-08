const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobs: { type: mongoose.Schema.Types.ObjectId, ref: 'jobs' },
    users: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    coverLetter: String,
    resume: String,
    applicationDate: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' }
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
