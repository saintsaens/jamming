import React from "react";
import styles from "./Track.module.css"

function Track() {
    return (
        <>
        <div className={styles.border}>
            <h3>Track</h3>
            <ul>
                <li>Artist</li>
                <li>Song name</li>
            </ul>
        </div>
        </>
    );
}

export default Track;