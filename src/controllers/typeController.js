
const tp = require('../services/typeService');


const createType = async (req, res) => {
    try{
        const type = await tp.createType(req.body);

        if(!type.ticketsId) return res.status(404).json('Not found');

        res.status(201).json(type);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}

const deleteType = async (req, res) => {
    try {
        await tp.deleteType(req.params.id);
        res.status(200).json('Type Delete successful');
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}

const updateType = async (req, res) =>{
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllType = async (req, res) => {
    try {
        const type = await tp.getAllType();
        res.status(200).json(type)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}

const getTypeById = async (req, res) => {
    try {
        const type = await tp.getTypeById(req.params.id);
        res.status(200).json(type)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createType,
    deleteType,
    updateType,
    getAllType,
    getTypeById
}