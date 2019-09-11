import React , {Component} from 'react'
import '../nva/Nva'
import Nva from '../nva/Nva';

import {Route,Switch,Redirect,HashRouter}  from 'react-router-dom'
import Home from '../../containers/home/Home';
import Trends from '../../containers/trends/Trends';
import Personal from '../../containers/personal/Personal';

    class Main extends Component {

      render(){

              return(
                
              <div>
         
                <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/trends' component={Trends}></Route>
                <Route path='/personal' component={Personal}></Route>

                </Switch>
    
              <Nva />
            </div>
            )
      }

    }

    export default Main ;