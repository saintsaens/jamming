import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ColumnsContainer from './components/ColumnsContainer/ColumnsContainer';
import { useState } from 'react';

function App() {
  const firstTrack = {
    id: 1,
    title: "Sky is crying",
    artist: "Blaze",
    album: "Pradher Boilly Joseph Rouget de Lisle"
  };
  const secondTrack = {
    id: 2,
    title: "Auber",
    artist: "Sauret",
    album: "Danhauser Vialon Offenbach Sérieyx Dourlen"
  };
  const thirdTrack = {
    id: 3,
    title: "Lalo",
    artist: "Koechlin",
    album: "Mozin"
  };

  const [searchResults, setSearchResults] = useState([firstTrack, secondTrack, thirdTrack]);
  const [tracklist, setTracklist] = useState([thirdTrack]);
  const [playlistName, setPlaylistName] = useState("Playlist name");

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
      />
    </>
  );
}

export default App;
