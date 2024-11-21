const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/connection");
const musicalRoutes = require("./Routers/musical.Router");
const playlistRoutes = require("./Routers/playlist.Routes");
const port = 8080;

app.use(express.json());
app.use(cors());

app.use("/musicals", musicalRoutes);
app.use("/playlists", playlistRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`The server is start on port ${port}`);
});