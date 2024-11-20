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
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Internal server error", error})
    }
};

const updatePlaylist = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Internal server error", error})
    }
};

const deletePlaylist = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Internal server error", error})
    }
};

module.exports = { 
    getAllPlaylists, 
    createPlaylist, 
    updatePlaylist, 
    deletePlaylist,
};