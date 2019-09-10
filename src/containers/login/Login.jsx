import React, {Component} from 'react';
import {Button,
        List,
        WingBlank,
        WhiteSpace,
        InputItem 
    }  from 'antd-mobile'

import {Redirect} from  'react-router-dom'
import {connect}    from 'react-redux'
import {login}  from '../../redux/action'
import './login.less'
import { relative } from 'path';
 class Login extends Component {

    state = {
        username : '',
        password : ''
    }

    loginButton = {
        position: 'relative',
        top: '30px',
        borderRadius:'20px',
        boxShadow: '2px 2px 3px #888888'
    }

    line = {
        margin:'0px',
        padding:'0px',
        width:'100%',
        height:'1px',
        background:'#424242'
    }

    redLine = {
        margin:'0px',
        padding:'0px',
        width:'30%',
        height:'5px',
        background:'#F50057'

    }

    sector = {
        margin:'0px',
        padding:'0px',
        height:"30%",
        width:'80%',
        position:'absolute',
        bottom:'0px',
        right:'0px',
       // background:'#d7ccc8',
        background: 'linear-gradient(-45deg,#F50057,#FCE4EC)',
        borderRadius:'100% 0 0',
       // boxShadow: '-2px 1px 10px #888888'
    }

    flag = true

    buttonAble = () => {
        if(this.state.username.length>1
           ){
            this.flag = false
        }else{
            this.flag = true 
        }
    }

    handerChange = (name,val) =>{
        this.buttonAble()
        this.setState({[name] : val})
    }

    login = () => {
        console.log(this.state)

        this.props.login(
            this.state.username,
            this.state.password
           
            )
    }

    render() {
    //     if(this.props.redirectTo){
    //     console.log(this.props.redirectTo)
    // }else{
    //     console.log('no')
    // }

    //成功之后跳转首页
        const {redirectTo,msg} = this.props
        if(redirectTo==='/'){
           // debugger
            return <Redirect to={redirectTo}/>
        }
    return (       
    <div style={{background:'WRITE'}}>
        <h1 style={{marginBottom:'0px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登&nbsp;录</h1>
        <div style={this.redLine}></div>
        <div  style={{position:'relative',top:'9em'}}>
       <WingBlank>
       {msg ? <p>{msg}</p> : null} 
       
           <List >
               <InputItem 
               
               placeholder="输入用户名" 
               onChange={val =>{  this.handerChange('username',val)}}
               >
               
               </InputItem>
               <div style={this.line}></div>
               <WhiteSpace size='xl'/>
               
               
                
               <InputItem 
               
               placeholder="输入密码" 
               type='password'
               onChange={val =>{this.handerChange('password',val)}}
               >
               
               </InputItem>
               
               <div style={this.line}></div>
               <WhiteSpace size='xl'/>
           </List>

           <Button type='primary' onClick={this.login} disabled={this.flag} style={this.loginButton}>登录</Button>
       </WingBlank>
       </div>

       <div style={this.sector}></div>
    </div>

    );
    }
}
export default connect(
    state => state.user,
    {login}
)(Login)