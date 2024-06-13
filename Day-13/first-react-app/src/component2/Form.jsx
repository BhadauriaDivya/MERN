import React, { useEffect, useRef, useState } from 'react'

const Form = () => {

    const [userInfo,setUserInfo]=useState({user:"",pass:""});
    const userRef=useRef();
    useEffect(()=>{
            userRef.current.focus();
            userRef.current.style.color='#ff0000';
        },[]);
    const changeUserInfo=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUserInfo({...userInfo,[name]:value});
    }

  return (
    <div className='container col-4 text-center'>
        <h1><em>Login Form</em></h1>
        <br/><br/>
        <form className='d-flex flex-column border border-dark border-3 rounded p-5'>
            <lable htmlFor="name">Enter username</lable>
            <input className='text-center m-2' ref={userRef} type="text" name="user" value={userInfo.user} onChange={changeUserInfo}/>

            <lable htmlFor="pass">Enter password</lable>
            <input className='text-center m-2' type="password" name="pass" value={userInfo.pass} onChange={changeUserInfo}/>
            
            <div className='d-flex justify-content-center'>
                <button className='btn  btn-success col-3 d-grid gap-2 mt-3' type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}
export default Form
