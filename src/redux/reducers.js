import {combineReducers}   from 'redux'

import {AUTH_SUCCESS,ERROR_MSG } from './action-tybe'

initUser = {
    username : '',
    e_mail   : '',
    msg      : '',
}

function user(state=initUser,action){

    switch(action.type){
        case AUTH_SUCCESS: //验证成功消息提示
            return {...action.data}
        case ERROR_MSG:     //验证失败消息提示
            return {...state,msg:actions.data}
        default:
            return state    
    }

}

export default combineReducers({
    user
})