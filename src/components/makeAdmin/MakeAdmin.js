import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
const {
        register,
        handleSubmit,reset,
        formState: { errors }
      } = useForm({defaultValues: {
        user: "",
      },});
      const onSubmit = (data) => {
        //console.log(data);
        axios.put("http://localhost:5000/users/admin", data)
    .then(res =>{
      if(res.data.modifiedCount){
        alert('Make admin successfully')
      }
      reset()
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