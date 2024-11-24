import React, {useState} from "react";

function UserPlaylist() {
  const [playlistUser, setPlaylistUser] = useState([]);

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
            <input type="submit" value="Enter a Musical"/>
          </div>
          <h2 className="userTitle"></h2>
        </div>
      </form>
    </div>
  );
}

export default UserPlaylist;
