
import {AUTH_SUCCESS,ERROR_MSG}  from './action-tybe'

import {reqRegister} from '../api'
import { async } from 'q';

//失败同步action
const error_msg = (msg) => ({type:ERROR_MSG,data:msg})
//成功同步action
const auth_success = (user)  =>({type:AUTH_SUCCESS,data:user})


export function register(username,password,password2,e_mail){
        //进行表单验证
        if(!username||!password||!password2){
            return error_msg('用户名和密码不能为空')
        }
        if(password!=password2){
            return error_msg('两次密码不一致')
        }
        return async dispatch =>{
                const res = await reqRegister(username,password,e_mail)
                const result = res.data

                if(result.code ==='0'){
                    dispatch(auth_success(result.data))
                }else{

                    dispatch(error_msg(result.msg))

                }


                
            
        }



}