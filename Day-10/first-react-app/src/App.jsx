// import { useState } from 'react'
// import {Route,Routes} from 'react-router-dom'
// import HomePage from './component/HomePage'
// import MyCard from './component/MyCard'
// import MyCounter from './component/MyCounter'
// import Navbar from './component/Navbar'
// import ErrorPage from './component/ErrorPage'
// import About from './component/About'
// import Languages from './component/Languages'
// import Product from './component/Product'
// import Product3 from './component/Product3'
// import Product2 from './component/Product2'
// import Product1 from './component/Product1'
// import Student from './component/Student'
import MyMovie from './component/MyMovie'


function App() {
return(
  <>
  <MyMovie/>
    {/* <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/card" element={<MyCard/>} />
      <Route path="/counter" element={<MyCounter/>}/>
      <Route path="/lang" element={<Languages/>}/>

      <Route path="/student" element={<Student/>}>
        <Route path="/student/:name" element={<Student/>}/>                  {/* /:name ---> DYNAMIC NESTING ROUTING */}
      {/* </Route>

      <Route path="/product" element={<Product/>}>
      //   {/* Static Nesting Routing */}
      {/* //     <Route path="product1" element={<Product1/>}/>
      //     <Route path="product2" element={<Product2/>}/>
      //     <Route path="product3" element={<Product3/>}/>
      // </Route>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<ErrorPage/>} />
    </Routes> */} 
   </>
 )
}

export default App