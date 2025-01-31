
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createBoost = async (boostData) => {    
    return await prisma.boost.create({ data: boostData });
};

const deleteBoost = async (id) => {
    return await prisma.boost.delete({ where: { id: parseInt(id, 10)}});
};

const getAllBoost = async () => {
    return await prisma.boost.findMany({        
        select: {
            id: true,
            boost: true,
            eventId: true,
            event: true,
        },
    });
};

const getBoostById = async (id) => {
    return await prisma.boost.findUnique({ 
        where: { id: parseInt(id, 10) },
        select: {
            id: true,
            boost: true,
            eventId: true,
            event: true,
        },
    });
};

const updateBoost = async (id, boostData) => {
    return await prisma.boost.update({
        where: { id: parseInt(id, 10) },
        data: boostData,
    })
};

module.exports = {
    createBoost,
    deleteBoost,
    getAllBoost,    
    getBoostById,
    updateBoost
}

