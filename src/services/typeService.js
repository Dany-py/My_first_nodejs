
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createType = async (typeData) => {
    return await prisma.type.create({ typeData })
}

const deleteType = async (id) => {
    return await prisma.type.delete({ where: { id: parseInt(id, 10) } })
}

const getAllType = async () => {
    return await prisma.type.findMany({
        select: {
            id: true,
            name: true,
            ticketsId: true, 
            tickets: true,
            price: true
        }
    }
    )
}

const getTypeById = async (id) => {
    return await prisma.type.findUnique({ 
        where: { id: parseInt(id, 10)},
        select: {
            id: true,
            name: true,
            ticketsId: true, 
            tickets: true,
            price: true
        }
    })
}

const updateType = async (id, typeData) => {
    return await prisma.type.update({
        where: { id: parseInt(id, 10) },
        data: typeData
    })
}

module.exports = {
    createType,
    deleteType,
    updateType,
    getAllType,
    getTypeById
}