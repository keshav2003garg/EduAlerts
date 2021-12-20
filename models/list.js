const mongoose = require('mongoose');
const {Schema} = mongoose;

const listSchema = new Schema({
    list: String,
    tag: String
})

const list = mongoose.models.list || mongoose.model('list', listSchema);

export default list;