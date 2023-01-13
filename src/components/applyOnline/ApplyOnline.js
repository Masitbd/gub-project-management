import axios from 'axios'
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import './ApplyOnline.css'


const ApplyOnline = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const [teachers, setTeachers] = useState([])
  

  useEffect(()=>{
    fetch('http://localhost:5000/teacher')
    .then(res =>res.json())
    .then(data =>setTeachers(data))
    
  },[])

  const findTeachers=()=>{
    const unique = teachers.filter((obj, index) => {
      return index === teachers.findIndex(o => obj.name === o.name);
    })
   return unique
  }
const uniqueTeachersName = findTeachers()
  

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
    <select {...register("gender")}>
      {
        
        uniqueTeachersName.map(teacher =>{
         return <option value="name">{teacher.name}</option>
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
