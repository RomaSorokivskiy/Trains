import $api from "../http";
export default class TicketService {
    static async createTicket(name,price,date,time,placeFrom,placeTo,vip) {
        return $api.post('/api/createTicket', {name,price,date,time,placeFrom,placeTo,vip})
    }
    static async updateTicket(ticket) {
        return $api.put('/api/updateTicket', ticket)
    }
    static async deleteTicket(ticket) {
        return $api.delete(`/api/deleteTicket`, ticket)
            .then(response => console.log(response))
    }
}