import ajax  from './ajax'

export const reqRegister = (data) => ajax('/register',data,'POST')

export const reqLogin = (data) => ajax('/login',data,'POST')
