import React from "react";

const CrashContainerCourses = () => {
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
              fontSize: "25px",
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
            Crash Courses
          </h2>
        </nav>
        <br />
        <ul>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", fontSize: "20px"}}>This program focuses on covering important topics in a systematic way and simultaneously trains students to tackle the entrance examination to improve their expected All India Rank.</li>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", fontSize: "20px"}}>The entire syllabus will be  covered in the short period by the expert professors and it is discussed from the entrance exam point of view. To give the students a feel of the actual exams, they are also provided with the All India Test Series.</li>
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", fontSize: "20px"}}>This Course is designed to cover the entire syllabus of NEET in a short period.</li>
              <br />
              <hr style={{borderTop: "1px solid"}} />
              <li style={{marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", listStyle: "none", fontSize: "20px"}}>For more details :- kindly contact on mobile number <u style={{color: "black"}}>7900007174</u></li>  
        </ul>    
     </div>
   </div>
 </>
  );
};
export default CrashContainerCourses;
