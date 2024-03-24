const dataModel = require('../../models/subCategoryModel')

const createService = require('../../service/common/create01Service');
const listService = require('../../service/common/listService');
const updateService = require('../../service/common/updateService');
const deleteService = require('../../service/common/deleteService');
const detailService = require('../../service/common/detailService');




exports.createSubCategory=async (req,res)=>{
    let Result= await createService(req,dataModel)
    res.status(200).json(Result)
}

exports.readSubCategory=async (req,res)=>{
    let Result= await listService(req,dataModel)
    res.status(200).json(Result)
}


exports.updateSubCategory=async (req,res)=>{
    let Result= await updateService(req,dataModel)
    res.status(200).json(Result)
}


exports.deleteSubCategory=async (req,res)=>{
    let Result= await deleteService(req,dataModel)
    res.status(200).json(Result)
}


exports.subCategoryDetail=async (req,res)=>{
    let Result= await detailService(req,dataModel)
    res.status(200).json(Result)
}