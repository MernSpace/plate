const mongoose =require('mongoose');
const dataSchema = mongoose.Schema({
    name:{type:String, unique:true}
},{versionKey:false, timeStamp:true});


const  brandModel = mongoose.model('brands',dataSchema);
module.exports = brandModel;