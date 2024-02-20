import React, { useState } from 'react'

function Counter() {

    // << useState >> 상태관리 할때 사용
    // const [변수명, set변수명] = useState(변수명에 해당하는 초기값 세팅);

    let [count, setCount] = useState(0);
    

    // function plus() {
    //     setCount(count + 1);
    //     console.log('+1');
    // }

    const Increase = () => {
        setCount(count + 1);
        console.log('+1');
    }

    const Dencrease = () => {
        setCount(count - 1);
        console.log('-1');
    }
    return (
    <div>
        <h1>Counter</h1>
        <div className='box'>
            <h2> {count} </h2>
            <div>
                <button onClick={Increase}>+1</button>
                <button onClick={Dencrease}>-1</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;