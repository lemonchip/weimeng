import React, {Component} from 'react';

import './headlineItem.less'
import { relative } from 'path';
import {
    WingBlank,
    WhiteSpace,
}  from 'antd-mobile'
export default class HeadlineItem extends Component {


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
        height: '5px',
        lineHeight: '30px',
        width: '100%'
    }
            render() {
            return (<div>
            <div style={this.with}></div>
            <div style={this.itemStyle}>
                
             <img src={require('../../assets/images/1.jpg')} style={this.imgStyle}></img>
            
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