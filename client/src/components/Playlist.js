import React from "react";

function Playlist({ handlePlaylistChange, setPlaylistName }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic here for any other actions after setting the playlist name
  };

  return (
    <div>
      <h3>Create Your Showlist</h3>
      <form onSubmit={handleSubmit}>
        <div className="create-playlist">
          <div>
            <label htmlFor="playlist-name">Title: </label>
            <input
              id="playlist-name"
              type="text"
              placeholder="Enter playlist name"
              onChange={handlePlaylistChange} // This updates the playlist name as user types
            />
          </div>
          <button type="submit">Create ShowList</button>
        </div>
      </form>
    </div>
  );
}

export default Playlist;
