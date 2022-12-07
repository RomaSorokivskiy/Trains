const TicketModel = require('../models/ticket.model');
const TicketDto = require('../dtos/ticket.dto');
const {ObjectId} = require("mongodb");
const {body} = require("express-validator");

class TicketService {
    async createTicket(name,price,date,time,placeFrom,placeTo) {

        const ticket = await TicketModel.create({name,price,date,time,placeFrom,placeTo});
        return {ticket};
    }
    async updateTicket(body) {
        const ticket = await TicketModel.findOneAndUpdate({_id:body._id}, {_id:body._id,name: body.name,price: body.price,date: body.date,time: body.time,placeFrom: body.placeFrom,placeTo: body.placeTo}, {new:true})
        return {ticket};
    }
    async deleteTicket(body){
        const ticket = await TicketModel.findOneAndDelete({_id:body._id})
        return {ticket};
    }
    async getTickets() {
        const tickets = await TicketModel.find();
        return {tickets};
    }
}
module.exports = new TicketService();
