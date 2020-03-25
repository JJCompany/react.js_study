import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

/* 
    Component는 하나의 최상위 태그로 구성되어야 한다. 
    jsx로 작성을 하면 create-react-app이 컨버팅을 해준다.
    React는 코드를 정리해주는 역할도 같이 해준다. -> 복잡도를 획기적으로 낮추었다.
*/

/*
    Component 외부 정보는 Props라고 한다.
    Component 내부 정보를 State라고 한다.
    
*/

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
