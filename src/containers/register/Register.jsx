import React, {Component} from 'react';
import {Button,
        List,
        WingBlank,
        WhiteSpace,
        InputItem }  from 'antd-mobile'

import {Redirect} from  'react-router-dom'
import {connect}    from 'react-redux'
import {register}  from '../../redux/action'
import './register.less'

 class Register extends Component {

    constructor(props){
        super(props)
    }
    state = {
        username : '',
        password : '',
        password2: '',
        e_mail   : ''
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

    // componentWillUpdate(){
    //     this.buttonAble();
    // }

    handerChange = (name,val) =>{
        this.buttonAble()
        this.setState({[name] : val})
    }

    register = () => {
        console.log(this.state)

        this.props.register(
            this.state.username,
            this.state.password,
            this.state.password2,
            this.state.e_mail
            )
        
    }


        render() {
            if(this.props.redirectTo){
            console.log(this.props.redirectTo)
        }else{
            console.log('no')
        }
            const {redirectTo,msg} = this.props
            
            if(redirectTo){
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
                   <InputItem 
                   placeholder="确认密码" 
                   type='password'
                   onChange={val =>{this.handerChange('password2',val)}}
                   >
                     确认密码:
                   </InputItem>
                   <WhiteSpace size='xs'/>
                   <div className='placeholder'></div>
                   <InputItem 
                   placeholder="邮箱" 
                   onChange={val =>{this.handerChange('e_mail',val)}}
                   >
                     邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱:
                   </InputItem>
                   <WhiteSpace size='xs'/>
                   <div className='placeholder'></div>

                   <Button type='primary' onClick={this.register} disabled={this.flag}>确认注册</Button>
               </List>
           </WingBlank>
        </div>
        );
        }
}

export default connect(
    state => state.user,
    {register}
)(Register)