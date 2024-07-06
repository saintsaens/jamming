import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ColumnsContainer from './components/ColumnsContainer/ColumnsContainer';

function App() {
  return (
    <>
    <div className="searchBar">
      <SearchBar />
    </div>
      <ColumnsContainer />
    </>
  );
}

export default App;
