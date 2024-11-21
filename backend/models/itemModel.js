const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    musical: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Musical", 
        required: true 
    },
    playlist: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Playlist", 
        required: true 
    },
    addedAt: { 
        type: Date, 
        default: Date.now 
    },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;