import React from 'react'
import Shubh11 from '../assest/Shubh11.png'
import './About.css'
const About = () => {
  return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <p className="fs-5 fw-medium fst-italic text-primary">About me</p>
                                <img className="img-fluid bg-white w-100 mb-3 wow fadeIn bgImg" data-wow-delay="0.1s" src={Shubh11} alt="" />
                                <h1 className="display-6" style={{fontFamily:'serif', fontSize:'20px',paddingRight:'50px'}}>Shubham Prajapat</h1>
                                {/* <img className="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src={about2} alt="" /> */}
                            </div>
                            <div className="col-6">
                                {/* <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src={about3} alt="" /> */}
                                {/* <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src={about4} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="section-title">
                            {/* <p className="fs-5 fw-medium fst-italic text-primary">About Us</p> */}
                            <h1 className="display-6" style={{fontFamily:'serif'}}>Hi,👋🏻 I Am Shubham Prajapat</h1>
                        </div>
                        <div className="row g-3 mb-4">
                            <div className="col-sm-4">
                                {/* <img className="img-fluid bg-white w-100" src={about5} alt="" /> */}
                            </div>
                            <div className="col-sm-8">
                                <h5>I am Web Devloper I have 6 month intership done from indivbe infotech</h5>
                                <p className="mb-0">I am happy to start my career in It Industry in year 2023 and i have enjoy my work coding life
                                 i always learning new skills and always focus my goal. i am pasionate and dedication to my work
                                </p>
                            </div>
                        </div>
                        <div className="border-top mb-4"></div>
                        <div className="row g-3">
                            <div className="col-sm-8">
                                <h5>I always learning new skills</h5>
                                <p className="mb-0">I have knowlede about HTML CSS Javascript React js Bootsrap and jqury</p>
                            </div>
                            <div className="col-sm-4">
                                {/* <img className="img-fluid bg-white w-100" src={about6} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default About