import React from 'react'
import './App.css'
 export default function App(){
  const[count,setCount]=React.useState(0);
  const[marks,setMarks]=React.useState(0);
  const qutions=[
    {
      qutionstext:"How many numbers of elements a valid react component can return ?",
      options:['1' , '2' ,'3','4'],
      correct:"1"
    },
    {
      qutionstext:"How many ways of defining your variables in ES6 ?",
      options:['1' , '3' ,'4','5'],
      correct:"3"
    },
    {
      qutionstext:" what is React js mainly used for building  ?",
  options:['Database' , 'Connectivity' ,'User interface','Design platform'],
      correct:"User interface"
    },
    {
      qutionstext:"Which of the following option is correct in the case of the Babel ?",
      options:["Babel is a Compiler","Babel is a Transpilar"," None of the above","Both A and B are correct"],
      correct:"Both A and B are correct"
    },
    {
      qutionstext:" Does React.js create a VIRTUAL DOM in the memoryn ?",
      options:['TRUE' , 'FALSE' ,'Can be true or false','Cannot say'],
      correct:"TRUE"
    },
    {
      qutionstext:" Which of the following is used to pass data to a component from outside in React.js ?",
      options:['SetState' , 'Render with arguments' ,'Props','PropTypes'],
      correct:"Props"
    },
    {
      qutionstext:" What does ES6 stand for ?",
      options:['ECMAScript 6' , 'ECMA 6' ,'ECMAJavaScript 6','EJavaScript 6'],
      correct:"ECMAScript 6"
    },
    {
      qutionstext:" Which of the following function is used to change the state of the React.js component ?",
      options:['this.setState' , 'this.setChangeState' ,'this.State{}','None of the above'],
      correct:"this.setState"
    },
    {
      qutionstext:" Which of the following method refers to the parent class in React.js ?",
      options:['inherits()' , 'self()' ,'super()','this()'],
      correct:"super()"
    },
    {
      qutionstext:"Which of the following lifecycle events React components have at the highest level ?",
      options:['Destruction' , 'Initialization' ,'State/Property Updates','All of the above'],
      correct:"All of the above"
    },

  ]
  let temp;
  function Move(index){
    if(qutions[count].options[index]===qutions[count].correct){
      temp=(marks+1);
      setMarks(temp);
    }
    if(count<10)
    {
      setCount(count+1)
    }
  }
  function Restart(){
    setCount(0)
    setMarks(0)
  }
  
  

if(count<10){
  return(
    <div id="main">
      <h1><i>Take Test &#128512;</i></h1>
      <div id="sub1">
        <h2>Qutions No:{count+1}/10</h2>
        <h3>{count+1}.{qutions[count].qutionstext}</h3>
        <div>{qutions[count].options.map((x,index)=><li key={index} onClick={()=>{Move(index)}} id={index}>{x}</li>)}</div>
      </div>

    </div>

  )
}else{
  return(
  <div id="outputs">
    <h2>Thank u &#128524;</h2>
    <div id="sub2">
      <h2>Test Completed!</h2>
      <h3>score you get:{marks}/10</h3>
      <button onClick={Restart}>Restart Me </button> 

    </div>

  </div>)

}
 }