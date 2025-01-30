import React, { useState } from 'react'
import QuetionList from './QuetionList'

const Quize = () => {
    let problem=[
        {
quetion:"what is react js",
options:["A css framework","A javascrip library","A database management FileSystem","A javascript framework"],
answer:"A javascript library"
    },
    {
        quetion:"what is feature of react",
        options:["Single page application","virtual dom","All of above"],
        answer:"All of above"
            },
            {
                quetion:"what is 2+4?",
                options:["2","6","7","5"],
                answer:"6"
                    }
]
const[currentQuetion,setCurrentQuetion]=useState(0)
const[currentAnswer,setCurrentAnswer]=useState(null)
const[score,setScore]=useState(0)
const handleClick=(option)=>{
   setCurrentAnswer(option) 
   if(option===problem[currentQuetion].answer){
    setScore(score+1)
   }
}
const nextQuetion=()=>{
    setCurrentQuetion(currentQuetion+1)
}
  return (
    <div className='main'>
        {currentQuetion <problem.length?<div>
            <QuetionList quetion={problem[currentQuetion].quetion}
      option={problem[currentQuetion].options} handleClick={handleClick} currentAnswer={currentAnswer}/>
      <button onClick={nextQuetion}>Next Quetion</button>
        </div>:<div>your score is:{score}</div>}
      
    </div>
  )
}

export default Quize
