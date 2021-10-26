import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/landing/header/Navbar.js';
import useEagerConnect from './hooks/useEagerConnect'

function App() {
  useEagerConnect()
  return (
    <>
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Landing} />
            </Switch>
          </Router>
    </>
  );
}

export default App;
