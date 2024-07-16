import React from "react";
import styles from "./TrackPlaylistContainer.module.css"
import Track from "../Track/Track";

function TrackPlaylistContainer(props) {
    return (
        <>
            <div className={styles.trackContainer}>
                <div className={styles.track}>
                    <Track
                        songName={props.trackSongName}
                        artist={props.trackArtist}
                        album={props.trackAlbum}
                    />
                </div>
                <button className={styles.button}>Remove from playlist</button>
            </div>
        </>
    );
}

export default TrackPlaylistContainer;