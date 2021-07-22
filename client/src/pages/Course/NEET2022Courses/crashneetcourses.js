import React from "react";


const crashneetcourses = () => {
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
            Crash Course
          </h2>
        </nav>
	 </div>
	 <br />
	 <ul>
		<li style={{fontSize: "20px", marginRight: "15px", marginLeft: "15px", fontStyle: "sans-serif"}}>This program focuses on covering important topics in a systematic way and simultaneously trains students to tackle the entrance examination to improve their expected All India Rank.</li>
	    <br />
		<li style={{fontSize: "20px", marginRight: "15px", marginLeft: "15px", fontStyle: "sans-serif"}}>The entire syllabus will be  covered in the short period by the expert professors and it is discussed from the entrance exam point of view. To give the students a feel of the actual exams, they are also provided with the All India Test Series.</li>
	    <br />
		<li style={{fontSize: "20px", marginRight: "15px", marginLeft: "15px", fontStyle: "sans-serif"}}>This Course is designed to cover the entire syllabus of NEET in a short period.</li>
	    <br />

	    <hr style={{borderTop: "1px solid"}} />
        <li style={{listStyle: "none", fontSize: "20px", marginRight: "15px", fontStyle: "sans-serif" ,marginLeft: "15px"}}>For more details:- kindly contact on mobile number <u style={{textColor: "black"}}>7900007174</u></li>		
	 </ul>	
    </div>
   
    </>
  );
};
export default crashneetcourses;
