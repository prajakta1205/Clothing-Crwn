import { async } from "@firebase/util";
import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultformfields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''

}


const SignUpForm=()=>{

    const[formfields, setFormFields]= useState(defaultformfields);
    const{ displayName, email,password,confirmPassword}=formfields;

    console.log(formfields)

    const handleSubmit= async(event)=>{
        event.preventDefault();

        if(password !== confirmPassword)
        {
            alert("password does not match")
            return
        }

        try{
            const response=await createAuthUserWithEmailAndPassword(email,password)
            console.log(response)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const handleChange =(event)=>{
        const {name,value}= event.target
        setFormFields({...formfields,[name]:value})
    }

    return(
<div>
    <h1>Sign up with your email and password</h1>
    <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password}/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <button type="Submit">Sign Up</button>
    </form>
</div>

    )
}


export default SignUpForm