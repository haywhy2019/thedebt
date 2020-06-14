import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="">
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
