import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

export default function Register(){
    const [values,setvalues]=useState({
        name:"",
        email:"",
        mobile:"",
        password:"",
        confirm_password:""
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {data}=await axios.post("http://localhost:4000/register",{
                ...values,
            });
            console.log(data);
            if(data){
                if(data.errors){

                }
                else{

                }
            }
        }catch(err){}
    }
    return(
    <div className="conter">
        <h2>Register an Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="det">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" name="name" className="input1" onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <label htmlFor="email">email</label>
                <input type="email" placeholder="Enter your email" name="email" className="input15"onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <label htmlFor="mobile">mobile</label>
                <input type="number" placeholder="Enter your Mobile number" name="mobile" className="input14" onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <label htmlFor="password">password</label>
                <input type="password" placeholder="Enter your name"className="input13" name="password"  onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <label htmlFor="confirm">confirm password</label>
                <input type="password" placeholder="Enter your name" className="input12" name="confirm_password" onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <button type="submit">submit</button>
                <Link to="/login"><span className="input12">Already have an account</span></Link>
            </div>
        </form>

    </div>
    
    )
}