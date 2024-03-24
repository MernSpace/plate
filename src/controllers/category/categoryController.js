const createService = require('../../service/common/create01Service');
const listService = require('../../service/common/listService');
const updateService = require('../../service/common/updateService');
const deleteService = require('../../service/common/deleteService');
const detailService = require('../../service/common/detailService');

const dataModel = require('../../models/categoryModel');

exports.createCategory=async (req,res)=>{
    let Result= await createService(req,dataModel)
    res.status(200).json(Result)
}

exports.readCategory=async (req,res)=>{
    let Result= await listService(req,dataModel)
    res.status(200).json(Result)
}

exports.updateCategory=async (req,res)=>{
    let Result= await updateService(req,dataModel)
    res.status(200).json(Result)
}

exports.deleteCategory=async (req,res)=>{
    let Result= await deleteService(req,dataModel)
    res.status(200).json(Result)
}


exports.categoryDetail=async (req,res)=>{
    let Result= await detailService(req,dataModel)
    res.status(200).json(Result)
}