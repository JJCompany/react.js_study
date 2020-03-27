import React, { Component } from 'react';

//table of contents
class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data
        var i = 0;
        while(i<data.length){
        lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(id,e){
                        //e.target.dateset.id
                        //debugger;
                        e.preventDefault();
                        //this.props.onChangePage(e.target.dataset.id);
                        this.props.onChangePage(id);
                    }.bind(this,data[i].id)}//값을 전달하는 방법은 두가지가 있으며, bind의 매개변수를 통해 넘기는 방법으로 구현
                >{data[i].title}</a>
            </li>);
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