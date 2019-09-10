import React, {Component} from 'react';


export default class HeadlineItem extends Component {


    item = {
        margin:'0px',
        padding:'0px',
        width:'100%',
        height:'6em',
        background:'red',
        borderRadius:'4%'
       
    }
    img = {
        margin:'0px',
        padding:'0px',
        width:'38%',
        height:'6em',
        background:'pink',
        float:'right',
        borderRadius:'4%'
       
    }

            render() {
            return (
            <div style={this.item}>

             <img src={require('../../assets/images/1.jpg')} style={this.img}></img>
                
            </div>
            );
            }
}