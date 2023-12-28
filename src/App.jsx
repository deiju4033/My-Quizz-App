
import { Route, Routes } from "react-router-dom"
import Quizz from "./pages/Quizz"
import Home from "./pages/Home"
import Result from "./pages/Result"



function App() {


  return   (

   


   <Routes>
      <Route path="/"  element={<Home/> }  />
      <Route path="/Quizz"  element={<Quizz/> }  />
      <Route path="/result"  element={<Result/> }  />
   </Routes>

  



  )
}

export default App
