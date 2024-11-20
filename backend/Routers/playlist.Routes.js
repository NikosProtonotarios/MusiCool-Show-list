const { 
    getAllPlaylists, 
    createPlaylist, 
    updatePlaylist, 
    deletePlaylist, 
} = require("../controllers/playlist.controller");

const express = require("express");
const router = express.Router();

router.get("/", getAllPlaylists);
router.post("/create", createPlaylist);
router.put("/:id", updatePlaylist);
router.delete("/:id", deletePlaylist);

module.exports = router;