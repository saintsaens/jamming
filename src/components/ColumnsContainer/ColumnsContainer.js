import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import styles from "./ColumnsContainer.module.css"

function ColumnsContainer(props) {
  return (
    <>
      <div className={styles.container}>
        <SearchResults
          searchResults={props.searchResults}
          addToTracklist={props.addTrackToTracklist}
          />
        <Playlist
          playlistName={props.playlistName}
          tracklist={props.tracklist}
          removeFromTracklist={props.removeTrackFromTracklist}
          updatePlaylistName={props.updatePlaylistName}
        />
      </div>
    </>
  );
}

export default ColumnsContainer;
