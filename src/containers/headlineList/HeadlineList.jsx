import React, {Component} from 'react';
import HeadlineItem from '../headlineItem/HeadlineItem'

import {headlineList} from '../../redux/action'
import {connect}    from 'react-redux'
 class HeadlineList extends Component {
    constructor(props) {
    super(props);
    
    this.state = {

        headlineList : [],
        page:1,
        limit:3
    };
  
    this.timeHandle = this.timeHandle.bind(this);
  }



        getHeadlineList = () =>{

            this.props.headlineList(this.state.limit,this.state.page)

        }

        timeHandle = (time) => {

            const relTime = Date.now() - time
            console.log(relTime)
            if((relTime/1000)<60){
                return Math.floor(relTime/1000) + '秒前' 
            }else if ((relTime/1000/60/60)<60){
                return Math.floor(relTime/1000/60) + '分钟前'
            }else if ((relTime/1000/60/60/24)<1){
                return Math.floor(relTime/1000/60/60) + '小时前'
            }else if ((relTime/1000/60/60/24/30)<1){
                return Math.floor(relTime/1000/60/60/24) + '天前'
            }else{
                return time.getMonth + '-' + time.getDate
            }
        }

        componentDidMount(){
            this.getHeadlineList()

            const {data} = this.props
           // console.log(data)
            this.setState({headlineList:data})
        }



            render() {
               // const headlineList = this.props.headlineList
            //    this.getHeadlineList()
            //    debugger
           // console.log(this.state.headlineList)
           // const {data} = this.props
           // console.log(data)
           // console.log(Array.isArray(this.state.headlineList))
            const list =    this.state.headlineList.map((headline)=>
            (
            
            <HeadlineItem key={headline._id} 
                            id={headline._id}
                          title={headline.title} 
                          topic={headline.topic}
                          time={this.timeHandle(headline.time)}
                          titleImage={headline.titleImage}
                          commentNum={headline.commentNum}
                          readNum={headline.readNum}
                          />
        ))
      
            return (
            <div >
             {list}
            </div>

            );
        }
}

//中秋快乐

export default connect(
    state => state.headlineList,
    { headlineList}
)(HeadlineList)