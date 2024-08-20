import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css"

function Playlist(props) {
    return (
        <>
            <div className={styles.border}>
                <h1>{props.playlistName}</h1>
                <Tracklist
                    tracklist={props.tracklist}
                    onButtonClick={props.onButtonClick}
                />
                <button>Save to Spotify</button>
            </div>
        </>
    );
}

export default Playlist;