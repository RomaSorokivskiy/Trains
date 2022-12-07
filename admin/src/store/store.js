import {makeAutoObservable} from "mobx";
import TicketService from "../service/ticket.service";

export default class Store {
    constructor() {
        makeAutoObservable(this)
    }

    setTicket(ticket) {
        this.ticket = ticket;
    }

    async createTicket(name,price,date,time,placeFrom,placeTo,vip) {
        try {
            const response = await TicketService.createTicket(name,price,date,time,placeFrom,placeTo,vip);
            this.setTicket(response);
        }catch (e) {
            console.log(e);
        }
    }
    async updateTicket(ticket) {
        try {
            const response = await TicketService.updateTicket(ticket);
            this.setTicket(response);
        }catch (e) {
            console.log(e);
        }
    }
    async deleteTicket(ticket) {
        try {
            const response = await TicketService.deleteTicket(ticket)
            this.setTicket(response);
        }catch (e) {
            console.log(e);
        }
    }
}