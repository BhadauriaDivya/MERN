import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './App.css'
// import Languages from './component/Languages'
// import Message, { Display } from './component/Message'
// import Counter1 from "./component/Counter"
// import ChangeName from './component/ChangeName'
import ControllInfo from './component/ControlInfo'

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
    
    //   {/* <Counter1/> */}
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

return(
  <>
  <ControllInfo/>
  </>
)

}

export default App