import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import styles from "./ColumnsContainer.module.css"

function ColumnsContainer() {
  return (
    <>
    <div className={styles.container}>
      <SearchResults />
      <Playlist />
    </div>
    </>
  );
}

export default ColumnsContainer;
