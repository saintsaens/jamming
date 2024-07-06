import React from "react";
import styles from "./SearchResults.module.css"

function SearchResults() {
    return (
        <>
        <div className={styles.border}>
            <h1>Search results</h1>
            <ul>
                <li>Bla</li>
                <li>Bli</li>
            </ul>
        </div>
        </>
    );
}

export default SearchResults;