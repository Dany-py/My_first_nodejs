
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createCategorie = async (categorieData) => {    
    return await prisma.categorie.create({ data: categorieData });
};

const deleteCategorie = async (id) => {
    return await prisma.categorie.delete({ where: { id: parseInt(id, 10)}});
};

const getAllCategorie = async () => {
    return await prisma.categorie.findMany({        
        select: {
            id: true,
            name: true,
            eventId: true,
            event: true
        },
    });
};

const getCategorieById = async (id) => {
    return await prisma.categorie.findUnique({ 
        where: { id: parseInt(id, 10) },
        select: {
            id: true,
            name: true,
            eventId: true,
            event: true
        },
    });
};

const updateCategorie = async (id, categorieData) => {
    return await prisma.categorie.update({
        where: { id: parseInt(id, 10) },
        data: categorieData,
    })
};

module.exports = {
    createCategorie,
    deleteCategorie,
    getAllCategorie,    
    getCategorieById,
    updateCategorie
}

