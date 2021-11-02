import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Registrera from './views/Registrera'
import Kundlista from './views/Kundlista'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Registrera" exact component={Registrera} />
        <Route path="/" exact component={Kundlista} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
