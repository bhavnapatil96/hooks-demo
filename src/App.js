import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ThemeContext, {themes} from './themeContext';
import { Button } from 'react-bootstrap';

import Employee from './components/employeeList';
import Readme from './components/readme';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [myTheme, setTheme] = useState(themes.light);

    return (
        <div className="App">
            <nav className="navbar navbar-light"
                 style={{
                     "backgroundColor":myTheme.background,
                     "color":myTheme.foreground
                 }}>
                <span className="navbar-brand mb-0 h1" style={{color: "white"}}>React Hooks Implemention</span>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Theme
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={()=>setTheme(themes.dark)}>Dark Theme</a>
                        <a className="dropdown-item" href="#" onClick={()=>setTheme(themes.light)}>Light Theme</a>
                    </div>
                </div>
            </nav>
            <BrowserRouter>
                <ThemeContext.Provider value={myTheme}>
                    <Route exact path="/" component={Employee}/>
                    <Route path="/readme" component={Readme}/>
                </ThemeContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
