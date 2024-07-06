import React from "react";
import styles from "./Track.module.css"

function Track({ songName, artist, album }) {
    return (
        <>
        <div className={styles.border}>
            <h3>{songName}</h3>
            <p>{artist} / {album}</p>
        </div>
        </>
    );
}

export default Track;