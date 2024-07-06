import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css"

function Playlist() {
    return (
        <>
        <div className={styles.border}>
            <h1>Playlist</h1>
            <Tracklist />
            <button>Save to Spotify</button>
        </div>
        </>
    );
}

export default Playlist;