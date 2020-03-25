import React, { Component } from 'react';
import './App.css';

/* 
    Component는 하나의 최상위 태그로 구성되어야 한다. 
    jsx로 작성을 하면 create-react-app이 컨버팅을 해준다.
    React는 코드를 정리해주는 역할도 같이 해준다. -> 복잡도를 획기적으로 낮추었다.
*/
class Subject extends Component{
    render(){//render 함수
        return(
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

//table of contents
class TOC extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                </ul>
            </nav>
        );
    }
}
class Content extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}


class App extends Component{
    render(){
        return(
            <div className="App">
                <Subject title="Web" sub="world wid Web!!!!"></Subject>
                <Subject title="React" sub="study react"></Subject>
                <TOC></TOC>
                <Content title="HTML" desc="HTML is hyperText Markup!!"></Content>
            </div>
        );
    }
}

export default App;
