import React, {Component} from 'react';
import './personalTop.less'


export default class PersonalTop  extends Component {

    render() {

        return (
        <div id='personal-top'>
            
            <div id='top'>
            <img src={require('../../assets/images/1.jpg')} alt=""/>
            <span id='name'>花花世界</span>
            <span id='spack'>个性宣言：</span>
            <div id='info'>
                <div>关&nbsp;&nbsp;注 <span>8888</span></div>
                <div>粉&nbsp;&nbsp;丝<span>8888</span></div>
                <div>帖&nbsp;&nbsp;子<span>8888</span></div>
                <div>获&nbsp;&nbsp;赞<span>8888</span></div>
                <span>关注</span>
                <span>粉丝</span>
                <span>帖子</span>
                <span>获赞</span>
            </div>
          
            </div>
        </div>
        );

        }

}