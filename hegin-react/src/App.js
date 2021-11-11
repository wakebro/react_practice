// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// import Input from './input';
import Inputs from './Input2';


/* 리액트 기본
function App() {
  // 2. 변수는 {}사이에 선언
  let a = "test";

  // 3. css 표시
  const style = {
    backgroundColor : 'black',
    color : 'aqua'
  }

  return (
    // 1. 태그 열고 닫기 확실하게
    // 4. class 속성 추가는 className으로 추가
    <div className="123" style={style}>
      <li>{a}1</li> 
      <li>{a}2</li>
      <li>{a}3</li>
    </div>
  );
}
 */

// 리액트 - 클래스 컴포넌트
/*
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
*/

// 리액트 - 함수 컴포넌트
/*
function App(){
  // "count"라는 새로운 상태 값을 정의
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
*/

// 이벤트 함수1
/*
function App(){
// Input은 이진 Tree구조이므로 최상단 부모 루트가 있어야 두개 이상 쓸 수 있다.
  return (
    <div>
      
      <Input/>
      <Input/>
    </div>
  );
}
*/

// 이벤트 함수2
function App(){
  return(
    <div>
      <Inputs/>
    </div>
  );
}
export default App;
