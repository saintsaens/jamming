import React from "react";
import styles from "./Tracklist.module.css"
import Track from "../Track/Track";

function Tracklist(props) {
    return (
        <>
            <div className={styles.container}>
                {props.tracklist.map((track) => {
                    return (
                        <>
                            <Track
                                title={track.title}
                                artist={track.artist}
                                album={track.album}
                            />
                            <button className={styles.button}>Remove from playlist</button>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Tracklist;