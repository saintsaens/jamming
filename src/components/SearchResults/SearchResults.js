import React from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css"

function SearchResults() {
    const firstTrack = {
        trackNumber: 1,
        songName: "Auber",
        artist: "Sauret",
        album: "Danhauser"
    };
    const secondTrack = {
        trackNumber: 2,
        songName: "Lalo",
        artist: "Koechlin",
        album: "Mozin"
    };

    return (
        <>
        <div className={styles.border}>
            <h1>Search results</h1>
            <Track 
                trackNumber={firstTrack.trackNumber}
                songName={firstTrack.songName}
                artist={firstTrack.artist}
                album={firstTrack.album}
            />
            <Track 
                trackNumber={secondTrack.trackNumber}
                songName={secondTrack.songName}
                artist={secondTrack.artist}
                album={secondTrack.album}
            />
        </div>
        </>
    );
}

export default SearchResults;