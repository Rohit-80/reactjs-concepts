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
// App.jsx
import React, { useState, useEffect , useContext, createContext} from "react";
import Test from "./test";
const Name = createContext();
function App() {
 
  // creating Provider

  return (
    <>
    <div>
      <Name.Provider value={"rohit"}>
       <Test />
     </Name.Provider>
     </div>
    </>
  )
}

// test.jsx
import React, { useContext } from "react"
import { Name } from "./App";
function Test(){
     const fname = useContext(Name);
    return (
       <>
         // By using old tradition method
            {/* <Name.Consumer>{
                (fname) => {
                    return (
                        <h1> Hi my name is {fname} </h1>);
                }
            }

            </Name.Consumer> */}
         // directly call by useContext Hook
        <h1> Hi my name is {fname} </h1>;
       </>
    )
}


export default Test;
/-------------------------------------------------------------- useRef ------------------------------------------------------------------------/
import React, { useState, useEffect, useRef} from "react";


// useRef

  // first use -
  // It can be used to store a mutable value that does not cause a re-render when updated.
  // second use -It can be used to access a DOM element directly.
  
function App() {
 
  const [val,setVal] =useState(0);
  // const [rendnumer,setRend] =useState(0);
  const rendnumer = useRef(0);
  const inputref = useRef();
  const prevname = useRef();

  // useEffect(()=>{
  //   setRend((prevRend => prevRend+1))
  // },[val]);

   useEffect(()=>{
     rendnumer.current = rendnumer.current+1;
  });

  function changeTheme(){
     inputref.current.focus();
  }
  useEffect(()=>{
     console.log(inputref.current)
  })

 // persisting a value
  useEffect(()=>{
       prevname.current = val;
  },[val])

  


  return (
    <>
    <input ref={inputref} type="text" value={val} onChange = {(e)=>{setVal(e.target.value)}} /> 
    <button onClick={changeTheme}> change </button>
    <h1> my name is {val} it is used to be {prevname.current} </h1>
    <h1> renders {rendnumer.current} </h1>

    </>
  )
}

export default App;

/--------------------------------------------------------------useMemo-----------------------------------------------------------------/


function App() {
  // use memo also can be used with reference object means when component is calling its object reference is change
  // so usecontext detect as changed and change their val so solution to this is usememo  which cache the value.
  
  const [val,setVal] =useState(0);
  // const [double,setDouble] =useState(1);
  const double = useMemo(()=>{
     return slowFunction(val) ;
  },[val]);

  function changeTheme(){

  }
  
  function slowFunction(n){
    for(let i = 0; i <= 100000000; i++){}
    return n*2;
  }

  return (
    <>
    <input  type="text" value={val} onChange = {(e)=>{setVal(parseInt(e.target.value))}} /> 
    <button onClick={changeTheme}> change </button>
    <h1> {double} </h1>

    </>
  )
}

export default App;

