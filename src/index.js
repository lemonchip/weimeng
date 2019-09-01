import React from 'react';
import ReactDOM from 'react-dom';
import  {HashRouter,Route,Switch}    from 'react-router-dom'
//import App from './App';
import Main from './components/main/Main'
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import './components/app.less'

ReactDOM.render((        
    
    <HashRouter>
    <Switch>
    <Route path='/login' component={Login}></Route>
    <Route path='/register' component={Register}></Route>
    <Route  component={Main}></Route>
    </Switch>
    </HashRouter>
    
    ), document.getElementById('root'));



