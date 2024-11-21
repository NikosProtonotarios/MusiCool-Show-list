const Playlist = require("../models/playlistModel");
const Musical = require("../models/musicalModel");
const Item = require("../models/itemModel"); // Assuming you have an Item model

// Function to update a musical in a playlist
const updateMusicalInPlaylist = async (req, res) => {
    try {
        const { playlistId, musicalId } = req.params; // Extract parameters from URL
        const updatedData = req.body; // Get updated data from request body

        // Step 1: Find the Playlist
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).send({ msg: "Playlist not found." });
        }

        // Step 2: Find the index of the musical in the playlist's musicals array
        const musicalIndex = playlist.musicals.findIndex(musical => musical.toString() === musicalId);
        if (musicalIndex === -1) {
            return res.status(404).send({ msg: "Musical not found in playlist." });
        }

        // Step 3: Update the musical in the array
        playlist.musicals[musicalIndex] = {
            ...playlist.musicals[musicalIndex].toObject(),
            ...updatedData, // Update the fields with the provided data
        };

        // Step 4: Save the playlist
        await playlist.save();

        // Step 5: Send Success Response
        return res.status(200).send({
            msg: "Musical updated successfully in the playlist.",
            data: playlist
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Server error." });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { playlistId, musicalId } = req.params; // Extract parameters from URL

        // Step 1: Find the Playlist
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).send({ msg: "Playlist not found." });
        }

        // Step 2: Check if the Musical Exists in the Playlist
        const musicalIndex = playlist.musicals.findIndex(musical => musical.toString() === musicalId);
        if (musicalIndex === -1) {
            return res.status(404).send({ msg: "Musical not found in the playlist." });
        }

        // Step 3: Remove the Musical from the Playlist's `musicals` array
        playlist.musicals.splice(musicalIndex, 1); // Removes the musical at the found index

        // Step 4: Save the updated Playlist
        await playlist.save();

        // Step 5: Send Success Response
        return res.status(200).send({
            msg: "Musical deleted successfully from the playlist.",
            data: playlist // Optionally, return the updated playlist
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Server error." });
    }
};

module.exports = { 
    updateMusicalInPlaylist,
    deleteItem
};