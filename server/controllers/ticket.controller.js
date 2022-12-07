const TicketService = require("../service/ticket.service")
class TicketController {
    async createTicket(req,res,next) {
        try {
            const {name,price,date,time,placeFrom,placeTo,vip} = req.body;
            const TicketData = await TicketService.createTicket(name,price,date,time,placeFrom,placeTo,vip);
            return res.json(TicketData);
        }catch (e) {
            console.log(e);
        }
    }
    async updateTicket(req,res,next) {
        try {
            const TicketData = await TicketService.updateTicket(req.body);
            return res.json(TicketData);
        }catch (e) {
            console.log(e)
        }
    }
    async deleteTicket(req,res,next) {
        try {
            //ToDo
            console.log(req.data)
            const TicketData = await TicketService.deleteTicket(req.body);
            return res.json(TicketData);
        }catch (e) {

        }
    }
    async getTickets(req,res,next) {
        try {
            const TicketData = await TicketService.getTickets();
            return res.json(TicketData);
        }catch (e) {

        }
    }
}

module.exports = new TicketController();