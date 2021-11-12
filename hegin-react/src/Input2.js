import React, { useState } from "react";

const  Inputs = () => {
    // inputs는 이제 name, nickname 2개 요소에 대해서 관리한다.
    const [inputs, setInputs] = useState({
        name : '',      // 1번 input을 담당할 name
        nickname : '',
        age : ''   // 2번 input을 담당할 nickname
    });
    // 저장된 2개의 변수가 내장되어 있는 것을 확인
    // console.log('inputs 확인 : ' + inputs);

    // 두 개로 분할
    const {name, nickname, age} = inputs;

    // input들을 묶어서 관리하고 있으므로
    // 이벤트 하나에서 input들을 모두 관리해야한다.
    const onChange = (e) => {
        const {value, name} = e.target;
        // console.log('e.target.name : '+e.target.name);
        console.log(e.target);
        console.log('value : ' + value);
        console.log('name : ' + name);
        setInputs({
            // 불변셩을 지키면서 변동을 주기 위해서는
            // name이나 nick에 직접적인 값을 입력하는게 아니라
            ...inputs,          // = name:'', nickname:''
            [name] : value      // 내가 클릭한 name에 value 매칭
        });
        
    }

    // 초기화 버튼 누르면 input 2개의 값이 전부 사라지도록 설정
    const onReset = ()=>{
        setInputs({
            name : '',
            nickname : '',
            age : ''
        })
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/><br/>
            <input name="nickname" placeholder="별명" onChange={onChange} value={nickname}/><br/>
            <input name="age" placeholder="나이" onChange={onChange} value={age}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {name}({nickname}, {age})</b>
            </div>
        </div>
    );
}
export default Inputs;