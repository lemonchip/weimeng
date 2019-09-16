import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Head.less'


 class Head extends Component{
   

    constructor(props){
        super(props)
    }

    goBack = ()=>{
       
        console.log('返回')
        this.props.history.push('/home')
    
    }

    render(){
    return(
        <div id = 'head-main'>
            <div id= 'head'>
                <span>正&nbsp;&nbsp;文</span>
            </div>
            <img src={require('../../assets/icon/return.png')} id='return-img' onClick = {()=>this.goBack()}></img>
        </div>
    )
}


 }

export default withRouter(Head)