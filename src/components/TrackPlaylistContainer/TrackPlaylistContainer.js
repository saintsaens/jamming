import React from "react";
import styles from "./TrackPlaylistContainer.module.css"
import Track from "../Track/Track";

function TrackPlaylistContainer({ trackSongName, trackArtist, trackAlbum }) {
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
                <button className={styles.button}>Remove from playlist</button>
            </div>
        </>
    );
}

export default TrackPlaylistContainer;