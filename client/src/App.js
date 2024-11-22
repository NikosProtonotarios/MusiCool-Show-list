import './App.css';
import Playlist from './components/Playlist';
import Musicals from './components/Musicals';


function App() {
  return (
    <div className="App">
      <h1 className='title'>MUSICOOL SHOW-list</h1>
      <div className="container">
        <Musicals />
        <Playlist />
      </div>
    </div>
  );
}

export default App;