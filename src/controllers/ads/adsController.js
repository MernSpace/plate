const {createAdsService,readAdsService,detailAdsService,updateAdsService,deleteAdsService} = require('../../service/adsService');


exports.createAds = async (req, res)=>{
    let result = await createAdsService(req)
    res.status(200).json(result)
}

exports.readAds = async (req, res)=>{
    let result = await readAdsService(req)
    res.status(200).json(result)
}

exports.deleteAds = async (req, res)=>{
    let result = await deleteAdsService(req)
    res.status(200).json(result)
}


exports.updateAds = async (req, res)=>{
    let result = await updateAdsService(req)
    res.status(200).json(result)
}


exports.detailAds = async (req, res)=>{
    let result = await detailAdsService(req)
    res.status(200).json(result)
}