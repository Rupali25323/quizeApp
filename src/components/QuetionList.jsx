import React from 'react'

const QuetionList = ({quetion,option,handleClick,currentAnswer}) => {
  return (
    <div>
   <h1> {quetion}</h1> 
    <ul>
        {option.map((option,index)=>(
            <li key={index}onClick={()=>handleClick(option)}className={currentAnswer===option?"selected":""}>{option}</li>
       ) )}
    </ul>
    </div>
  )
}

export default QuetionList
