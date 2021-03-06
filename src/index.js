import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CadastroVideo from './Pages/Cadastro/Video';
import CadastroCategoria from './Pages/Cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Cadastro/Video" component={CadastroVideo} exact/>
      <Route path="/Cadastro/Categoria" component={CadastroCategoria} exact/>      
      <Route component={() => (<div>Error</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
