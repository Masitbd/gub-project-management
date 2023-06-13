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
  return <div>
    {
    applyonline.map(apply=>{
      return (
        
          <div style={{'backgroundColor':'rosybrown'}}>
            <p>{apply.studentName}</p>
            <p>{apply.filename}</p>
            <p>{apply.email}</p>
          </div>
      )
    })
    }
    </div>
};

export default ReserchList;
