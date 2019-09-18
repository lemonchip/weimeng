import React, {Component} from 'react';

import {Button,
    List,
    WingBlank,
    WhiteSpace,
    }  from 'antd-mobile'
import Top from '../Top/Top'
import {Redirect ,withRouter} from  'react-router-dom'
import {connect}    from 'react-redux'
import HeadlineList   from '../headlineList/HeadlineList'
import HeadTabs from '../../components/Tabs/Tabs'
 class Home extends Component {

            render() {

            return (
            <div>   
                    <HeadTabs />
                    <Top />
                    <HeadlineList />
            </div>
            
            
            );

            }
}
export default withRouter(Home)