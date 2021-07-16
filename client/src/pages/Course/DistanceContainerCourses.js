import React from "react";

const DistanceContainerCourses = () => {
  return (
      <>
     
    <div className="container mt-5 mx-5"
    >
      <div className="flexClass">
        <nav aria-label="breadcrumb">
         
          <h2
            style={{
              fontFamily: "helvetica",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "large",
            }}
          >
            NEET Courses
          </h2>
          <br />
          <h2
            style={{
              fontFamily: "verdana",     
              textAlign: "center",
              fontSize: "medium",
            }}
          >
            Distance Learning (NEET)
          </h2>
        </nav>
        <br />
        <ul>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif",}}>Students who are unable to join our regular classroom program can enroll in our distance learning program.</li>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif",}}>This program offers students the flexibility to use time according to their requirement.</li>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif",}}>This course is for all students who due to some reason could not join the regular classes.</li>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif",}}>Our study material along with our Topic wise test & All India Test Series will be delivered to the students.</li>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif",}}>We will provide online access on our portal.</li>
        </ul>    
     </div>
   </div>
 </>
  );
};
export default DistanceContainerCourses;
