import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import {Home} from './components/Home';
import {Contacts} from './components/Contacts';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div style={{textAlign: "center", position: "relative"}}>Palaukite...</div>
  }

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contacts" component={Contacts} />
        {/*<Route path='/wins/bygrid' exact render={(props) => (<WinnersByGrid {...props} api={"wins/bygrid"} pageTitle={"Laimėjimai iš tam tikros starto pozicijos"} />)} />*/}
      </Switch>
    </>
  );
}

export default App;
