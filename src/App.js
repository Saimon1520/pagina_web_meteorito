import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowPeople from './components/show-people-component/ShowPeople';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element="" />
          </Routes>
        </Router>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        

        <ShowPeople></ShowPeople>
      </header>
    </div>
  );
}

export default App;
