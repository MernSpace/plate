const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name:{type:String, unique:true},
    CategoryID:{type:mongoose.Schema.Types.ObjectId}
},{versionKey:false, timeStamp:true});

const subCategoryModel = mongoose.model('subCategories', dataSchema);
module.exports= subCategoryModel;