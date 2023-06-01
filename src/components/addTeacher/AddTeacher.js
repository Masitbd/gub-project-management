import axios from 'axios'
import React from "react";
import { useForm } from "react-hook-form";
import './AddTeacher.css'



const AddTeacher = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const onSubmit = data =>{
    console.log('see data',data);
    axios.post("http://localhost:5000/teacher", data)
    .then(res =>{
      if(res.data.insertedId){
        alert('One record added successfully')
      }
      reset()
    })
  } 
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <label>Teacher's Name:</label>
    <input {...register("name", { required: true })} />
    {errors.name && <span>Teacher's name is required</span>}
    <label>Department Name:</label>
    <select {...register("gender")}>
        <option value="name">Department of EEE</option>
        <option value="name">Department of CSE</option>
        <option value="name">Green Business School</option>
        <option value="name">Department of Law</option>
        <option value="name">Department of English</option>
        <option value="name">Department of Sociology</option>
        <option value="name">Department of Textile Engineering</option>
      </select>
      <label>Email:</label>
    <input {...register("email", { required: true , pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i})} />
    {errors.email && <span>Please enter right email address</span>}
    <label>Research interest:</label>
    <textarea {...register("research", { required: true })} />
    {errors.name && <span>Please write your interest</span>}
    <input type="submit" />
  </form>
  )
};

export default AddTeacher;
