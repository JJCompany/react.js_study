import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();

                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                        alert('hello world');
                        //contents에 사용자 정보를 입력 해야함
                        


                    }.bind(this)}
                >
                    <p>
                        <input type="text" name="title" placeholder="title"></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;