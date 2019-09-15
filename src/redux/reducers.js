import {combineReducers}   from 'redux'

import {AUTH_SUCCESS,ERROR_MSG ,LOGOUT, UPLOAD_SUCCESS, UPLOAD_ERROR,
        REQ_SUCCESS,REQ_ERROR} from './action-tybe'

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
const initHeadlineList = {
            data : [],
            msg :""
}

function headlineList(state=initHeadlineList,action){
              
        switch(action.type){
            
            case REQ_SUCCESS:
                return {data:action.data}
            case REQ_ERROR:
                return {...state,msg:action.data}
                default:
                    return state
        }
}


function headlineContent(state={},action){
              
    switch(action.type){
        
        case REQ_SUCCESS:
            return {content:action.data}
        case REQ_ERROR:
            return {msg:action.data}
            default:
                return state
    }
}

export default combineReducers({
    user,
    writeHeadline,
    headlineList,
    headlineContent
})