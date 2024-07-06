import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css"

function Tracklist() {
    return (
        <>
        <div className={styles.border}>
            <h2>Tracklist</h2>
            <Track />
        </div>
        </>
    );
}

export default Tracklist;