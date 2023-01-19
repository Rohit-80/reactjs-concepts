import React ,{ useState } from "react";

//-------------------------------------------------------- UseState HooK -----------------------------------------------------------------------------------//
function App(){

  // calling every time
  // const [count,setcount] = useState(4);

  // calling using fuction
  // const [count,setcount] = useState(()=>{
  //     console.log('run fuction')
  //   return 4;
  // });

  // with objects

  // const [state,setState] = useState({count : 4 , theme : 'blue'});
  // const count = state.count
  // const theme = state.theme

  // with two hooks 
  const [state,setState] = useState(4);
  const [theme,setTheme] = useState('blue');

  

  // its not a good way to change the value 
  // except it has another version with fucntion
  function inc(){
    // setcount(count+1)
    // setState((preState) =>{
    //  return  {...preState ,count : preState.count - 1}
    // })
    // setState(prevocunt=>prevocunt-1)
    // setTheme('red')
  }
  function dec(){
    setState((prevocunt) =>{
      return prevocunt++;
   })
  }

  return(
    <> 
     <button onClick={inc}>inc</button>
      <span>{state}</span>
      <span>{theme}</span>
      <button onClick={dec}> dec</button>
    </>
  )
}

export default App;

//-------------------------------------------------------- UseEffect HooK -----------------------------------------------------------------------------------//

import React, { useState, useEffect } from "react";


function App() {
  const [resourceTye, setRecourseType] = useState('post');
  function post (){
    setRecourseType('post');
  }
  function comment (){
    setRecourseType('comment');
  }
  function share (){
    setRecourseType('share');
  }

  useEffect(()=>{
    console.log('resource type changed')

    return () => {
      console.log('resource type changed from return')
    }
  },[resourceTye])


  return (
    <>
      <div>
        <button onClick={post}> post </button>
        <button onClick={comment}> comment </button>
        <button onClick={share}> share </button>
      </div>
      <h1> {resourceTye} </h1>
    </>
  )
}

export default App;

//--------------------------------------------------------  useContext HooK -----------------------------------------------------------------------------------//
