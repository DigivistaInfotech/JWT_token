import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
    const [values,setvalues]=useState({
        email:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <div className="conter">
        <h2>Login an Account</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
       
            <div className="det">
                <label htmlFor="email">email</label>
                <input type="email" name="email" placeholder="Enter your email" className="input15" onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <label htmlFor="password">password</label>
                <input type="password" name="password" placeholder="Enter your name"className="input13"  onChange={(e)=>setvalues({...values,[e.target.name]:e.target.values})}/>
            </div>
            <div className="det">
                <button type="submit">submit</button>
                <Link to="/register"><span className="input12">Already don't have an account</span></Link>
            </div>
        </form>

    </div>
    )
}