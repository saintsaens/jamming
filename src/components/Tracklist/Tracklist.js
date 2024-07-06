import React from "react";
import styles from "./Tracklist.module.css"
import TrackPlaylistContainer from "../TrackPlaylistContainer/TrackPlaylistContainer";

function Tracklist() {
    const firstTrack = {
        songName: "Sky is crying",
        artist: "Blaze",
        album: "Pradher"
    };

    return (
        <>
        <div className={styles.border}>
            <h2>Tracklist</h2>
            <TrackPlaylistContainer
                trackSongName={firstTrack.songName}
                trackArtist={firstTrack.artist}
                trackAlbum={firstTrack.album}
            />
        </div>
        </>
    );
}

export default Tracklist;