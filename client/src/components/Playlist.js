import React, {useState} from "react";

function Playlist() {

    const [playlistName, setPlaylistName] = React.useState("");

    const handlePlaylistChange = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div>
            <form onSubmit="">
              <div className="create-playlist">
                <div>
                    <label htmlFor="playlist-name">Title</label>
                    <input id="playlist-name" type="text" placeholder="Enter playlist name" value={playlistName} onChange={handlePlaylistChange} />
                </div>
                <button type="submit">Create ShowList</button>
              </div>
              
              <div className="playlist">
               <div className="playlist-input">
                <div>
                    <label htmlFor="musical">Musical</label>
                    <input id="musical" type="text" placeholder="Enter a musical show" />
                </div>
                <button type="submit">Delete ShowList</button>
               </div>
                <h1>{playlistName}</h1>
                <h1></h1>
              </div>

            </form>
        </div>
    )
}

export default Playlist;