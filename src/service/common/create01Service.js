
const create01Service = async (dataModel,Request)=>{
    try{
        let PostBody=Request.body;
        let data = await dataModel.create(PostBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}

module.exports = create01Service;