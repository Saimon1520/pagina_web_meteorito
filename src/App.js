import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowPeople from './components/show-people-component/ShowPeople';
import La_Palmera from './pages/La_Palmera';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element="" />
            <Route path="/La_Palmera" element={<La_Palmera/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
