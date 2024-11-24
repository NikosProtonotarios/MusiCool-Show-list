import React, { useEffect, useState } from "react";
import axios from "axios";
import UserPlaylist from "./userPlaylist";

function Playlist() {
  // State to track the playlist name and the musical names
  const [playlistName, setPlaylistName] = useState("");
  const [musicals, setMusicals] = useState([]); // Track the musical name input
  const [addMusical, setAddMusical] = useState(false); // Flag to add musical to the playlist
  const [showList, setShowList] = useState([]);
  // const [selectedMusicalIds, setSelectedMusicalIds] = useState([]);

  // console.log(selectedMusicalId);
  // Handle input change for playlist name
  function handlePlaylistNameChange(event) {
    setPlaylistName(event.target.value); // Update the playlist name with the user's input
  }

  console.log(playlistName);
  // Handle input change for musical name
  function handleMusicalChange(event) {
    setMusicals(event.target.value); // Update the musical name with the user's input
  }
  console.log(showList);
  async function handleCreatingNewList(e) {
    e.preventDefault();
    setAddMusical(!addMusical);
    try {
      let newList = {
        name: playlistName,
      };

      const response = await axios.post(
        "http://localhost:8080/playlists/create",
        newList
      );
      console.log(response.data);
      setShowList([...showList, response.data]);
      alert("Playlist created successfully!");

      setPlaylistName(""); // Reset the playlist name
    } catch (error) {
      console.log(error.message);
    }
  }
   console.log(addMusical);

   async function fetchAllLists() {
    try {
     let response = await axios.get("http://localhost:8080/playlists");
     setShowList(response.data.data);
    console.log(response);
    } catch (error) {
      console.log(error.message);
    }
   }

   useEffect(() => {
    fetchAllLists();
   }, []);

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
              value={playlistName} // Bind the playlist name input to state
              onChange={handlePlaylistNameChange} // Update playlist name state
            />

          </div>
          <input type="submit" value="Create ShowList" />
        </div>
      </form>
      {/* {addMusical ? <UserPlaylist /> : null} */}
      <div className="showlist">
        <h3>Current Showlist</h3>
        <div className="showlist-container">
          {showList.length > 0 ? showList.map((showItem) => {
            return (
              <div key={showItem.id}>
                <h4>{showItem.name}</h4>
              </div> 
            )
          }): <p>No showlists found</p>}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
