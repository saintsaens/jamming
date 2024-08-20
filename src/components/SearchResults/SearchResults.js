import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css"

function SearchResults(props) {

    return (
        <>
            <div className={styles.container}>
                <h1>Results</h1>
                {props.searchResults.map((track) => {
                    return (
                        <>
                            <Track
                                title={track.title}
                                artist={track.artist}
                                album={track.album}
                            />
                            <button className={styles.button} onClick={() => {props.addToTracklist(track.id)}}>Add to playlist</button>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default SearchResults;