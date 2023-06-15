import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   /*  height: 70, */
  }));

const StudentPortal = () => {
    const { register, handleSubmit } = useForm();
    const [students, setStudents] = useState([])
    const [teachers, setTeachers] = useState([])
   
    
   useEffect(()=>{
    fetch('http://localhost:5000/student')
    .then(res =>res.json())
    .then(data =>setStudents(data))
    
  },[])


  const findStudents=()=>{
    const unique = students.filter((obj, index) => {
      return index === students.findIndex(o => obj.studentName === o.studentName);
    })
   return unique
  }
const uniqueStudentsName = findStudents()


  const onSubmit = (data) =>{
    console.log('student name', data)
    axios.get(`http://localhost:5000/student/${data.studentName}`)
    .then((response) => {
        setTeachers(response.data)  
    })}

  
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <select  {...register("studentName", { required: true })}>
    
    {uniqueStudentsName.map((teacher) =><option value={teacher.studentName}>{teacher.studentName}</option>
   
    )}
   

     </select><input type="submit" />
    </form>
      <p style={{fontSize:  '30px'}}>Student portal</p>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
    {teachers.map((teacher, index) => (
      <Grid item xs={2} sm={4} md={4} key={index} style={{ backgroundColor:'#e6ffee', marginTop:'30px'}}>
         <div style={{height:'300px', backgroundColor: ''}}>
         
          <Item> <img src="https://img.freepik.com/premium-photo/image-content-student-guy-denim-clothes-smiling-while-holding-exercise-books-isolated-yellow-wall_171337-110534.jpg?w=1380" height={100} width={100} alt='Teacher' /></Item>
   
         <Item>{teacher.gender}</Item>
         <Item>{teacher.email}</Item>
         <Item>{teacher.research}</Item>
         </div>
    </Grid>
    ))}
  </Grid>
    </div>
    
    );
};

export default StudentPortal;