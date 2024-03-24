const UpdateService= async (DataModel) => {
    try{
       let query = {}
        let data = await DataModel.find(query);
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=UpdateService