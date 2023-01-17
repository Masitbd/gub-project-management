import axios from 'axios'
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import './ApplyOnline.css'


const ApplyOnline = () => {
  const { register, handleSubmit,reset, getValues, formState: { errors } } = useForm();
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
  

  const onSubmit = data =>{
    console.log(data);
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
    <input {...register("studentName", { required: true })} />
    {errors.studentName && <span>Teacher's name is required</span>}
    <label>Student ID:</label>
    <input {...register("studentId", { required: true })} />
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
     
    <label>Research interest Topic Details:</label>
    <textarea {...register("research", { required: true })} />
    {errors.research && <span>Please write your interest</span>}
    <input type="submit" />
  </form>
  )
};

export default ApplyOnline;
