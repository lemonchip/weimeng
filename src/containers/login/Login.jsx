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
 class Login extends Component {

    state = {
        username : '',
        password : ''
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
    <div>
       <WingBlank>
       {msg ? <p>{msg}</p> : null} 
           <List>
               <InputItem 
               placeholder="输入用户名" 
               onChange={val =>{  this.handerChange('username',val)}}
               >
                 用&nbsp;户&nbsp;名:
               </InputItem>
               <WhiteSpace size='xs'/>
               <div className='placeholder'></div>
               <InputItem 
               placeholder="输入密码" 
               type='password'
               onChange={val =>{this.handerChange('password',val)}}
               >
                 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:
               </InputItem>
               <WhiteSpace size='xs'/>
               <div className='placeholder'></div>

               <Button type='primary' onClick={this.login} disabled={this.flag}>登录</Button>
           </List>
       </WingBlank>
    </div>
    );
    }
}
export default connect(
    state => state.user,
    {login}
)(Login)