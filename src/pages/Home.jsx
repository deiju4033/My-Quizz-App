

import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {

const navigate = useNavigate()




    return (
        <div className=' border rounded  text-center  mx-auto   mt-5 p-5 w-50  ' >

            <h3 style={{color:"white",fontWeight:"bolder"}}  >Quizz App</h3>

          <div className='mt-4 fs-5 fw-bold'  >
            <input   style={{color:"black"}} type="text" placeholder='Enter your name'    />
            </div>    
          
          <button   onClick={()=>navigate("/Quizz")}     className='btn btn-danger mt-3'  >Start Quizz</button>
            

        </div>
 



    )
}

export default Home











