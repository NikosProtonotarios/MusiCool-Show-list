const Musical = require("../models/musicalModel");

const getAllMusicals = async (req, res) => {
    try {
        const musicals = await Musical.find({});
        return res.status(200).send({ msg: "Musicals retrieved successfully", data: musicals });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const createMusical = async (req, res) => {
    try {
        const { name, country, city, date } = req.body;
        if (!name || !country || !city) {
            return res.status(400).send({ msg: "Name, country, and city are required." });
        }

        const musical = new Musical(req.body); 
        await musical.save();

        return res.status(201).send({msg: "Musical created successfully", data: musical});
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const updateMusical = async (req, res) => {
    try {
        const { id } = req.params;
        const musical = await Musical.findByIdAndUpdate(id, req.body, { new: true });

        if (!musical) {
            return res.status(404).send({ msg: "Musical not found" });
        }

        return res.send(musical);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const deleteMusical = async (req, res) => {
    try {
        const { id } = req.params;
        const musical = await Musical.findByIdAndDelete(id);

        if (!musical) {
            return res.status(404).send({ msg: "Musical not found" });
        }

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