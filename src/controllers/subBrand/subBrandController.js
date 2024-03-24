const dataModel = require('../../models/subBrandModel')

const createService = require('../../service/common/create01Service');
const listService = require('../../service/common/listService');
const updateService = require('../../service/common/updateService');
const deleteService = require('../../service/common/deleteService');
const detailService = require('../../service/common/detailService');




exports.createSubBrand=async (req,res)=>{
    let Result= await createService(req,dataModel)
    res.status(200).json(Result)
}

exports.readSubBrand=async (req,res)=>{
    let Result= await listService(req,dataModel)
    res.status(200).json(Result)
}


exports.updateSubBrand=async (req,res)=>{
    let Result= await updateService(req,dataModel)
    res.status(200).json(Result)
}


exports.deleteSubBrand=async (req,res)=>{
    let Result= await deleteService(req,dataModel)
    res.status(200).json(Result)
}


exports.subBrandDetail=async (req,res)=>{
    let Result= await detailService(req,dataModel)
    res.status(200).json(Result)
}