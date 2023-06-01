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
    
    
    <input {...register("name", { required: true })} placeholder="Teacher's Name" />
    {errors.name && <span>Teacher's name is required</span>}
  
    <select {...register("department")}>
        <option value="Department of EEE">Department of EEE</option>
        <option value="Department of CSE">Department of CSE</option>
        <option value="Green Business School">Green Business School</option>
        <option value="Department of Law">Department of Law</option>
        <option value="Department of English">Department of English</option>
        <option value="Department of Sociology">Department of Sociology</option>
        <option value="Department of Textile Engineering">Department of Textile Engineering</option>
      </select>
    <input {...register("email", { required: true , pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i})}
    placeholder="Email address" 
    />
    {errors.email && <span>Please enter right email address</span>}
     <textarea {...register("research", { required: true })} placeholder="Research interest" />
    {errors.name && <span>Please write your interest</span>}
    <input style={{marginTop: '10px', marginBottom: '40px'}} type="submit" />
  </form>
  )
};

export default AddTeacher;
