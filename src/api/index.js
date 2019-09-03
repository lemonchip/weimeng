import ajax  from './ajax'

export const reqRegister = (data) => ajax('/register',data,'POST')
