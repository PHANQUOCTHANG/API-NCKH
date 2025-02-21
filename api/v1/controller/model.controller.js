const Model = require("../../../model/model.model"); 
module.exports.index = async (req,res) => {
    const model = await Model.find({delete : false}) ;
    res.json(model);
}

module.exports.detail = async (req,res)=>{
    const modelId = req.params.id ;
    const model = await Model.findOne(
        {
            delete : false ,
            _id : id ,
        }
    )
    res.json(model) ;
}