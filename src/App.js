import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ColumnsContainer from './components/ColumnsContainer/ColumnsContainer';
import { useState } from 'react';

function App() {
  const firstTrack = {
    title: "Sky is crying",
    artist: "Blaze",
    album: "Pradher Boilly Joseph Rouget de Lisle"
  };
  const secondTrack = {
    title: "Auber",
    artist: "Sauret",
    album: "Danhauser Vialon Offenbach Sérieyx Dourlen"
  };
  const thirdTrack = {
    title: "Lalo",
    artist: "Koechlin",
    album: "Mozin"
  };
  const [searchResults, setSearchResults] = useState([firstTrack, secondTrack, thirdTrack]);
  const [tracklist, setTracklist] = useState([thirdTrack]);
  const [playlistName, setPlaylistName] = useState("Playlist name");

return (
  <>
    <div className="searchBar">
      <SearchBar />
    </div>
    <ColumnsContainer
      searchResults={searchResults}
      playlistName={playlistName}
      tracklist={tracklist}
    />
  </>
);
}

export default App;
