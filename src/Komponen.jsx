import React from 'react';
import {
    Switch,
    Redirect
} from 'react-router';
import {
    Route
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

class Komponen extends React.Component
{
    render()
    {
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default Komponen;