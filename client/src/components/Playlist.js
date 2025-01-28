import React, { useEffect, useState } from "react";
import axios from "axios";

function Playlist() {
  // State to track the playlist name
  const [playlistName, setPlaylistName] = useState("");
  const [showList, setShowList] = useState([]);

  // Handle input change for playlist name
  function handlePlaylistNameChange(event) {
    setPlaylistName(event.target.value); // Update the playlist name with the user's input
  }

  async function handleCreatingNewList(e) {
    e.preventDefault();
    try {
      let newList = {
        name: playlistName,
      };

      const response = await axios.post(
        "https://musicool-show-list.onrender.com/playlists/create",
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

  async function fetchAllLists() {
    try {
      let response = await axios.get("https://musicool-show-list.onrender.com/playlists");
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
          `https://musicool-show-list.onrender.com/playlists/${id}`
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
          <div className="input-groupContainer">
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
