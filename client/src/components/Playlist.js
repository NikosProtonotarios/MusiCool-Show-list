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
      alert("A musical added successfully!");

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

  async function handleDelete(id) {
    const confirmed = window.confirm("Do you want to delete this musical?");

    if (confirmed) {
      try {
        let response = await axios.delete(
          `http://localhost:8080/playlists/${id}`
        );
        console.log(response.data);

        setShowList(showList.filter((showItem) => showItem._id !== id));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Deletion cancelled");
    }
  }

  useEffect(() => {
    fetchAllLists();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Create Your Musical List</h3>
      <form onSubmit={handleCreatingNewList}>
        <div className="create-playlist">
          <div>
            <label className="caligraf" htmlFor="playlist-name">
              Title:{" "}
            </label>
            <input
              className="enterAmusical"
              id="playlist-name"
              type="text"
              placeholder="Enter a musical to your list"
              value={playlistName} // Bind the playlist name input to state
              onChange={handlePlaylistNameChange} // Update playlist name state
            />
          </div>
          <input className="hue add" type="submit" value="Add a Musical to the List" />
        </div>
      </form>
      {/* {addMusical ? <UserPlaylist /> : null} */}
      <div className="showlist">
        <h2>Current Showlist</h2>
        <div className="showlist-container">
          {showList.length > 0 ? (
            showList.map((showItem) => {
              return (
                <div className="showItems" key={showItem.id}>
                  <h4>{showItem.name}</h4>
                  <p
                    onClick={() => handleDelete(showItem._id)}
                    className="deleteItem caligraf"
                  >
                    Delete
                  </p>
                </div>
              );
            })
          ) : (
            <p>No musical added found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
