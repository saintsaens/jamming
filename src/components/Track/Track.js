import React from "react";
import styles from "./Track.module.css"

function Track(props) {
    return (
        <>
        <div className={styles.border}>
            <h3>{props.title}</h3>
            <p>{props.artist} / {props.album}</p>
        </div>
        </>
    );
}

export default Track;