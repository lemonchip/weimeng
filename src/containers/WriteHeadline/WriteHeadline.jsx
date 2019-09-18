import React, {Component} from 'react';

import { ImagePicker, 
        WingBlank,
        Button ,
        List, 
        TextareaItem ,
        Toast,
        WhiteSpace
      } from 'antd-mobile';
        
import {Redirect} from  'react-router-dom'
import ajax  from '../../api/ajax'
import {connect}    from 'react-redux'
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import axios  from 'axios'
import {upload} from '../../redux/action'

//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  // 在quiil中注册quill-image-drop-module
  Quill.register('modules/imageDrop', ImageDrop);

// const data = [{
//     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//     id: '2121',
//   }, {
//     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//     id: '2122',
//   }];

 class WriteHeadline extends Component{

    // componentDidMount() {
    //   this.autoFocusInst.focus();
    // }

    
    state = {
        files: [],
        multiple: true,
        disableDelete:false,
        formData : {},
        title:'',
        content:'',
        author:'admin',
        topic: '科技'
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




      upload =  () => {

        // const instance=axios.create({
        //     withCredentials: true
        //    }) 
              

         let formData = new FormData(); 

        for(let key in this.state.files){

        formData.append("file", this.state.files[key].file);
        
        }
        formData.append("title",this.state.title)
        formData.append("topic",this.state.topic)
        formData.append("content",this.state.content)
        formData.append("author",this.state.author)

        this.setState({formData:formData})

        console.log(formData.get('title'))
        console.log(this.state)

        // const res = instance.post('/upload/upload',formData)
        // //debugger
        // res.then(function (response) {
        //     console.log(response);
        //   }).catch(function (error) {
        //     console.log(error);
        //   });

        
        const res =  this.props.upload(formData)
        //const {redirectTo,msg} = this.props
       //拿到错误消息并显示
        const  msg = res.data
        if(msg){
           Toast.info(msg, 2)
        }else{
          //没有错误消息提示成功
          Toast.success('发布成功', 1);
        }
       

      }

            // 当修改文本框的内容时，会自动调用onQuillChange函数
      onQuillChange = (content, delta, source, editor) => {
        // content 是真实的DOM节点
        // delta 记录了修改的对象，下篇文章详述
        // source 值为user或api
        // editor 文本框对象，可以调用函数获取content, delta值
        this.setState({content:content})
      }

      //照片选择器，读取选择的图片
      onChange = (files, type, index) => {
        //console.log(files, type, index);
        // if(this.state.files){
        //   this.setState({selectable:false})
        // }else{
        //   this.setState({selectable:true})
        // }
        this.setState({
          files,
        });
      }
      
      //接收输入的值
      OnChangItem = (item,val) => {
        this.setState({[item]:val})
        //console.log(this.state.title)
      }

    render(){
     // console.log(this.state.title)

     //成功之后跳转首页
     const {redirectTo,msg} = this.props
     if(redirectTo==='/'){
        // debugger
         return <Redirect to={redirectTo}/>
     }

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
               onChange={val=>{this.OnChangItem('title',val)}}
              >

              </TextareaItem> 
              

              <TextareaItem
               title=""
               placeholder="话题（必选）"
               data-seed="logId"
               ref={el => this.autoFocusInst = el}
               autoHeight
               onChange={val=>{this.OnChangItem('topic',val)}}
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
export default connect(
  state => state.writeHeadline,
  {upload}
)(WriteHeadline)

