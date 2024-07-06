import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css"

function Tracklist() {
    const firstTrack = {
        trackNumber: 1,
        songName: "Sky is crying",
        artist: "Blaze",
        album: "Pradher"
    };

    return (
        <>
        <div className={styles.border}>
            <h2>Tracklist</h2>
            <Track
                trackNumber={firstTrack.trackNumber}
                songName={firstTrack.songName}
                artist={firstTrack.artist}
                album={firstTrack.album}
            />
        </div>
        </>
    );
}

export default Tracklist;