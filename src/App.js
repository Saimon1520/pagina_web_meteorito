import logo from './logo.svg';
import './App.css';
import ShowPeople from './components/show-people-component/ShowPeople';

function App() {
  return (
    <div className="App">
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
