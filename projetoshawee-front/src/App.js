import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Menu from './Menu';
import Perguntas from './Perguntas';
import Respostas from './Respostas';
import { Switch, Route } from 'react-router-dom';
import Perfil from './Perfil';

function App() {
  return (
    <div>
       <Navbar />
      <div className="row">
        <div className="col-md-2">
        <Menu />
        </div>
        <div className="col-md-10">
        <Switch>
        <Route path="/perguntas" exact component={Perguntas} />
        <Route path="/respostas" component={Respostas} />
        <Route path="/perfil" component={Perfil} />
        </ Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
