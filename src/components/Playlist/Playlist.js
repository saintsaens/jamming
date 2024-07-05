import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist() {
    return (
        <>
            <h1>Playlist</h1>
            <Tracklist />
            <button>Save to Spotify</button>
        </>
    );
}

export default Playlist;