import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/main';
import Kontakt from './pages/Kontakt';
import info from './pages/informacje';
import faq from './pages/faq';
import konto from './pages/konto';
import Logowanie from './pages/logowanie';
import rejestracja from './pages/rejestracja';
import odzyskaj from './pages/odzyskaj';
function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/kontakt" component = {Kontakt}/>
        <Route path ="/stronaglowna" component = {Home}/>
        <Route path="/informacje" component = {info}/>
        <Route path="/faq" component = {faq}/>
        <Route path="/konto" component = {konto}/>
        <Route path="/logowanie" component = {Logowanie}/>
        <Route path="/rejestracja" component = {rejestracja}/>
        <Route path="/odzyskaj" component = {odzyskaj}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
