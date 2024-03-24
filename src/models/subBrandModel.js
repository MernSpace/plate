const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name:{type:String, unique:true},
    brandID:{type:mongoose.Schema.Types.ObjectId}
},{versionKey:false, timeStamp:true});

const subBrandModel = mongoose.model('subBrands',dataSchema);
module.exports = subBrandModel;