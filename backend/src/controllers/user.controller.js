import User from "../models/user.model.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()  //User is the model and .find() queries all docs in users collection
        res.status(200).json(users);
    } catch (error) {
        console.error(`Error: ${error.message}`)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const createUser =  async (req, res) => {
        res.status(200).json({ message: "User created succesfully!"});
}

export const updateUser =  (req, res) => {
    res.status(200).json({ message: "User updated succesfully!"});
}

export const deleteUser =  (req, res) => {
    res.status(200).json({ message: "User deleted succesfully!"});
}