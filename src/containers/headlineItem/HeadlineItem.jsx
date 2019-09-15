import React, {Component} from 'react';

import './headlineItem.less'
import { relative } from 'path';
import {
    Button,
    WingBlank,
    WhiteSpace,
}  from 'antd-mobile'
import {Redirect} from 'react-router-dom' 
import {connect}    from 'react-redux'
import {headlineContent} from '../../redux/action'
import {withRouter} from 'react-router-dom'

 class HeadlineItem extends Component {
    constructor(props,context) {
        super(props,context);

        this.toContent = this.toContent.bind(this)
    }    

    itemStyle = {
        margin:'0px',
        padding:'0px',
        width:'100%',
        height:'7em',
         position:'relative',
        borderRadius:'4%',

        marginTop:'0px'
        
       
    }
    imgStyle = {
        margin:'0px',
        padding:'0px',
        width:'38%',
        height:'7em',
        background:'pink',
        float:'right',
        borderRadius:'4%'
       
       
    }

    h4Style = {
        lineHeight:'25px',
        marginLeft:'7px',
        marginTop: '0px'
       
    }

    labelStyle = {
        margin:'0px',
        padding:'0px',
        position :'absolute',
        bottom:'8px',
        fontSize: '8px',
        color: '#7b7575d9'
    }

    with = {
        backgroundColor: '#ebebef',
        color: '#bbb',
        textAlign: 'center',
        height: '3px',
        lineHeight: '30px',
        width: '100%'
    }


        toContent = (id) => {

            this.props.headlineContent({id:id})
            this.props.history.replace('/hi') 
        }

            render() {
                console.log(this.props.id)
            return (
            <div >
            <div style={this.with}></div>
            <div style={this.itemStyle} onClick = {() =>this.toContent(this.props.id)}>
                
             <img src={this.props.titleImage} style={this.imgStyle}></img>
            
              <h4 style={this.h4Style}>{this.props.title}</h4>

            <span style={{...this.labelStyle,left:'7px'}}>{this.props.topic}</span>
            <span style={{...this.labelStyle,left:'55px'}}>{this.props.time}</span>
            <span style={{...this.labelStyle,right:'56%'}}>阅读：{this.props.readNum}</span>
            <span style={{...this.labelStyle,right:'40%'}}>评论：{this.props.commentNum}</span> 

            
            </div>
           
            </div>
            );
            }
}
export default withRouter(connect(
    state => state.headlineContent,
    { headlineContent}
)(HeadlineItem))