import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NavBar from './components/NavBar';
import Simple from './components/Simple';
import Hex from './components/Hex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { func } from "prop-types";

export default function App() {
  const colors = [
    'pink', 'yellow', '#fafafa', 'rgb(230,34,27)', 'green'
  ];
  const [currentColor, setCurrrentColor] = useState('pink');
  
  const handleSimpleClick = () => {
    let index = Math.floor(Math.random() * colors.length);
    let color = colors[index];
    setCurrrentColor(color)
  }

  const handleHexClick = () => {
    let randomColor = Math.floor(Math.random() * 14566578).toString(16);
    let color = `#${randomColor}`;
    setCurrrentColor(color)
  }

  return (
    <Router>
      <div className='App' style={{height:'100vh', background:currentColor}}>
        <NavBar/>
        <main className='container'>
          <Switch>
            <Route path='/simple' component={Simple}>
              <Simple onClick={handleSimpleClick} color={currentColor} />
            </Route>
            <Route path='/hex' component={Hex}>
              <Simple onClick={handleHexClick} color={currentColor} />
            </Route>
            <Redirect from='/' exact to='/simple'/>
          </Switch>
        </main>
      </div>
    </Router>
  )

}
