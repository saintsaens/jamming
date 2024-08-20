import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import styles from "./ColumnsContainer.module.css"

function ColumnsContainer(props) {
  return (
    <>
      <div className={styles.container}>
        <SearchResults
          searchResults={props.searchResults}
          onButtonClick={props.addTrackToTracklist}
        />
        <Playlist
          playlistName={props.playlistName}
          tracklist={props.tracklist}
        />
      </div>
    </>
  );
}

export default ColumnsContainer;
