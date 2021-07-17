import React from "react";

const OnlineContainerCourses = () => {
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
              fontSize: "30px",
            }}
          >
            NEET Courses
          </h2>
          <br />
          <h2
            style={{
              fontFamily: "verdana",     
              textAlign: "center",
              fontSize: "22px",
            }}
          >
            All India Test Series (ONLINE/OFFLINE)
          </h2>
        </nav>
        <br />
        <ul>
              <li style={{fontSize: "20px", marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", listStyle: "none",}}>This Course is designed for those aspirants who have studied the topics themselves and want to check their preparation level and compete with Top Rankers on an All India basis for Competitive Exams. The students prepared for the test as scheduled provided to them at the time of admission. Students are provided with a detailed analysis of the test.</li>
              <br />
              <hr style={{borderTop: "1px solid"}} />
              <li style={{fontSize: "20px", marginRight: "15px", marginLeft: "15px", fontFamily: "sans-serif", listStyle: "none"}}>For more details :- kindly contact on mobile number <u style={{color: "black"}}>7900007174</u></li>  
        </ul>                 
      </div>
   </div>
 </>
  );
};
export default OnlineContainerCourses;
