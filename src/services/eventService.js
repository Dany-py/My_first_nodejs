
const dayjs = require('dayjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createEvent = async (eventData) => {    
    return await prisma.event.create({ data: eventData });
};

const deleteEvent = async (id) => {
    return await prisma.event.delete({ where: { id: parseInt(id, 10)}});
};

//Permet de supprimer automatiquement les évènements déjà passés de la db
const autodeleteEvent = async () => {
    const today = dayjs();
    const events = await prisma.event.findMany({
        select: {
            id: true,
            eventDate: true,
        }
    });

    for (const event of events) {
        if (dayjs(event.eventDate).isBefore(today)) {
            await deleteEvent(event.id);
        }
    }
};

const getAllEvent = async () => {
    return await prisma.event.findMany({        
        select: {
            id: true,
            creatorName: true, 
            createdAt: true,   
            eventName: true,   
            eventDate: true,   
            eventLocate: true, 
            artists: true,     
            boost: true,       
            categorie: true,   
            comments: true,    
            eventPrices: true, 
            tickets: true 
        },
    });
};

const getEventById = async (id) => {
    return await prisma.event.findUnique({ 
        where: { id: parseInt(id, 10) },
        select: {
            id: true,
            creatorName: true,
            date: true,
            eventName: true,   
            eventDate: true,
            eventLocate: true, 
            eventPrices: true,
            boost: true,
            categorie: true,
            artists: true,
            tickets: true,
            comments: true,
        },
    });
};

const updateEvent = async (id, eventData) => {
    return await prisma.event.update({
        where: { id: parseInt(id, 10) },
        data: eventData,
    })
};

module.exports = {
    createEvent,
    getAllEvent,
    getEventById,
    updateEvent,
    deleteEvent,
    autodeleteEvent
}
