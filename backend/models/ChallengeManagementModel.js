const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChallengeManagementSchema = new Schema({

    topic:String,
    description:String,
    img:String

    
});

const ChallengeManagement = mongoose.model("ChallengeManagementModel", ChallengeManagementSchema);

module.exports = ChallengeManagement;
        