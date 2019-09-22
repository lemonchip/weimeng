import React, {Component} from 'react';

import {
    Button,
    Tabs,
    Badge
     
}  from 'antd-mobile'

import {headlineList} from '../../redux/action'
import {connect}    from 'react-redux'

 class HeadTabs extends Component {

        state = {
            page:1,
            limit:6,
            topic:'',
            index:0

        }  
    

    onChangeHandle = (tab,index) => {
        const topic = tab.title.props.children
        console.log( "name:"+this.props.getTopic) 
        this.props.getTopic(topic)
        this.props.headlineList(this.state.limit,this.state.page,topic)
        this.setState({index:index})
    }

        render() {
            const tabs = [
                { title: <Badge text={'3'}>推荐</Badge> },
                { title: <Badge text={'今日(20)'}>热门</Badge> },
                { title: <Badge dot>娱乐</Badge> },
                { title: <Badge dot>科技</Badge> },
              ];

        return (
        <div >
            <Tabs 
              tabs={tabs}
              initialPage={this.index}
                onChange={(tab, index) => this.onChangeHandle(tab,index)}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}  
                >

            </Tabs>
        </div>
        );
        }
}
export default connect(
    state => state.headlineList,
    { headlineList}
)(HeadTabs)