import React, {Component} from 'react';
import {
    Button,
    List,
    Carousel
     
}  from 'antd-mobile'
import { tuple } from 'antd/lib/_util/type';
import './Top.less'
import {headlineTop} from '../../redux/action'
import {connect}    from 'react-redux'

 class Top extends Component {


    state = {
        data : []

    }

    componentDidMount(){

        this.props.headlineTop()
        // const {top} = this.props
       
        // this.setState({data:top})
    }

        render() {
            
        const {top} = this.props
            console.log('top:'+top)
        return (
           
        <div>

            <Carousel
                autoplay={true}
                infinite={true}
            >
             {
                 top.map(val=>(
                  <a key={val}
                     href='#'
                      >
                <img src={val.titleImage} className='top-a'>
                
                </img>
                  </a>   
                 )

                 )
             }
            </Carousel>
        </div>
        
        );
        }
}
export default connect(
    state => state.headlineTop,
    {headlineTop}
  )(Top)