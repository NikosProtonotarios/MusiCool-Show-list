import React from "react";

function UserPlaylist({playlistName}) {
  

  return (
    <div>
      <form>
        <div className="playlist">
          <div className="playlist-input">
            <div>
              <label htmlFor="musical">Musical: </label>
              <input
                id="musical"
                type="text"
                placeholder="Enter a musical show"
              />
            </div>
            <button type="submit">Enter a Musical</button>
          </div>
          <h2 className="userTitle">{playlistName}</h2>
        </div>
      </form>
    </div>
  );
}

export default UserPlaylist;
