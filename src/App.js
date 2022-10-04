
import './App.css';

import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Message/>
        <Board/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
