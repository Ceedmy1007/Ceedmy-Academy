import React from "react";
import {Link} from "react-router-dom";

import "./Course.css";

const Course = () => {
  return (
    <>
     
      
      <div class="container mt-5">
        <div class="row justify-content-md-center">
          <div class="col col-md-auto">
            <li className="list-unstyled ">
              <h3>
                
                <Link to="/upsc">UPSC/IAS</Link>
              </h3>
            </li>
          </div>
          <div class="col col-md-auto">
            <li className="list-unstyled ">
              <h3>
                
                <Link to="/mpsc">MPSC</Link>
              </h3>
            </li>
          </div>
          <div class="col col-md-auto">
            <li className="list-unstyled ">
              <h3>
              
                <Link to="/iit">IIT/JEE</Link>
              </h3>
            </li>
          </div>
          <div class="col col-md-auto">
            <li className="list-unstyled ">
              <h3>
                
                <Link to="/neet">NEET</Link>
              </h3>
            </li>
          </div>
          <div class="col col-md-auto">
            <li className="list-unstyled ">
              <h3>
                
                <Link to="/school">CBSE,ICSE,STATE BOARD</Link>
              </h3>
            </li>
          </div>
          <div class="col col-md-auto">
            <li className="list-unstyled ">
              <h3>
                
                <Link to="/clat">CLAT</Link>
              </h3>
            </li>
          </div>
         
          
        </div>
      </div>

      <hr />
      <div className="main-container">
        <div className="container">
          <div className="row ">
            <div className="medium-12 columns">
              <div className="courses_details_banner">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="course_text">
                        <h3 style={{ color: "#000" }}>
                          UPSC/IAS 
                        </h3>
                        <div className="prise">
                          <span className="inactive" style={{ color: "#000" }}>
                            PreviousPrice
                          </span>
                          <span className="active">PresentPrice</span>
                        </div>
                        <div className="rating">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span style={{ color: "#000" }}>(4.5)</span>
                        </div>
                        <div className="hours">
                          <div className="video">
                            <div className="single_video">
                              <i className="fa fa-clock-o"></i>{" "}
                              <span style={{ color: "#000" }}>12 Videos</span>
                            </div>
                            <div className="single_video">
                              <i className="fa fa-play-circle-o"></i>{" "}
                              <span style={{ color: "#000" }}>9 Hours</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="courses_details_info">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7">
                      <div className="single_courses">
                        <h3>Objectives</h3>
                        <p>
                          To enable students become intellectually, emotionally, and spiritually strong enough to
face the challenges in the real world and to produce eminent personalities and thereby
offering infinite dignity on both personal and professional fronts.
To emerge as a distinguished coaching institute of Engineering and Medical aspirant
aiming to work for the development of society at large. We strive to provide a versatile
and competent learning system and henceforth turning India to become a developed
country.{" "}
                        </p>
                        <h3 className="second_title">FAQs</h3>
                      </div>
                      <div className="outline_courses_info">
                        <div id="accordion">
                          <div className="card">
                            <div className="card-header" id="headingTwo">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <i className="flaticon-question"></i> Is
                                 Ceedmy Academy worth it?
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Our set he for firmament morning sixth subdue
                                darkness creeping gathered divide our let god
                                moving. Moving in fourth air night bring upon
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingOne">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  <i className="flaticon-question"></i>Basic
                                  Courses
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Our set he for firmament morning sixth subdue
                                darkness creeping gathered divide our let god
                                moving. Moving in fourth air night bring upon
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingThree">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <i className="flaticon-question"></i>Why to join Ceedmy Academy?
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Our set he for firmament morning sixth subdue
                                darkness creeping gathered divide our let god
                                moving. Moving in fourth air night bring upon
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading_4">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapse_4"
                                  aria-expanded="false"
                                  aria-controls="collapse_4"
                                >
                                  <i className="flaticon-question"></i> Benefits of Ceedmy Academy.
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapse_4"
                              className="collapse"
                              aria-labelledby="heading_4"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Our set he for firmament morning sixth subdue
                                darkness creeping gathered divide our let god
                                moving. Moving in fourth air night bring upon
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="heading_5">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapse_5"
                                  aria-expanded="false"
                                  aria-controls="collapse_5"
                                >
                                  <i className="flaticon-question"></i> How do I
                                  get started <span>with the courses?</span>
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapse_5"
                              className="collapse"
                              aria-labelledby="heading_5"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Our set he for firmament morning sixth subdue
                                darkness creeping gathered divide our let god
                                moving. Moving in fourth air night bring upon
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-5 col-lg-5">
                      <div className="courses_sidebar">
                        <div className="video_thumb">
                          <img
                            src="https://github.com/Ceedmy/Ceedmy_frontend/blob/saiharsha-22/React/new-app/public/img/latest_blog/Videos.png"
                            alt=""
                          />
                          <a
                            className="popup-video"
                            href="https://www.youtube.com/watch?v=AjgD3CvWzS0"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                        <div className="author_info">
                          <div className="auhor_header">
                            <div className="thumb">
                              <img
                                src="https://github.com/Ceedmy/Ceedmy_frontend/blob/saiharsha-22/React/new-app/public/img/latest_blog/circle-cropped(1).png"
                                alt=""
                              />
                            </div>
                            <div className="name">
                              <h3>Mr. Gurucharan Singh Makhija</h3>
                              <p>Exdirector
of APOGEE Achievers Pointr</p>
                            </div>
                          </div>
                          <p className="text_info">
                           He has given a
gold medal in ICHO to the country and has produced AIR
19, 42, 46, 91, 92,142 and many more in top 100. He has
produced more than 50 selections in the top 500 and
5000+ selections in JEE Advanced.
                          </p>
                          <ul>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-envelope"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="fa fa-twitter"></i>{" "}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                {" "}
                                <i className="ti-linkedin"></i>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <a href="#" className="boxed_btn">
                          Buy Course
                        </a>
                        <div className="feedback_info">
                          <h3>Write your feedback</h3>
                          <p>Your rating</p>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <form action="#">
                            <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="10"
                              placeholder="Write your feedback"
                            ></textarea>
                            <button type="submit" className="boxed_btn">
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subscribe_newsletter bg-light">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="newsletter_text">
                        <h3>Subscribe Newsletter</h3>
                        <p>
                          Subscribe our newsletter for daily updates.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                      <div className="newsletter_form">
                        <h4>Help us giving your Email ID</h4>
                        <form action="#" className="newsletter_form">
                          <input type="text" placeholder="Enter your mail" />
                          <button type="submit">Sign Up</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="our_courses">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section_title text-center mb-100">
                        <h3>Our Course Speciality</h3>
                        <p>
                          Your domain control panel is designed for ease-of-use
                          and <br /> allows for all aspects of your domains.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-6">
                      <div className="single_course text-center">
                        <div className="icon">
                          <i className="flaticon-art-and-design"></i>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>
                          Your domain control panel is designed for ease-of-use{" "}
                          <br /> and <br /> allows for all aspects of
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-6">
                      <div className="single_course text-center">
                        <div className="icon blue">
                          <i className="flaticon-business-and-finance"></i>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>
                          Your domain control panel is designed for ease-of-use{" "}
                          <br /> and <br /> allows for all aspects of
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-6">
                      <div className="single_course text-center">
                        <div className="icon">
                          <i className="flaticon-premium"></i>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>
                          Your domain control panel is designed for ease-of-use{" "}
                          <br /> and <br /> allows for all aspects of
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-6">
                      <div className="single_course text-center">
                        <div className="icon gradient">
                          <i className="flaticon-crown"></i>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>
                          Your domain control panel is designed for ease-of-use{" "}
                          <br /> and <br /> allows for all aspects of
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Course;
