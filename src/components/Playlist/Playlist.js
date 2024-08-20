import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css"

function Playlist(props) {
    const handleNameChange = (event) => {
        props.onPlaylistNameChange(event.target.value);
        props.updatePlaylistName(event.target.value);
    };
    };
    return (
        <>
            <div className={styles.border}>
                <input
                    placeholder={props.playlistName}
                    className={styles.inputh1}
                    onChange={handleNameChange}
                />
                <Tracklist
                    tracklist={props.tracklist}
                    removeFromTracklist={props.removeFromTracklist}
                />
                <button>Save to Spotify</button>
            </div>
        </>
    );
}

export default Playlist;