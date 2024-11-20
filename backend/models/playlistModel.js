const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    name: {type: String, required: true},
    musicals: [{type: mongoose.Schema.Types.ObjectId, ref: "Musical"}]
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;