const mongoose= require("mongoose")

const schema=mongoose.Schema({
    name:String,
    price:String,
    place:String

})
const Model=mongoose.model("/dishe",schema)


module.exports=Model