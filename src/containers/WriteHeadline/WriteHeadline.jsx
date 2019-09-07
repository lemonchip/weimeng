import React, {Component} from 'react';

import { ImagePicker, 
        WingBlank,
        Button ,
        List, 
        TextareaItem ,
        WhiteSpace
      } from 'antd-mobile';

import ajax  from '../../api/ajax'
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import axios  from 'axios'


axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  // 在quiil中注册quill-image-drop-module
  Quill.register('modules/imageDrop', ImageDrop);

// const data = [{
//     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//     id: '2121',
//   }, {
//     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//     id: '2122',
//   }];

export default class WriteHeadline extends Component{

    componentDidMount() {
      this.autoFocusInst.focus();
    }

    
    state = {
        files: [],
        multiple: true,
        disableDelete:false,
  
        tittle:''
      }


      modules = {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image'],
          ['clean'],
        ],
        imageDrop: true,
      };
    
    formats = [
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
    ];


  

        // 当修改文本框的内容时，会自动调用onQuillChange函数
    onQuillChange = (content, delta, source, editor) => {
      // content 是真实的DOM节点
      // delta 记录了修改的对象，下篇文章详述
      // source 值为user或api
      // editor 文本框对象，可以调用函数获取content, delta值
    };

      upload =  () => {

        const instance=axios.create({
            withCredentials: true
           }) 
              

        let formData = new FormData(); 

        for(let key in this.state.files){

       formData.append("file", this.state.files[key].file);
       
        }

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
        // if(this.state.files){
        //   this.setState({selectable:false})
        // }else{
        //   this.setState({selectable:true})
        // }
        this.setState({
          files,
        });
      }
      

      TitleOnChang = (title,val) => {
        this.setState({[title]:val})
        //console.log(this.state.title)
      }

    render(){
      console.log(this.state.title)
        const {files} = this.state
        return(

            <div>

            <WhiteSpace size='xl'/>
            <List>
             
              <TextareaItem
               title=""
               placeholder="标题（必选）"
               data-seed="logId"
               ref={el => this.autoFocusInst = el}
               autoHeight
               onChange={val=>{this.TitleOnChang('title',val)}}
              >

              </TextareaItem> 
          
            </List>
       
            
            <WhiteSpace />

            <List>
              <List.Item>
                标题图片
              </List.Item>
            </List>
            
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          multiple={this.state.multiple}
        />
       <WhiteSpace />
       <List>
              <List.Item>
                编辑内容
              </List.Item>
            </List>
         <ReactQuill
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            onChange={this.onQuillChange}
            defaultValue={this.state.value}
            placeholder="请编辑"
         />
         <WhiteSpace />
         
          <Button type='primary'onClick={this.upload} style={{position:'fixed',bottom:'0px',width:'100%'}}>发&nbsp;&nbsp;&nbsp;&nbsp;布</Button>
         
            </div>
        );
    }

}

