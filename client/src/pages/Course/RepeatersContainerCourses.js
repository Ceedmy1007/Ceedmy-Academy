import React from "react";

const RepeatersContainerCourses = () => {
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
            Repeaters Program (NEET + AIIMS + JIPMER)
          </h2>
        </nav>
        <br />
        <ul>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", listStyle: "none",}}>In this program, we are providing knowledge that helps students in weak areas of his/her previous year’s preparation. This program will cover the entire syllabus of NEET/AIIMS/JIPMER.</li>
              <br />
              <hr style={{borderTop: "1px solid"}} />
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", listStyle: "none"}}>For more details :- kindly contact on mobile number <u style={{color: "black"}}>7900007174</u></li>  
        </ul>          
     </div>
   </div>
 </>
  );
};
export default RepeatersContainerCourses;
