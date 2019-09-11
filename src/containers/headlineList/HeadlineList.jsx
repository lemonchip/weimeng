import React, {Component} from 'react';
import HeadlineItem from '../headlineItem/HeadlineItem'

export default class HeadlineList extends Component {


        state ={

            headlineList : [{_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},                       
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'},
                            {_id:"lead",title:'made',topic:'科技快讯',time:'3小时前',titleImage:'',commentNum:'885',readNum:'66369'}



            ]
        }

            render() {
               // const headlineList = this.props.headlineList
            return (
            <div style={{zIndex:1}}>
                {this.state.headlineList.map((headline)=>
                    <HeadlineItem key={headline._id} 
                                  title={headline.title} 
                                  topic={headline.topic}
                                  time={headline.time}
                                  titleImage={headline.titleImage}
                                  commentNum={headline.commentNum}
                                  readNum={headline.readNum}
                                  />
                )}
            </div>

            );
        }
}