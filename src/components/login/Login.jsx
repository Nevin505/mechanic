import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Compoenets
import Button from '../common/Button'
import Input from '../common/Input';

// Icons
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { loginUser } from '../../apis/auth';


const Login =({onClick}) =>{

   const[errors,setErrors]=useState();
   const navigate=useNavigate();

    const loginHandler=async(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const email=formData.get('email');
        const password=formData.get('password');

         const valiadationInformation=validateInputs({email,password});
         if(valiadationInformation){
            console.log({email,password})
            const user={email,password}
            try{
               const result=await loginUser(user);
               console.log(result);
               sessionStorage.setItem("token",result.data.token)
               navigate(`/${result.data.role==='User'?'user':'admin'}`)
               toast.success("Sucess");
            }
            catch(error){
                console.log(error)
                  alert(error)
            }
         }
         else{
            toast.info("Errors")
         }
    }

    const validateInputs=({...validationDatas})=>{
        const errors={};
         Object.keys(validationDatas).forEach(validateInput=>{
                 if( ! validationDatas[validateInput]){
                    errors[validateInput]=validateInput +" is missing";
                 }
         })
         if(Object.keys(errors).length>0){
            setErrors(errors)
            return false;
         }
         else{
            setErrors("");
            return true;
         }
    }

  return (
            <div className='flex flex-col gap-4 items-center px-8  py-4  bg-primary-500  "'>
            <h1 className='font-bold text-2xl'>Login</h1>
            <form action="" onSubmit={(e)=>loginHandler(e)} className='flex flex-col gap-4'>
                <div className='flex flex-col  items-center gap-2'>
                    <Input type="text"  placeholder="Enter Your email" name="email" startIcon={<MdEmail/>}/>
                    {errors?.email &&  <p className='text-red-500 font-semibold'>{errors.email}</p>}
                </div>
                <div  className='flex flex-col items-center gap-2'>
                    <Input type="text"  placeholder="Enter Your Password" name="password" startIcon={<RiLockPasswordFill/>}/>
                    {errors?.password &&  <p className='text-red-500 font-semibold'>{errors.password}</p>}
                </div>
                <div className="flex justify-around   w-full">
                <Button  onClick={onClick} >Close</Button>
                <Button >Login</Button>
                </div>
            </form>
            <p>New User?<Link className='text-blue-800 underline' to={'/register'} >REGISTER HERE</Link></p>
             <ToastContainer position='top-center' />
        </div>
  )
}

export default Login
