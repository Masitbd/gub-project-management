import React from "react";
import { useForm } from "react-hook-form";
import './AddTeacher.css'


const AddTeacher = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <label>Teacher's Name:</label>
    <input {...register("name", { required: true })} />
    {errors.name && <span>Teacher's name is required</span>}
    <label>Department Name:</label>
    <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
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
