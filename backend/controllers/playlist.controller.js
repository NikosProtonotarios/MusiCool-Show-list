const Playlist = require("../models/playlistModel");

const getAllPlaylists = async (req, res) => {
    try {
        let playlists = await Playlist.find({});
        return res.send(playlists);
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Internal server error", error});
    }
};

const createPlaylist = async (req, res) => {
    try {
        const playlist = new Musical(req.body);
        await musical.save();
        return res.status(201).send(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const updatePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Musical.findByIdAndUpdate(id, req.body, { new: true });
        return res.send(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const deletePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        await Playlist.findByIdAndDelete(id);
        return res.status(204).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

module.exports = { 
    getAllPlaylists, 
    createPlaylist, 
    updatePlaylist, 
    deletePlaylist,
};