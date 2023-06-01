import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import axios from "axios";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 /*  height: 70, */
}));

const Eee = () => {
  const [teachers, setTeachers] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:5000/eee")
    .then((response) => {
      setTeachers(response.data)
      
    })
   },[])
  return (
    
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {teachers.map((teacher, index) => (
      <Grid item xs={2} sm={4} md={4} key={index} style={{ backgroundColor:'#e6ffee', marginTop:'30px'}}>
         <div style={{height:'300px', backgroundColor: ''}}>
         <Item>{teacher.name}</Item>
         <Item>{teacher.email}</Item>
         <Item>{teacher.research}</Item>
         <Item><Link to='https://green.edu.bd/faculty-profile-dept/dept-of-eee/' >See more</Link></Item>
         </div>
       
      </Grid>
    ))}
  </Grid>
   
  )
};

export default Eee;
