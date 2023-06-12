import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
//import {image} from 'https://cdn.pixabay.com/photo/2023/04/10/22/45/butterfly-7914868_1280.jpg'
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

const Cse = () => {
  const [teachers, setTeachers] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:5000/cse")
    .then((response) => {
      setTeachers(response.data)
      
    })
   },[])
  return (
    
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {teachers.map((teacher, index) => (
      <Grid item xs={2} sm={4} md={4} key={index} style={{ backgroundColor:'#e6ffee', marginTop:'30px'}}>
         <div style={{height:'300px', backgroundColor: ''}}>
          <Item> <img src="https://img.freepik.com/premium-photo/portrait-young-male-teacher-light-background_99433-2422.jpg?w=1380" height={100} width={100} alt='Teacher' /></Item>
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

export default Cse