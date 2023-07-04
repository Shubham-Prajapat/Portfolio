import React from 'react'
import Shubh11 from '../assest/Shubh11.png'
import HTML from '../assest/html.png'
import CSS from '../assest/css.png'
import JS from '../assest/js.png'
import './Skills.css'
const Skills = () => {
  return (
    <>
    <h1>Skills</h1>
      <div className="card" style={{display:'inline-block'}}>
                                <img className="img-fluid" alt="100%x280" src={HTML} style={{width:'300px', height:'300px'}} />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center' }}>HTML</h4>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                </div>
                            </div>
                            <div className="card" style={{ display:'inline-block'}}>
                                <img className="img-fluid" alt="100%x280" src={CSS} style={{width:'300px', height:'300px'}} />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center' }}>CSS</h4>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                </div>
                            </div>
                            <div className="card" style={{ display:'inline-block'}}>
                                <img className="img-fluid" alt="100%x280" src={JS} style={{width:'300px', height:'300px'}} />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center' }}>Javascript</h4>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                </div>
                            </div>
                            <div className="card" style={{ display:'inline-block'}}>
                                <img className="img-fluid" alt="100%x280" src='logo192.png' style={{width:'300px', height:'300px'}} />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: 'white', textAlign: 'center' }}>React js</h4>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                </div>
                            </div>

                            
    </>
  )
}

export default Skills