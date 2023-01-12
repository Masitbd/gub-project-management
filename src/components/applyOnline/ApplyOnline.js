import axios from 'axios'
import React from "react";
import { useForm } from "react-hook-form";
import './ApplyOnline.css'


const ApplyOnline = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

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
        <option value="name">Department of EEE</option>
        <option value="name">Department of CSE</option>
        <option value="name">Green Business School</option>
        <option value="name">Department of Law</option>
        <option value="name">Department of English</option>
        <option value="name">Department of Sociology</option>
        <option value="name">Department of Textile Engineering</option>
      </select>
     
    <label>Research interest Topic Details:</label>
    <textarea {...register("research", { required: true })} />
    {errors.research && <span>Please write your interest</span>}
    <input type="submit" />
  </form>
  )
};

export default ApplyOnline;
