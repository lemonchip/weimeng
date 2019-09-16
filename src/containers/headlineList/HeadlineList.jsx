import React, {Component} from 'react';
import HeadlineItem from '../headlineItem/HeadlineItem'
import PropTypes from 'prop-types';
import {headlineList} from '../../redux/action'
import {connect}    from 'react-redux'
 class HeadlineList extends Component {
    constructor(props) {
    super(props);
    
    this.timeHandle = this.timeHandle.bind(this);
  }
    state = {

    headlineList : [],
    page:1,
    limit:3
};

static propTypes = { 
    headlineList: PropTypes.array.isRequired 
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
            
            const {data} = this.props
           
            //如果data有数据就不在发请求
            if(data.length===0){
                
                this.getHeadlineList()
            }
            
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
            let {data} = this.props
            //从headlineContent返回时，返回的是一个对象未知原因
            if(!(data instanceof Array))
               {
                const  tem = data
                   data = []
                   data.push(tem)
               }
                
            const list =   data.map((headline)=>
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