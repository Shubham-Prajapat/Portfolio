import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <div>
      <h1 className='Hproject'>Project</h1>

      <div className="card">
                                {/* <img className="img-fluid" alt="100%x280" src={HTML} style={{width:'300px', height:'300px'}} /> */}
                                <div className="card-body">
                                    <h4 className="card-title" style={{  textAlign: 'center' }}>The Chay Wala</h4>
                                    <p className="card-text">The chay wala Website made by me website show the all tea product and price and best design</p>
                                </div>
                            </div>
                            <div className="card" style={{ display:'inline-block'}}>
                                {/* <img className="img-fluid" alt="100%x280" src={CSS} style={{width:'300px', height:'300px'}} /> */}
                                <div className="card-body">
                                    <h4 className="card-title" style={{  textAlign: 'center' }}>Employee Management</h4>
                                    <p className="card-text">Employee Management is a manage the employee website work on manage employee from admin side</p>
                                </div>
                            </div>
                            <div className="card" style={{ display:'inline-block'}}>
                                {/* <img className="img-fluid" alt="100%x280" src={JS} style={{width:'300px', height:'300px'}} /> */}
                                <div className="card-body" >
                                    <h4 className="card-title" style={{  textAlign: 'center' }}>Restrourant Management</h4>
                                    <p className="card-text">Restrourant Management manage the Restrourant product </p>
                                </div>
                            </div>
                           

    </div>
  )
}

export default Project