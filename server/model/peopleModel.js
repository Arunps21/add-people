const mongoose = require("mongoose")

const peopleSchema = new mongoose.Schema({
    name:{type:String},
    num:{type:Number}
},{timestamps:true})

const peopleModel = mongoose.model("people_tbl",peopleSchema)

module.exports = peopleModel