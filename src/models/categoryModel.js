const  mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name:{type:String, unique:true}
},{versionKey:false, timeStamp:true})

const categoryModel = mongoose.model('categories', dataSchema);
module.exports = categoryModel;