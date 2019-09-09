
import {AUTH_SUCCESS,ERROR_MSG, LOGOUT,UPLOAD_SUCCESS,UPLOAD_ERROR}  from './action-tybe'

import {reqRegister, reqLogin,reqUpload} from '../api/index'
import { async } from 'q';
//import { async } from 'q';

//失败同步action
const error_msg = (msg) => ({type:ERROR_MSG,data:msg})
//成功同步action
const auth_success = (user)  =>({type:AUTH_SUCCESS,data:user})
//退出登录
const syn_logout = (data)  =>({type:LOGOUT, data:data})
// 发布头条成功
const upload_success = (data) =>({type:UPLOAD_SUCCESS,data:data}) 
//发布头条失败
const upload_error = (msg) =>({type:UPLOAD_ERROR,data:msg})

export function register(username,password,password2,e_mail){
        //进行表单验证
       //debugger
        if(!username||!password||!password2){
            return error_msg('用户名和密码不能为空')
        }
        if(password!==password2){
            return error_msg('两次密码不一致')
        }
        return async dispatch =>{
                const res = await reqRegister({username,password,e_mail})
                const result = res.data
                   /// debugger
                if(result.code ===0){
                    dispatch(auth_success(result.data))
                }else{

                    dispatch(error_msg(result.msg))

                }
            
        }

}

export function login(username,password){
    //进行表单验证
   //debugger
    return async dispatch =>{
            const res = await reqLogin({username,password})
            const result = res.data
               /// debugger
            if(result.code === 0){
                dispatch(auth_success(result.data))
            }else{

                dispatch(error_msg(result.msg))
            }     
    }

}

export function logout(){

    return dispatch => {

        dispatch(syn_logout({logout:true}))
    }

}

//上传的异步action
export function upload(formData){

     //   console.log(formData.get('title'))
     //验证填写内容是否为空
     if(!formData.get('title')){
         return upload_error('标题不能为空')
     }
     if(!formData.get('topic')){
        return upload_error('请至少选择一个话题')
     }
     if(!formData.get('content')){
        return upload_error('内容不能为空')
     }
     if(!formData.get('file')){
        return upload_error('请选择图片')
     }


    return async dispatch => {

        
            const res = await reqUpload(formData)
                //发送异步请求
            const result = res.data
            if(result.code === 0){
                dispatch(upload_success(result.data))
            }else{
                dispatch(upload_error(result.msg))
            }

    }
}