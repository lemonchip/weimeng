import React, {Component} from 'react';

import {headlineContent} from '../../redux/action'
import {connect}    from 'react-redux'
import './headlineContent.less'
import {timeHandle} from '../../utils/time/handleTime'
import  Head from '../../components/head/Head'
 class HeadlineContent extends Component {


    // state = {
    //     id : this.props.content.id
    // }

    imgStyle = {
        margin:'0px',
        padding:'0px',
        height:'170px',
        width:'100%',
        // opacity:'0.4'
        filter:'brightness(80%)'
        /*
        brightness(%) 线性乘法
        可以让图片看起来更亮或者更暗 
        */
    }

    titleStyle = {
        margin:'0px',
        padding:'0px',
        position:'absolute',
        bottom:'20px',
        left:'5%',
        color:'white',
        lineHeight:'25px'
    }


    headImage = {
        margin: '0px',
        padding: '0px',
        height: '35px',
        width: '35px',
        position: 'relative',
        left: '5%',
        borderRadius: '100%',

    }

    authorStyle = {
        margin: '0px',
        padding: '0px',
        fontSize: '12px',
        position: 'absolute',
        left: '60px',
        top: '5px',
        fontFamily: 'unset',
        fontWeight: '600'

    }

    topicTimeStyle = {

        margin: '0px',
        padding: '0px',
        fontSize: '8px',
        position: 'absolute',
        left: '60px',
        top: '20px',
        fontFamily: 'auto',
        color:'#888888'
       

    }

    componentDidMount(){
        // const {content} = this.props
        // if(!connect){
        //     this.props.headlineContent(this.state.id)
        // }

    }

        render() {
           // const timeHandle = timeHandle

            const {content} = this.props
        return (
        <div>
                <Head />
                <div style={{ position: 'relative' }}>
                    <img src={content.titleImage} style={this.imgStyle}></img>
                    <h3 style={this.titleStyle}> {content.title}</h3>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={require('../../assets/images/1.jpg')} style={this.headImage} alt="" />
                    <p style={this.authorStyle}> {content.author}</p>
                    <p style={this.topicTimeStyle}>  {content.topic} * {timeHandle(content.time)}</p>

                    <div id = 'text' style={{ position: 'absolute', left: '5%', top: '50px', lineHeight: '20px' ,width:'100%'}}
                         dangerouslySetInnerHTML={{__html: content.text}}
                    >
                        
                    </div>
                </div>
              
            </div>
        );

        }
}
export default connect(
    state => state.headlineContent,
    { headlineContent}
)(HeadlineContent)