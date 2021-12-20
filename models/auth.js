const mongoose = require('mongoose');
const {Schema} = mongoose;

const adminAuth = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})
const studentAuth = new Schema({
    applicationNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('adminAuth', adminAuth);
module.exports = mongoose.model('studentAuth', studentAuth);