import React from "react";
import styles from "./SearchBar.module.css"

function SearchBar() {
    return (
        <>
            <form>
                <input type="text" className={styles.searchInput} />
                <input type="submit" value="Search" />
            </form>
        </>
    );
}

export default SearchBar;