import React, { useEffect, useRef, useState } from 'react'

const Login = () => {
    // const [user,setUser]=useState();
    // const [pass,setPass]=useState();

    // const changeUser=(event)=>{
    //     setUser(event.target.user);
    // }
    // const changePass=(event)=>{
    //     setPass(event.target.pass);
    // }

    
    //// const [userInfo,setUserInfo]=useState({user:"",pass:""});
    //// const changeUserInfo=(event)=>{
    ////     const name=event.target.name;
    ////     const value=event.target.value;
    ////     setUserInfo({...userInfo,[name]:value});
    //// }

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
    <div>
        <h2>Login Information</h2>
        <form className='d-flex flex-column col-3' >

            <lable htmlFor="name">Enter username</lable>
            {/* <input type="text" name="user" value={user} onChange={changeUser}/> */}
            {/* <input type="text" name="user" value={userInfo.user} onChange={changeUserInfo}/> */}
            <input ref={userRef} type="text" name="user" value={userInfo.user} onChange={changeUserInfo}/>

            <lable htmlFor="pass">Enter password</lable>
            {/* <input type="password" name="pass" value={pass} onChange={changePass}/> */}
            <input type="password" name="pass" value={userInfo.pass} onChange={changeUserInfo}/>

        </form>

        {/* <h2>User:{user}</h2>
        <h2>Password:{pass}</h2> */}

        <h2>User:{userInfo.user}</h2>
        <h2>Password:{userInfo.pass}</h2>

    </div>
  )
}

export default Login