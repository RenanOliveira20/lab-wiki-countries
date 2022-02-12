import './App.css';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import NavBar from './Components/NavBar';
import CountriesList from './Components/CountriesList';
import CountriesDetails from './Components/CountriesDetails';
import { Container } from './styles';

function App() {
  return (
      <Router>
        <NavBar/>
        <Container>
        <CountriesList/>
        <Switch>
          <Route path="/:cca3" component={CountriesDetails} />
        </Switch>
        </Container>
      </Router>
  );
}

export default App;
