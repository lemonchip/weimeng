import React, {Component} from 'react';

import {Button,
    List,
    WingBlank,
    WhiteSpace,
    }  from 'antd-mobile'

import {Redirect} from  'react-router-dom'
import {connect}    from 'react-redux'
import HeadlineList   from '../headlineList/HeadlineList'
export default class Home extends Component {

            render() {

            return (
                <div>
                    <HeadlineList />
            </div>
            
            
            );

            }
}