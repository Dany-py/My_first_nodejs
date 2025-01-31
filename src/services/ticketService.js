

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTicket = async (ticketData) => {
    return await prisma.tickets.create({ ticketData })
}

const deleteTicket = async (id) => {
    return await prisma.tickets.delete({ where: { id: parseInt(id, 10) } })
}

module.exports = {
    createTicket,
    deleteTicket
}