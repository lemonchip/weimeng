import React, {Component} from 'react';

import {Button,
    List,
    WingBlank,
    WhiteSpace,
    }  from 'antd-mobile'

import {Redirect ,withRouter} from  'react-router-dom'
import {connect}    from 'react-redux'
import HeadlineList   from '../headlineList/HeadlineList'
 class Home extends Component {

            render() {

            return (
                <div>
                    <HeadlineList />
            </div>
            
            
            );

            }
}
export default withRouter(Home)