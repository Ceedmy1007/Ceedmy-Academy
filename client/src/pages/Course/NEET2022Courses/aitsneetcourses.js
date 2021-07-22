import React from "react";


const aitsneetcourses = () => {
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
            All India Test Series(ONLINE/OFFLINE)
          </h2>
        </nav>
	 </div>
	 <br />
	 <ul>
	    <li style={{listStyle: "none", fontSize: "20px", marginRight: "15px", fontStyle: "sans-serif" ,marginLeft: "15px"}}>This Course is designed for those aspirants who have studied the topics themselves and want to check their preparation level and compete with Top Rankers on an All India basis for Competitive Exams. The students prepared for the test as scheduled provided to them at the time of admission. Students are provided with a detailed analysis of the test.</li>
	    <br />
	    <hr style={{borderTop: "1px solid"}} />
        <li style={{listStyle: "none", fontSize: "20px", marginRight: "15px", fontStyle: "sans-serif" ,marginLeft: "15px"}}>For more details:- kindly contact on mobile number <u style={{textColor: "black"}}>7900007174</u></li>		
	 </ul>	
    </div>
   
    </>
  );
};
export default aitsneetcourses;
