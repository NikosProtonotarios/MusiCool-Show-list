import React, { useState } from "react";
import axios from "axios";

function Playlist() {
  // State to track the playlist name
  const [playlistName, setPlaylistName] = useState([]);

  // Handle input change for playlist name
  function handleChange(event) {
    setPlaylistName(event.target.value); // Update the playlist name with the user's input
  }

  async function handleCreatingNewList(e) {
    e.preventDefault();
    try {
      let newList = {
        name:playlistName,
      };
      // let {name} = newList;
      const response = await axios.post("http://localhost:8080/playlists/create", newList);

      alert("Playlist created successfully!");

      // setPlaylistName("");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
        <h3>Create Your Showlist</h3>
      <form onSubmit={handleCreatingNewList}>
        <div className="create-playlist">
          <div>
            <label htmlFor="playlist-name">Title: </label>
            <input
              id="playlist-name"
              type="text"
              placeholder="Enter playlist name"
              value={playlistName} // Bind the input value to the state
              onChange={handleChange} // Update state on input change
            />
          </div>
          <input type="submit" value="Create ShowList" />
        </div>
      </form>
    </div>
  );
}

export default Playlist;
