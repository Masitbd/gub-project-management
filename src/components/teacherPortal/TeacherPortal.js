import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   /*  height: 70, */
  }));

const TeacherPortal = () => {
    const { register, handleSubmit } = useForm();
    const [teachers, setTeachers] = useState([])
    const [students, setStudents] = useState([])
    
   useEffect(()=>{
    fetch('http://localhost:5000/teacher')
    .then(res =>res.json())
    .then(data =>setTeachers(data))
    
  },[])


  const onSubmit = (data) =>{
    //console.log('Teacher name', data.gender)
    axios.get(`http://localhost:5000/${data.gender}`)
    .then((response) => {
        setStudents(response.data)  
    })}

  
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <select  {...register("gender", { required: true })}>
    
    {teachers.map((teacher) =><option value={teacher.name}>{teacher.name}</option>
   
    )}
   

     </select><input type="submit" />
    </form>
    <p style={{fontSize:  '30px', }}>Teacher portal</p>
    {students.length ?  <p style={{color: 'blue', fontSize: '20px', margin: '30px'}}>Asigned Student:{students.length}</p>: 'No student asigned'
}
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
    {students.map((student, index) => (
      <Grid item xs={2} sm={4} md={4} key={index} style={{ backgroundColor:'#e6ffee', marginTop:'30px'}}>
         <div style={{height:'300px', backgroundColor: ''}}>
         
          <Item> <img src="https://img.freepik.com/premium-photo/image-content-student-guy-denim-clothes-smiling-while-holding-exercise-books-isolated-yellow-wall_171337-110534.jpg?w=1380" height={100} width={100} alt='Teacher' /></Item>
   
         <Item>{student.studentName}</Item>
         <Item>{student.email}</Item>
         <Item>{student.research}</Item>
         </div>
       
      </Grid>
    ))}
  </Grid>
    </div>
    
    );
};

export default TeacherPortal;