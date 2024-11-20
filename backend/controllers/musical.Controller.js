const Musical = require("../models/musicalModel");

const getAllMusicals = async (req, res) => {
    try {
        const musicals = await Musical.find({});
        return res.send(musicals);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const createMusical = async (req, res) => {
    try {
        const musical = new Musical(req.body);
        await musical.save();
        return res.status(201).send(musical);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const updateMusical = async (req, res) => {
    try {
        const { id } = req.params;
        const musical = await Musical.findByIdAndUpdate(id, req.body, { new: true });
        return res.send(musical);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const deleteMusical = async (req, res) => {
    try {
        const { id } = req.params;
        await Musical.findByIdAndDelete(id);
        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

module.exports = { 
    getAllMusicals, 
    createMusical, 
    updateMusical, 
    deleteMusical,
};