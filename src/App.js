import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Home } from './components/Home';
import Contacts from './components/Contacts';
import TaskList from './components/TaskList';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div style={{ textAlign: "center", position: "relative" }}>Palaukite...</div>
  }

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/semester1' exact render={(props) => (<TaskList {...props} semester={1} key={1} />)} />
        <Route path='/semester2' exact render={(props) => (<TaskList {...props} semester={2} key={2} />)} />
        <Route path='/semester3' exact render={(props) => (<TaskList {...props} semester={3} key={3} />)} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default App;
