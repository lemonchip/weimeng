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

                state = {
                    topic : ''
                }

            getTopic = (topic) =>{
                 this.setState({topic:topic})
                console.log(topic)

            }
                render() {

            return (
            <div>   
                    <HeadTabs getTopic={this.getTopic}/>
                    <Top />
                    <HeadlineList  topic={this.state.topic}/>
            </div>
            
            
            );

            }
}
export default withRouter(Home)