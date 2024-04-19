import { useState } from 'react'
import {Route,Routers} from 'react-router-dom '
import HomePage from './component/HomePage'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
// import Languages from './component/Languages'
// import Message, { Display } from './component/Message'
// import Counter from "./component/Counter"
// import MyCounter from './component/MyCounter'
// import MyCard from './component/MyCard'
// import Card from './component/Card'
// import ChangeName from './component/ChangeName'
// import ControllInfo from './component/ControlInfo'

function App() {

  //  return <h1>MCA</h1>
  //  return <h1>KIET</h1>;<h1>MCA</h1>         ERROR
  //  return (                                  ERROR
  //   <h1>KIET</h1>;
  //   <h1>MCA</h1>;
  // )
  // return (
    //   <>
    //   {/* <Message/> */}
    //   {/* <Display/> */}
    //   {/* <Languages/> */}
    
    //   {/* <ChangeName sname="JAVA"/> */}
    //   </>
  //    )


  // [  
  //     const[name,setName]=useState("KIET"); //lifting of state
  //     const[sname,setSName]=useState("MCA");
  //   return(
  //     <>
  //     <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
  //     <ChangeName name={sname} onUpdate={()=>setSName("MCA KIET")}/>
  //     </>
  //   )
// ]

// return(
//   <>
//  {/* <ControllInfo/> */}
//    </>
//  )

// return(
//   <>
//     {/* <Counter/> */}
//     <MyCounter/>
// {/* <MyCard/> */}
//    </>
//  )
// }

return(
  <>
    <h1>Home Page</h1>
    <Routers>
      <Route path="/" element={<HomePage/>} />
    </Routers>
   </>
 )
}

export default App