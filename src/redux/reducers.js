import {combineReducers}   from 'redux'

import {AUTH_SUCCESS,ERROR_MSG ,LOGOUT, UPLOAD_SUCCESS, UPLOAD_ERROR} from './action-tybe'

const initUser = {
    username : '',
    e_mail   : '',
    msg      : '',
    redirectTo: ''
}

const  Headline = {

    formData : {},
    redirectTo:'',
    msg      : ''

}


function user(state=initUser,action){

    switch(action.type){
        
        case AUTH_SUCCESS: //验证成功消息提示
        const data = action.data
            return {...action.data, redirectTo:'/'}
            
        case ERROR_MSG:     //验证失败消息提示
            return {...state,msg:action.data}

        case LOGOUT:
            return {...state,redirectTo:'/login'}    
        default:
            return state    
    }

}

function writeHeadline(state=Headline,action){
    switch(action.type){
        case UPLOAD_SUCCESS:
            return {...state,redirectTo:'/'}
        case UPLOAD_ERROR:
            return {...state,msg:action.data}
        default:
            return state
    }

}

export default combineReducers({
    user,
    writeHeadline
})