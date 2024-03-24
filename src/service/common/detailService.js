const detailService= async (Request,DataModel) => {
    try{
        let id=Request.params.id;
        let data = await DataModel.find({_id:id});
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=detailService