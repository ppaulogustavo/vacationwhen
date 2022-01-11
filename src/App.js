import logo from './sun.png';
import './App.css';
import moment from "moment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Você pode agendar suas férias para {moment().add('d', 45).format('DD/MM/yyyy')}
        </p>

      </header>
    </div>
  );
}

export default App;
