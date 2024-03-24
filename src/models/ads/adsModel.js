const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    userEmail:{type:String},
    brandID:{type:mongoose.Schema.Types.ObjectId},
    subBrand:{type:mongoose.Schema.Types.ObjectId},
    categoryID:{type:mongoose.Schema.Types.ObjectId},
    subCategoryID:{type:mongoose.Schema.Types.ObjectId},
    title:{type:String},
    pricing:{type:Number},
    condition:{type:String},
    authenticity:{type:String},
    model:{type:String},
    edition:{type:String},
    features:{type:String},
    description:{type:String},
    photo:{type:String},
},{versionKey:false,timeStamp:true});

const adsModel = mongoose.model('ads',dataSchema);
module.exports = adsModel;