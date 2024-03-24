
const dataModel = require('../models/ads/adsModel')

const createAdsService = async (req, res)=>{
    try {
        let postBody = req.body;
        postBody.email=req.headers['email'];
        let data = await dataModel.create(postBody);
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}

const readAdsService = async (req, res)=>{
    try {
        let email=req.headers['email'];
        let Query = {userEmail:email}
        let data = await dataModel.find(Query);
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}

const updateAdsService = async (req, res)=>{
    try {
        let postBody = req.body;
        let updateId = req.params.id;
        let email=req.headers['email'];
        let Query = {userEmail:email,_id:updateId}
        let data = await dataModel.findOneAndUpdate(Query,postBody);
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const deleteAdsService = async (req, res)=>{
    try {
        let deleteId = req.params.id;
        let email=req.headers['email'];
        let Query = {userEmail:email,_id: deleteId}
        let data = await dataModel.delete(Query);
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const detailAdsService = async (req, res)=>{
    try {
        let Id = req.params.id;
        let email=req.headers['email'];
        let Query = {userEmail:email,_id: Id}
        let data = await dataModel.findOne(Query);
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


module.exports = {
    createAdsService,
    readAdsService,
    deleteAdsService,
    updateAdsService,
    detailAdsService
}