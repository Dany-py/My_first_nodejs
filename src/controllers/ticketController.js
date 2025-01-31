
const tck = require('../services/ticketService')
const evC = require('../controllers/eventController')
const { v4:uuidv4 } = require('uuid')
const QRCode = require('qrcode')

const createTicket = async (req, res) =>{
    try {
        const ticket = await tck.createTicket(req.body);
        const event = await evC.getEventById(ticket.eventId)

        if(!ticket.eventId) return res.status(404).json({ error:"Event not found" })

        if(event.toTickets <= 0) return res.status(400).json({ message : "Tickets stock empty" });

        res.status(200).json({message: "Ticket created successfully", ticket});
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
}