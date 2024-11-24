const mongoose = require("mongoose");

const musicalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
    date: {type: Date, required: true},
    showlist: {type: mongoose.Schema.Types.ObjectId
        , ref: 'Playlist'
    }
});

const Musical = mongoose.model("Musical", musicalSchema);

module.exports = Musical;