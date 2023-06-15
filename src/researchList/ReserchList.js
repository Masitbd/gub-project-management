import axios from "axios";
import React, { useEffect, useState } from "react";

const ReserchList = () => {

  const [applyonline, setApplyonline] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/applyOnline")
    .then((response) => {
      setApplyonline(response.data)
      
    })
  }, [])
  return <div style={{marginBottom: '10px', padding:'10px'}}>
    {
    applyonline.map(apply=>{
      return (
        
          <div style={{backgroundColor:'rosybrown', paddingLeft: '15px', color:'white'}}>
            <p style={{paddingTop: '10px'}}>Student Name: {apply.studentName}</p>
            <p>Student Id: {apply.studentId}</p>
            <p>Teacher Name: {apply.gender}</p>
            <p>Student Email: {apply.email}</p>
            <p style={{paddingBottom: '10px'}}>Research Topic: {apply.research}</p>
          </div>
      )
    })
    }
    </div>
};

export default ReserchList;
