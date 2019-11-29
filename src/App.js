import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

const Angular = React.lazy(()=> import('./Angular'));
const ReactC = React.lazy(()=> import('./React'));
const BothApps = React.lazy(()=> import('./Both'));


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            Main app - React 16.11
          </header>
          <div>
            <ul className="navbar-nav">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/react'} className="nav-link">React</Link></li>
              <li><Link to={'/angular'} className="nav-link">Angular</Link></li>
              <li><Link to={'/both'} className="nav-link">Both</Link></li>
            </ul>
            <div className="app-body">
              <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/react' component={WaitingComponent(ReactC)} />
                    <Route path='/angular' component={WaitingComponent(Angular)} />
                    <Route path='/both' component={WaitingComponent(BothApps)} />
                </Switch>
            </div>
          </div>

        </div>
      </Router>
    );
  }

}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
