import './App.css';
import Playlist from './components/Playlist';
import Musicals from './components/Musicals';
import MusicalList from './components/musicalList';

function App() {
  return (
    <div className="App">
      <h1 className='title'>MUSICOOL SHOW-list</h1>
      <div className="container">
        <div>
          <Musicals />
          <MusicalList />
        </div>
        <Playlist />
      </div>
    </div>
  );
}

export default App;