import { useEffect, useState } from 'react';
import './App.css';

function AppUseEffect() {
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(100);

  useEffect(()=>{
    console.log('all render')
    // 모든 useEffect 에 대한 반응을 함
  })
  useEffect(()=>{
    console.log('count render')
    // count 에 대한 반응
  },[count])
  useEffect(()=>{
    console.log('count2 render')
    // count2에 대한 반응
  },[count2])
  return (
    <div className="App">
      <h1>useEffect 테스트</h1>
      <h2>count : {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>count1 btn</button>
      <h2>count : {count2}</h2>
      <button onClick={()=>{setCount2(count2+1)}}>count2 btn</button>
    </div>
  );
}

export default AppUseEffect;
