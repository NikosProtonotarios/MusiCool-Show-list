import "./App.css";
import Playlist from "./components/Playlist";
import Musicals from "./components/Musicals";
import MusicalList from "./components/musicalList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserPlaylist from "./components/userPlaylist";

function App() {
  const [musicals, setMusicals] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const handlePlaylistChange = (event) => {
    event.preventDefault();
    setPlaylistName(event.target.value);
  };

  async function getAllMusicals() {
    try {
      let response = await axios.get("http://localhost:8080/musicals");
      console.log(response.data);
      setMusicals(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllMusicals();
  }, []);

  async function deleteMusical(id) {
    const confirmed = window.confirm("Do you want to delete this musical?");

    if (confirmed) {
      try {
        let response = await axios.delete(
          `http://localhost:8080/musicals/${id}`
        );
        console.log(response.data);
        setMusicals(musicals.filter((musical) => musical._id !== id));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Deletion cancelled");
    }
  }

  return (
    <div className="App">
      <h1 className="title">MUSICOOL SHOW-list</h1>
      <div className="container">
        <div>
          <Musicals getAllMusicals={getAllMusicals} />
          <MusicalList musicals={musicals} deleteMusical={deleteMusical} />
        </div>
        <div>
          <Playlist />
          {/* <UserPlaylist /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
