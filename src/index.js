import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom'
//import App from './App';
import Main from './components/main/Main';
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import './components/app.less'
import './containers/login/login.less'
import {Provider}  from 'react-redux'
import store  from './redux/store'
import WriteHeadline   from './containers/WriteHeadline/WriteHeadline'
import HeadlineList   from './containers/headlineList/HeadlineList'
import HeadlineItem   from './containers/headlineItem/HeadlineItem'
import HeadlineContent from './containers/headlineContent/headlineContent'
ReactDOM.render((        
    <Provider store={store}>
    <HashRouter>
    <Switch>
    <Route path='/login' component={Login}></Route>
    <Route path='/register' component={Register}></Route>
    <Route path='/write' component={WriteHeadline}></Route>
    <Route path='/h' component={HeadlineList}></Route>
    <Route path='/hi' component={HeadlineContent}></Route>
    <Route  component={Main}></Route>
    </Switch>
    </HashRouter>
    </Provider>
    ), document.getElementById('root'));



    //配置博客
    //写博客
	///发呆

