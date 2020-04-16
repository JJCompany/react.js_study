import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import './App.css';

/* 
    Component는 하나의 최상위 태그로 구성되어야 한다. 
    jsx로 작성을 하면 create-react-app이 컨버팅을 해준다.
    React는 코드를 정리해주는 역할도 같이 해준다. -> 복잡도를 획기적으로 낮추었다.
*/

/*
    Component 외부 정보는 Props라고 한다.
    Component 내부 정보를 State라고 한다.
    사용하는쪽과 구현하는 쪽을 확실하게 구분한다. 이렇게 구분하는게 보안상으로도 높음
*/

/*
    props, state, event
    react에서는 props나 state가 바뀌면 render함수가 다시 호출된다 -> 화면이 다시 그려진다.
*/

/*
    2020.03.31 CREATE 시작


*/
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            //mode:'read',
            mode:'create',
            selected_content_id:1,
            subject:{title:'WEB', sub:'World Wide Web'},
            welcome:{title:'Welcome',desc:"Hello, React!"},
            toc:[
                {id:1,title:'HTML',desc:'HTML is 1111'},
                {id:2,title:'CSS',desc:'css is 2222'},
                {id:3,title:'JAVA SCRIPT',desc:'javascript is 3333'}
            ]
        }
    }
    render(){
        var _title, _desc, _article = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }
        else if(this.state.mode === 'read'){

            //filter와 같은 다른 방법으로도 구현이 가능하지만...반복문으로 구현
            var i = 0;
            while(i < this.state.toc.length){
                var data = this.state.toc[i];
                if(data.id === this.state.selected_content_id){

                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }
        else if(this.state.mode === 'create'){
            _article = <CreateContent onSubmit={function(_title,_desc){
                //add content
                console.log(_title+' '+_desc);
            }.bind(this)}></CreateContent>
        }
        //create Component를 넣는 방법...?
        return(
            <div className="App">
                <Subject 
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}

                    //제작한 이벤트
                    onChangePage = {function(){
                        this.setState({mode:'welcome'});
                    }.bind(this)}
                >
                </Subject>
                <TOC 
                    onChangePage = {function(id){
                        this.setState({//상위 컴포넌트에 setState로 state의 값을 변경
                            mode:'read',
                            selected_content_id:Number(id)
                        });
                    }.bind(this)}
                    data={this.state.toc}//props이다.(리스트를 뿌려주기 위해서 만들어짐)
                >
                </TOC>
                <Control
                    onChangeMode = {function(_mode){
                        this.setState({
                            mode:_mode
                        });
                        //mode에 따라서 Content가 바뀌게 하는 작업 추가 예정
                    }.bind(this)}
                ></Control>
                {_article}
                
            </div>
        );
    }
}

export default App;
