import React from "react";
import styles from "./TrackResultContainer.module.css"
import Track from "../Track/Track";

function TrackResultContainer(props) {
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
                <button className={styles.button}>Add to playlist</button>
            </div>
        </>
    );
}

export default TrackResultContainer;