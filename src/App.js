import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Users from './components/users'
import Contact from './components/contact'
import Home from './components/Home'
import Notfound from './components/notfound';
import Button from '@material-ui/core/Button';

export default class App extends React.Component {
  render() {
    const routing = (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/contact">Contact</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    )
    return (
      <div className="App">
        {routing}
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}
