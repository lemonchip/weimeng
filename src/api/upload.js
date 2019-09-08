import axios  from 'axios'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


const instance=axios.create({
    withCredentials: true
   }) 

export default function upload(url='',formData){

        return instance.post(url,formData)

}