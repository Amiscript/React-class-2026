import About from "./component/About"
import Home from "./component/home"
import Service from "./component/Service"
import Navbar from "./component/Navbar"
import Fetchdata from "./component/fetchdata"

import Faq from "./component/Faq"
import Footer from "./component/Footer"
import PageNotFound from "./component/PageNotFound"

import Todo from "./component/todo"
import {Routes, Route} from 'react-router-dom'

// props => properties
// react router => npm install react-router-dom
// state => useState
 
function App() {
 return (

  <div className=" text-black relative mt-30 ">
      <Navbar />
    
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/Faq" element={<Faq />}/>
     <Route path="/About" element={<About name="John" age={30} />}/>
      <Route path="/Service" element={<Service />}/>
      <Route path="/Todo" element={<Todo />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  
    <Fetchdata />  
      <Footer />
     
 

  </div>

 )

}

export default App
