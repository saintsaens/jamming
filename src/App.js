import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ColumnsContainer from './components/ColumnsContainer/ColumnsContainer';
import { useMemo, useState } from 'react';

function App() {
  const firstTrack = {
    id: 1,
    uri: "spotify:track:11dFghVXANMlKmJXsNCbNl",
    title: "Sky is crying",
    artist: "Blaze",
    album: "Pradher Boilly Joseph Rouget de Lisle"
  };
  const secondTrack = {
    id: 2,
    uri: "spotify:track:4JJKuulfocD4ni94vMzpDs",
    title: "Auber",
    artist: "Sauret",
    album: "Danhauser Vialon Offenbach Sérieyx Dourlen"
  };
  const thirdTrack = {
    id: 3,
    uri: "spotify:track:0crY7pPfWKmVzMW03UWN0O",
    title: "Lalo",
    artist: "Koechlin",
    album: "Mozin"
  };

  const [searchResults, setSearchResults] = useState([firstTrack, secondTrack, thirdTrack]);
  const [tracklist, setTracklist] = useState([thirdTrack]);
  const [playlistName, setPlaylistName] = useState("Playlist name");
  const playlistTracksURI = useMemo(
    () => tracklist.map(({ uri }) => ({ uri })),
    [tracklist]
  );

  const addTrackToTracklist = (newTrackId) => {
    if (!tracklist.some(track => track.id === newTrackId)) {
      const newTrack = searchResults.find(track => track.id === newTrackId);
      setTracklist((previousTracks) => [...previousTracks, newTrack]);
    }
  };

  const removeTrackFromTracklist = (trackToRemove) => {
    setTracklist((previousTracks) => previousTracks.filter(track => track.id !== trackToRemove.id));
  };

  const updatePlaylistName = newName => {
    setPlaylistName(newName);
  }

  const saveToSpotify = () => {
    setTracklist([]);
  };

  return (
    <>
      <div className="searchBar">
        <SearchBar />
      </div>
      <ColumnsContainer
        searchResults={searchResults}
        addTrackToTracklist={addTrackToTracklist}
        removeTrackFromTracklist={removeTrackFromTracklist}
        updatePlaylistName={updatePlaylistName}
        playlistName={playlistName}
        tracklist={tracklist}
        saveToSpotify={saveToSpotify}
      />
    </>
  );
}

export default App;
