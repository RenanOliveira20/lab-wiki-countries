import './App.css';
import { BrowserRouter as Route , Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';

function App() {
  return (
      <div  className="App">
        <NavBar/>
        <CountriesList/>
        <Switch>
          <Route path=":/cca3"/>
        </Switch>
      </div>
  );
}

export default App;
