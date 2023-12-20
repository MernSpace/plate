const express =require('express');
const UsersController=require("../controllers/UsersController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");
const router =express.Router();

// User Manage
router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);

router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.profileDetails);


router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);





module.exports=router;






































module.exports=router;