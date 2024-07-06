import React from "react";
import styles from "./Track.module.css"

function Track({ trackNumber, songName, artist, album }) {
    return (
        <>
        <div className={styles.border}>
            <h3>Track {trackNumber}</h3>
            <ul>
                <li>{songName}</li>
                <li>{artist}</li>
                <li>{album}</li>
            </ul>
        </div>
        </>
    );
}

export default Track;