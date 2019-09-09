import axios  from 'axios'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


const instance=axios.create({
    withCredentials: true
   }) 

export default function upload(url='',formData){

        return instance.post(url,formData).catch(function (error) {
                if (error.response) {
                  // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });

}