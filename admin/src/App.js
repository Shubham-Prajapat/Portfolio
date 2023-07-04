import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './Components/Project';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route path='/project' element={<Project/>}/>
          <Route path='/skills' element={<Skills/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react'
// import AxiosTutorial from './Axios/AxiosTutorial'
// import AxiosPost from './Axios/AxiosPost'

// const App = () => {
//   return (
//     <div className='app'>
//      {/* <AxiosTutorial/> */}
//      <AxiosPost/>
//     </div>
//   )
// }

// export default App