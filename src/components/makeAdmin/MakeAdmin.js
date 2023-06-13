import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        axios.put("http://localhost:5000/users/admin", data)
    .then(res =>{
      if(res.data.insertedId){
        alert('One record added successfully')
      }
     // reset()
    })
  }
    
 return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("user", { required: true })} />
             {errors.makeAdmin && <p>This field is required</p>}

      <input type="submit" />
    </form>
    );
};

export default MakeAdmin;