import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




function Quizz() {

  const [showFinalResults, setShowFinalResults] = useState(false)
  const [score,setScore] = useState(0)
  const [currenttQuestion,setCurrentQuestion] = useState(0)

  const questions = [
    {
      text: "Who was the only player to score two goals in two different games?",
      options: [
        { id: 0, text: "Kylian Mbappe", isCorrect: true },
        { id: 1, text: "Lionel Messi", isCorrect: false },
        { id: 2, text: " Olivier Giroud", isCorrect: false },
        { id: 3, text: "Gonçalo Ramos", isCorrect: false },
      ],
    },
    {
      text: "Sachin Tendulkar hit his 100th international century against which among the following team?",
      options: [
        { id: 0, text: " Sri Lanka", isCorrect: false },
        { id: 1, text: "Bangladesh", isCorrect: true },
        { id: 2, text: "Pakistan", isCorrect: false },
        { id: 3, text: "South Africa", isCorrect: false },
      ],
    },
    {
      text: "Who was the “top soccer” of the 2018 FIFA Football World Cup?",
      options: [
        { id: 0, text: "Harry Kane", isCorrect: true },
        { id: 1, text: "Luka Modric", isCorrect: false },
        { id: 2, text: "Kylian Mbappe", isCorrect: false },
        { id: 3, text: "Thibaut Courtois", isCorrect: false },
      ],
    },
    {
      text: "  David Beckham became president of which newly founded club in 2018?",
      options: [
        { id: 0, text: "Bergamo Calcio", isCorrect: false },
        { id: 1, text: "Inter Miami", isCorrect: true },
        { id: 2, text: "West London Blue", isCorrect: false },
        { id: 3, text: "The Potteries", isCorrect: false },
      ],
    },
    {
      text: "Which footballer holds the record for the highest number of assists in the Premier League?",
      options: [
        { id: 0, text: "Ryan Giggs", isCorrect: false },
        { id: 1, text: "Cesc Fabregas", isCorrect: true },
        { id: 2, text: "Frank Lampard", isCorrect: false },
        { id: 3, text: "Paul Scholes", isCorrect: false },
      ],
    },
  ];

const optionClicked = (isCorrect)=>{
 if(isCorrect){
  setScore(score + 10)
 }
 if(currenttQuestion + 1 < questions.length){
  setCurrentQuestion(currenttQuestion + 1)
 }else{
  setShowFinalResults(true)
 }
}

const navigate = useNavigate ()



  return (
    <div  >

      <div className='text-center mt-5' style={{ color: "white" }}   >
        <h1 style={{fontSize:"28px"}} >Quizz</h1>
        <div>
          <h2 style={{fontSize:"30px"}} >Current Score :{score} </h2>
        </div>
      </div>


       {showFinalResults ? ( 

       <div className='border round p-3 text-center shadow rounded  mx-auto ' style={{width:"40%",height:"auto",color:"red", fontWeight:"bolder"}} >
          
         <h4>Final Results</h4>
          <h2 style={{ color: "white",fontSize:"21px" }} >{score} out of {questions.length} correct - ({(score/questions.length)* 10} %)</h2>  
          <button   onClick={()=> navigate("/")} className='btn btn-danger mt-3' >Restart quizz</button>

       </div>

       ):( 

      <div style={{ color: "white",width:"40%" }} className=' border rounded  justify-content-between  text-center align-items-center mx-auto mb-2  mt-5 p-5 '>
        <p  style={{ color: "orange" }} className='mb-5 fs-4' >Question  {currenttQuestion + 1} out of  {questions.length} </p>
        <h3 style={{ fontSize:"18px" }} className='mb-5' > {questions[currenttQuestion].text} </h3>
    
       <div className='  d-flex justify-content-evenly ms-3 p-2 text-light shadow rounded flex-column ' >
          <ul style={{listStyle:"none",fontSize:"20px"}} >
         {questions[currenttQuestion].options.map((option)=>{
          return (

             <li onClick={() => optionClicked(option.isCorrect)}  key={option.id} >{option.text}</li>
          )
         })}
          </ul>
       </div>
     </div>
        )} 
    </div >
  )
}

export default Quizz


























//