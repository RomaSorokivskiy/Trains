const Router = require("express").Router;
const TicketController = require("../controllers/ticket.controller");

const router = new Router();

router.post('/createTicket', TicketController.createTicket);
router.put('/updateTicket', TicketController.updateTicket);
router.delete('/deleteTicket', TicketController.deleteTicket);
router.get('/tickets', TicketController.getTickets);

module.exports = router;