const express =require('express');
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const router =express.Router();

const UsersController=require("../controllers/UsersController");
const brandController=require("../controllers/brand/brandController");
const subBrandController = require('../controllers/subBrand/subBrandController');
const categoryController = require('../controllers/category/categoryController');
const subCategoryController = require('../controllers/subCategory/subCategoryController');
const adsController = require('../controllers/ads/adsController');


// User Manage
router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);

router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.profileDetails);


router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);



//brand

router.post('/create-brand', brandController.createBrand);
router.get('/read-brand', brandController.readBrand);
router.post('/update-brand/:id', brandController.updateBrand);
router.post('/delete-brand/:id', brandController.deleteBrand);
router.get('/brand-detail/:id', brandController.brandDetail);



//sub brand

router.post('/create-sub-brand',subBrandController.createSubBrand);
router.get('/read-sub-brand',subBrandController.readSubBrand);
router.post('/update-sub-brand/:id',subBrandController.updateSubBrand);
router.get('/delete-sub-brand/:id',subBrandController.deleteSubBrand);
router.get('/detail-sub-brand/:id',subBrandController.subBrandDetail);



//category

router.post('/create-category',categoryController.readCategory);
router.get('/read-category',categoryController.readCategory);
router.post('/update-category/:id',categoryController.updateCategory);
router.get('/delete-category/:id',categoryController.deleteCategory);
router.get('/detail-category/:id',categoryController.categoryDetail);



//sub category

router.post('/create-sub-category',subCategoryController.createSubCategory);
router.get('/read-sub-category',subCategoryController.readSubCategory);
router.post('/update-sub-category/:id',subCategoryController.updateSubCategory);
router.get('/delete-sub-category/:id',subCategoryController.deleteSubCategory);
router.get('/detail-sub-category/:id',subCategoryController.subCategoryDetail);


//ads


router.post('/create-ads', adsController.createAds);
router.get('/read-ads', adsController.readAds);
router.post('/update-ads/:id', adsController.updateAds);
router.post('/delete-ads/:id', adsController.deleteAds);
router.get('/detail-ads/:id', adsController.detailAds);





module.exports=router;






































module.exports=router;