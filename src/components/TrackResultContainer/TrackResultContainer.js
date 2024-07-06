import React from "react";
import styles from "./TrackResultContainer.module.css"
import Track from "../Track/Track";

function TrackResultContainer({ trackSongName, trackArtist, trackAlbum }) {
    return (
        <>
            <div className={styles.trackContainer}>
                <div className={styles.track}>
                    <Track
                        songName={trackSongName}
                        artist={trackArtist}
                        album={trackAlbum}
                    />
                </div>
                <button className={styles.button}>Add to playlist</button>
            </div>
        </>
    );
}

export default TrackResultContainer;