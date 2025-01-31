
const ctg = require('../services/categorieService')


const createCatg = async (req, res) => {
    try {
        const catg = await ctg.createCategorie(req.body);
        res.status(201).json(catg)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllCatg = async (req, res) => {
    try {
        const catg = await ctg.getAllCategorie();
        res.status(200).json(catg);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCatgById = async (req, res) => {
    try {
        const catg = await ctg.getCategorieById(req.params.id);
        if (!catg) return res.status(404).json({ message: 'Categorie not found' });
        res.status(200).json(catg);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCatg = async (req, res) => {
    try {
        const catg = await ctg.updateCategorie(req.params.id, req.body);
        res.status(200).json(catg);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCatg = async (req, res) => {
    try {
        await ctg.deleteCategorie(req.params.id);
        res.status(200).json({ message: 'Categorie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    createCatg,
    getAllCatg,
    getCatgById,
    updateCatg,
    deleteCatg
}