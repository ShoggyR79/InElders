import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Banner from './pages/Banner';
import Banner_Check from './pages/Banner_Check';
import Banner_Pro from './pages/Banner_Pro';
import Banner_Jour from './pages/Banner_Jour';
import Journal2 from './pages/Journal2';
import Blog from './pages/Blog';
import Checklist from './pages/Checklist';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Banner} />
                <Route path="/Checklist" exact component={Banner_Check} />
                <Route path="/Journal" exact component={Banner_Jour} />
                <Route path="/Profile" exact component={Banner_Pro} />
            </Switch>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Checklist" exact component={Checklist} />
                <Route path="/Journal" exact component={Journal2} />
                <Route path="/Profile" exact component={Profile} />
            </Switch>
            <Contact />
        </Router>
    );
}
export default App;