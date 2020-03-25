import React, { Component } from 'react';

//table of contents
class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data
        var i = 0;
        while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i++;
        }

        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;