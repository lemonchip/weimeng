import React, {Component} from 'react';
import {
    Button,
    List,
    Carousel
     
}  from 'antd-mobile'
import { tuple } from 'antd/lib/_util/type';
import './Top.less'

export default class Top extends Component {


    state = {
        data : [1,2,3]

    }

        render() {

        return (
        <div>

            <Carousel
                autoplay={true}
                infinite={true}
            >
             {
                 this.state.data.map(val=>(
                  <a key={val}
                     href='#'
                      >
                <img src={require('../../assets/images/1.jpg')} className='top-a'>
                
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