import React, {Component} from 'react';


export default class HeadlineList extends Component {


        state ={

            headlineList : [{_id:"lead",title:'made'},{_id:"lead",title:'made'},{_id:"lead",title:'made'},{_id:"lead",title:'made'}]
        }

            render() {
               // const headlineList = this.props.headlineList
            return (
            <div>
                {this.state.headlineList.map((headline)=>
                    <p key={headline._id}>{headline.title}</p>
                )}
            </div>

            );
        }
}