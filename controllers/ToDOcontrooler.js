const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (err) {
        console.error("Error fetching ToDo items:", err);
        res.status(500).send('Error retrieving data');
    }
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    try {
        const data = await ToDoModel.create({ text });
        console.log("Added successfully:", data);
        res.send(data);
    } catch (err) {
        console.error("Error saving ToDo:", err);
        res.status(500).send('Error saving data');
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    try {
        await ToDoModel.findByIdAndUpdate(_id, { text });
        res.send("Updated successfully");
    } catch (err) {
        console.error("Error updating ToDo:", err);
        res.status(500).send('Error updating data');
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
        await ToDoModel.findByIdAndDelete(_id);
        res.send("Deleted successfully");
    } catch (err) {
        console.error("Error deleting ToDo:", err);
        res.status(500).send('Error deleting data');
    }
};
