import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { AiTwotoneMail} from 'react-icons/ai'
import './Contact.css'
const Contact = () => {


  return (
    <div>

<div className="container-xxl contact py-5">
  
  <div className="container">
      <div className=" contactForm section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
          <p className="fs-5 fw-medium fst-italic text-primay"> Contact me  </p>
          <h1 className="display-6 ">Contact us right now</h1>
          <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" value='name' className="form-control" id="name" placeholder="Your Name" />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" value='email' className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" value='subject' className="form-control" id="subject" placeholder="Subject" />
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea value='message' className="form-control" placeholder="Leave a message here" id="message" style={{height: "120px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit" >Send Message</button>
                            </div>
                        </div>
              </form>
      </div> 
      <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.1s" style={{paddingTop:'20px'}}>
          <div className="col-lg-8">
              {/* <p className="text-center mb-5">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p> */}
              <div className="row g-5">
                  <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                      <div className="btn-square mx-auto mb-3">
                          <i><BsFillTelephoneOutboundFill/> </i>
                      </div>
                      <p className="mb-2">+917566860580</p>
                      {/* <p className="mb-0">support@example.com</p> */}
                  </div>
                  <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                      <div className="btn-square mx-auto mb-3">
                          <i> <AiTwotoneMail/>  </i>
                      </div>
                      <p className="mb-2">shubhprajapati17@gmail.com</p>
                      {/* <p className="mb-0">+012 345 67890</p> */}
                  </div>
                  <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                      <div className="btn-square mx-auto mb-3">
                      <i className="fa fa-map-marker-alt fa-2x text-black"></i>

                      </div>
                      <p className="mb-2">Vijay Nagar Indore</p>
                      <p className="mb-0">452010</p>
                  </div>
              </div>
              
          </div>
      </div>
  </div>

</div>

    </div>
  )
}

export default Contact