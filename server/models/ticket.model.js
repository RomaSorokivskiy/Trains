const {Schema, model} = require('mongoose');
const TicketModel = new Schema({
    name:{type:String, required:true, unique:false},
    price:{type:String, required:true, unique:false},
    date:{type:String, required:true, unique:false},
    time:{type:String, required:true, unigue:false},
    placeFrom:{type:String, required:true, unique:false},
    placeTo:{type:String, required:true, unique:false},
})

module.exports = model("Ticket", TicketModel);