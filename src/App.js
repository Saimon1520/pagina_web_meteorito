import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    </div>
  );
}

export default App;
