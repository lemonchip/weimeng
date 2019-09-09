import React, {Component} from 'react';


export default class HeadlineList extends Component {




            render() {
                const headlineList = this.props.headlineList
            return (
            <div>
                {headlineList.map((headline)=>{
                    <p key={headline._id}>{headline.title}</p>
                })}
            </div>

            );
        }
}