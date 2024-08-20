import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css"

function Playlist(props) {
    const handleNameChange = (event) => {
        props.updatePlaylistName(event.target.value);
    };
    
    const saveToSpotify = () => {
        props.saveToSpotify();
        props.updatePlaylistName("");
    };
    return (
        <>
            <div className={styles.border}>
                <input
                    placeholder={props.playlistName === "" ? "Playlist name" : props.playlistName}
                    className={styles.inputh1}
                    onChange={handleNameChange}
                    value={props.playlistName}
                />
                <Tracklist
                    tracklist={props.tracklist}
                    removeFromTracklist={props.removeFromTracklist}
                />
                <button onClick={saveToSpotify}>Save to Spotify</button>
            </div>
        </>
    );
}

export default Playlist;