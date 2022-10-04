
import './App.css';

import Header from './components/Header/Header';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Board/>
      </main>
    </div>
  );
}

export default App;
