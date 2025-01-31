
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (userData) => {
    const user = await prisma.user.findUnique({ where: { email: userData.email } });
    if (user) throw new Error("User's email already exists");
    return await prisma.user.create({ data: userData });
};

const deleteUser = async (id) => {
    return await prisma.user.delete({ where: { id: parseInt(id, 10)}});
};

const getAllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        }
    });
};

const getUserById = async (id) => {
    return await prisma.user.findUnique({ 
        where: { id: parseInt(id, 10) },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            accessToken: true,
            refreshToken: true
        }
    });
};

const getUserByEmail = async (email) => {
    return await prisma.user.findUnique({ 
        where: { email },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            role: true,
            accessToken: true,
            refreshToken: true
        }
    });
};


const updateUser = async (id, userData) => {
    try {
        // Vérifiez si l'utilisateur existe
        const user = await prisma.user.findUnique({ where: { id: parseInt(id, 10) } });
        if (!user) {
            throw new Error('User not found');
        }

        // Mettez à jour l'utilisateur
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id, 10) },
            data: userData,
        });

        return updatedUser;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
};

const getUserByAccessToken = async (accessToken) => {
    return await prisma.user.findFirst({ 
        where: { accessToken },
        select: {
            name: true,
            role: true,
            refreshToken: true
        }
    });
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser,
    getUserByAccessToken
}