
const eventService = require('../services/eventService');
const dayjs = require('dayjs');
const cron = require('node-cron')

const createEvent = async (req, res) => {
    try {
        const today = dayjs();
        if(today > req.body.date){
            return res.status(400).json({message: "Date cannot be in the past"})
        }
        const event = await eventService.createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllEvent = async (req, res) => {
    try {
        const event = await eventService.getAllEvent();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getEventById = async (req, res) => {
    try {
        const event = await eventService.getEventById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEvent = async (req, res) => {
    try {
        const event = await eventService.updateEvent(req.params.id, req.body);
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        await eventService.deleteEvent(req.params.id);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

cron.schedule('0 0 * * *', () => {
    console.log('Exécution planifiée : Suppression des événements expirés');
    eventService.autodeleteEvent().catch(error => {
        console.error('Erreur lors de la suppression automatique des événements :', error);
    });
});

module.exports = {
    createEvent,
    getAllEvent,
    getEventById,
    updateEvent,
    deleteEvent,
};
