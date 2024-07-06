import React from "react";
import TrackResultContainer from "../TrackResultContainer/TrackResultContainer";
import styles from "./SearchResults.module.css"

function SearchResults() {
    const firstTrack = {
        songName: "Auber",
        artist: "Sauret",
        album: "Danhauser"
    };
    const secondTrack = {
        songName: "Lalo",
        artist: "Koechlin",
        album: "Mozin"
    };

    return (
        <>
        <div className={styles.border}>
            <h1>Search results</h1>
            <TrackResultContainer 
                trackSongName={firstTrack.songName}
                trackArtist={firstTrack.artist}
                trackAlbum={firstTrack.album}
            />
            <TrackResultContainer 
                trackSongName={secondTrack.songName}
                trackArtist={secondTrack.artist}
                trackAlbum={secondTrack.album}
            />
        </div>
        </>
    );
}

export default SearchResults;