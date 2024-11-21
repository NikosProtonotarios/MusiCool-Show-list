const Playlist = require("../models/playlistModel");

const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({}).populate('musicals');
        return res.status(200).send({ msg: "Playlists retrieved successfully", data: playlists });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const getPlaylistById = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findById(id).populate('musicals'); // Populate musicals

        if (!playlist) {
            return res.status(404).send({ msg: "Playlist not found" });
        }

        return res.status(200).send({ msg: "Playlist retrieved successfully", data: playlist });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const createPlaylist = async (req, res) => {
    try {
        const { name, musicals } = req.body;
        if (!name) {
            return res.status(400).send({ msg: "Name is required." });
        }

        const playlist = new Playlist({ name, musicals });
        await playlist.save();

        await playlist.populate('musicals').execPopulate(); // Populate musicals

        return res.status(201).send(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const updatePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findByIdAndUpdate(id, req.body, { new: true }).populate('musicals'); // Populate musicals

        if (!playlist) {
            return res.status(404).send({ msg: "Playlist not found" });
        }

        return res.status(200).send({ msg: "Playlist updated successfully", data: playlist });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

const deletePlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findById(id).populate('musicals'); // Populate musicals before deletion

        if (!playlist) {
            return res.status(404).send({ msg: "Playlist not found" });
        }

        await Playlist.findByIdAndDelete(id); // Delete the playlist

        return res.status(200).send({ msg: "Playlist deleted successfully", data: playlist }); // Return the deleted playlist
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Internal server error", error });
    }
};

module.exports = { 
    getAllPlaylists,
    getPlaylistById,
    createPlaylist, 
    updatePlaylist, 
    deletePlaylist,
};