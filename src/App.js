import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  return (
    <>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;
