import React, {Component} from 'react';
import {Button,
    List,
    WingBlank,
    WhiteSpace,
    }  from 'antd-mobile'
import Head from '../../components/head/Head'
import PersonalTop from '../personalTop/personalTop'
import {Redirect} from  'react-router-dom'
import {connect}    from 'react-redux'
import {logout}  from '../../redux/action'
import '../register/register.less'
 class Personal extends Component {


        logout = () =>{
            console.log('out')
            this.props.logout()
        }
    
        render() {
            //跳转到登录界面
            const{redirectTo} = this.props
            console.log(redirectTo)
            if(redirectTo==='/login'){
                return <Redirect to={redirectTo}></Redirect>
            }
        return (
        <div style={{zIndex:-1,height:'100%',width:'100%'}}>
            
            <PersonalTop />

            {/* <Button type='primary' onClick={this.logout} style={{zIndex:'1'}}>退出登录</Button>     */}
        </div>
        
        );
        }
}

export default connect(
    state => state.user,
    {logout}
)(Personal)