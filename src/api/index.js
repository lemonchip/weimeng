import ajax  from './ajax'
import upload from './upload';

export const reqRegister = (data) => ajax('/register',data,'POST')

export const reqLogin = (data) => ajax('/login',data,'POST')

export const reqUpload = (formData) =>upload('/upload/upload',formData)

export const reqHeadlineList = (data) => ajax('/home/headline',data)
