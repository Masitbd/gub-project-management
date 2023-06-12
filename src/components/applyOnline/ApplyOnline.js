import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './ApplyOnline.css'


const ApplyOnline = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const [teachers, setTeachers] = useState([])
  const [maxProject, srtMaxProject] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:5000/teacher')
    .then(res =>res.json())
    .then(data =>setTeachers(data))
    
  },[])


  useEffect(()=>{
    fetch('http://localhost:5000/applyOnline')
    .then(res =>res.json())
    .then(data =>srtMaxProject(data))
    
  },[])

  const findTeachers=()=>{
    const unique = teachers.filter((obj, index) => {
      return index === teachers.findIndex(o => obj.name === o.name);
    })
   return unique
  }
const uniqueTeachersName = findTeachers()

const findMaxProject = (e)=>{
const count = maxProject.reduce((counter, obj)=>obj.gender===e.target.options[e.target.selectedIndex].text? counter += 1 : counter, 0)
console.log('Max project', count)
if(count >5){
  alert('Already alocated 5 project please select another teacher')
}
}
  

  const onSubmit = (data )=>{

    //const formData = new FormData();
   
    console.log(data);
/* 
    formData.append('studentName', data.studentName);
    formData.append('studentId', data.studentId);
    formData.append('email', data.email);
    formData.append('gender', data.gender);
    formData.append('pdf', data.pdf[0]); 
    console.log(formData) */
    
    axios.post("http://localhost:5000/applyOnline", data)
    .then(res =>{
      if(res.data.insertedId){
        alert('One record added successfully')
      }
      reset()
    })
  } 
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <label>Student Name:</label>
    <input type="text" {...register("studentName", { required: true })} />
    {errors.studentName && <span>Teacher's name is required</span>}
    <label>Student ID:</label>
    <input type="text"  {...register("studentId", { required: true })} />
    {errors.studentId && <span>Teacher's name is required</span>}
    <label>Email:</label>
    <input {...register("email", { required: true , pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i})} />
    {errors.email && <span>Please enter right email address</span>}
    <label>Select Teacher:</label>
    {/* <select {...register("gender")} onClick={(e)=>console.log(e.target.options[e.target.selectedIndex].text)}> */}
    <select  {...register("gender", { required: true })} onClick={findMaxProject}>
    
    
    <option  value="" >{} </option> 
      {
       
        uniqueTeachersName.map(teacher =>{
         return <option  value={teacher.name}>{teacher.name} </option>
        })
      }
     
       
    </select>
    
          
          <label>Select PDF File:</label>
          <input
  type="file"
  onChange={(e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
     //console.log('fileName', file.name)
      setValue('pdf', file);
    }
  }}
/>        
     
    <label>Research interest Topic Details:</label>
    <textarea type="text" {...register("research", { required: true })} />
    {errors.research && <span>Please write your interest</span>}
    <input type="submit" />
  </form>
  )
};

export default ApplyOnline;
