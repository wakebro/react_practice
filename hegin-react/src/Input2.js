import React, { useState } from "react";

const  Inputs = () => {
    // inputs는 이제 name, nickname 2개 요소에 대해서 관리한다.
    const [inputs, setInputs] = useState({
        name : '',      // 1번 input을 담당할 name
        nickname : ''   // 2번 input을 담당할 nickname
    });
    // 저장된 2개의 변수가 내장되어 있는 것을 확인
    console.log(inputs);
    // 두 개로 분할
    const {name, nickname} = inputs;
    console.log(setInputs);

    // input들을 묶어서 관리하고 있으므로
    // 이벤트 하나에서 input들을 모두 관리해야한다.
    const onChange = (e) => {
        const {value, name} = e.target;
        // console.log(e.target);
        // console.log(value);
        // console.log(name);
        setInputs(e.target.value);
        
    }

    return(
        <div>
            <input placeholder="이름" onChange={onChange} value={name}/><br/>
            <input placeholder="별명" onChange={onChange} value={nickname}/>
            <button>초기화</button>
            <div>
                <b>값 : {name}({nickname})</b>
            </div>
        </div>
    );
}
export default Inputs;