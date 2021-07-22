import React from "react";


const repeatersneetcourses = () => {
  return (
      <>
     
    <div className="container mt-2">
      <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              padding: "10px",
			  fontSize: "30px",
              fontWeight: "bold",
			  textAlign: "center",
			  fontStyle: "helvetica"
            }}
          >
            NEET Courses
          </h2>
        </nav>
	 </div>
     <br />
     <div className="flexClass">
        <nav aria-label="breadcrumb">
          <h2
            style={{
              borderRadius: "5px",
              padding: "10px",
			  fontSize: "22px",
              fontWeight: "350",
			  textAlign: "center",
			  fontStyle: "verdana"
            }}
          >
            Repeaters Program(NEET + AIIMS + JIPMER)
          </h2>
        </nav>
	 </div>
	 <br />
	 <ul>
	    <li style={{listStyle: "none", fontSize: "20px", marginRight: "15px", fontStyle: "sans-serif" ,marginLeft: "15px"}}>In this program, we are providing knowledge that helps students in weak areas of his/her previous year’s preparation. This program will cover the entire syllabus of NEET/AIIMS/JIPMER.</li>
	    <br />
	    <hr style={{borderTop: "1px solid"}} />
        <li style={{listStyle: "none", fontSize: "20px", marginRight: "15px", fontStyle: "sans-serif" ,marginLeft: "15px"}}>For more details:- kindly contact on mobile number <u style={{textColor: "black"}}>7900007174</u></li>		
	 </ul>	
    </div>
   
    </>
  );
};
export default repeatersneetcourses;
