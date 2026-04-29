import About from "./component/About"
import Home from "./component/home"
import Service from "./component/Service"
import Navbar from "./component/Navbar"
import Faq from "./component/Faq"
import Footer from "./component/Footer"
import PageNotFound from "./component/PageNotFound"
import {Routes, Route} from 'react-router-dom'



// props => properties
// react router => npm install react-router-dom
// state => useState
 
function App() {
 return (
  <div className="bg-gradient-to-b from-amber-900 via-amber-500 to-amber-900 text-white ">
      <Navbar />
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/Faq" element={<Faq />}/>
     <Route path="/About" element={<About name="John" age={30} />}/>
      <Route path="/Service" element={<Service />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
      <Footer />
  </div>
 )

}

export default App
