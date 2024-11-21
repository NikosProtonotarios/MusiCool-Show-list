const {
    updateMusicalInPlaylist,
    deleteItem
} = require("../controllers/item.controller");

const express = require("express");
const router = express.Router();

router.put("/:playlistId/:musicalId", updateMusicalInPlaylist);
router.delete("/:playlistId/:musicalId", deleteItem);

module.exports = router;