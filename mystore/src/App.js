import logo from './logo.svg';
import './App.css';
import { Main } from './conmponent/main';
import { Nav } from './conmponent/nav';
import  LogIn  from './conmponent/login';
import Register from './conmponent/register';
import {BrowserRouter as Router} from "react-router-dom";
import { useSelector } from 'react-redux';
import { Proudcts } from './conmponent/Comp_proudcts';
import { Header } from './conmponent/header';
import axios from "axios";

function App() {

  return (
    <div className="App">
    <Header></Header>
     <Router> 
      <Main></Main>
      {/* <LogIn/>
      <Register/> */}
      </Router>
    </div>
  );
}

export default App;
