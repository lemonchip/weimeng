import {combineReducers}   from 'redux'

import {AUTH_SUCCESS,ERROR_MSG } from './action-tybe'

const initUser = {
    username : '',
    e_mail   : '',
    msg      : '',
    redirectTo: ''
}

function user(state=initUser,action){

    switch(action.type){
        
        case AUTH_SUCCESS: //验证成功消息提示
        const data = action.data
        //debugger
            return {...action.data, redirectTo:'/'}
            
        case ERROR_MSG:     //验证失败消息提示
            return {...state,msg:action.data}
        default:
            return state    
    }

}

export default combineReducers({
    user
})