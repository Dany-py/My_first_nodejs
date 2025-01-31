
const boost = require('../services/boostService');

const createBoost = async (req, res) => {
    
    try {
        const boosted = await boost.createBoost()
        res.status(201).json(boosted)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteBoost = async (req, res) => {
    try {
        await boost.deleteBoost(req.params.id);
        res.status(200).json({ message: 'Boost deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBoost = async (req, res) => {
    try {
        const boosted = await boost.updateBoost(req.params.id, req.body);
        res.status(200).json(boosted);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllBoost = async (req, res) => {
    try {
        const boost = await boost.getAllBoost();
        res.status(200).json(boost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBoostById = async (req, res) => {
    try {
        const boost = await boost.getBoostById(req.params.id);
        if (!boost) return res.status(404).json({ message: 'Boost not found' });
        res.status(200).json(boost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBoost,
    deleteBoost,
    updateBoost,
    getAllBoost,
    getBoostById,
}