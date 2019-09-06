import React, {Component} from 'react';
import { ImagePicker, WingBlank,Button } from 'antd-mobile';
import ajax  from '../../api/ajax'
import { async } from 'q';
import axios  from 'axios'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


// const data = [{
//     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//     id: '2121',
//   }, {
//     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//     id: '2122',
//   }];

export default class WriteHeadline extends Component{



    
    state = {
        files: [],
        multiple: true,
      }


      upload =  (files) => {

        const instance=axios.create({
            withCredentials: true
           }) 
              

        let formData = new FormData();  
        formData.append('file',files[1])

        const res = instance.post('/upload/upload',formData)
        //debugger
        res.then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
        
      }

      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }

    render(){

        const {files} = this.state
        return(

            <div>
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        />
        <Button type='primary'onClick={(files)=>{this.upload(files)}} ></Button>

            </div>
        );
    }

}

