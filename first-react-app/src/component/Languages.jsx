import React from 'react'

// const Languages = () => {
//     let lang=["Java","JavaScript","Kotlin","Python","C"];
//       return (
//     <div>
//         <h1>Best Programming Languages:</h1>
//         <ul>
//             {lang.map((item,index)=>(
//                 <li key={index}>{item}</li>
//             )
//             )}
//         </ul>
//     </div>
//   )
// }

// const Languages = () => {
//     let lang=[
//       {id: 1, name: "Java"},
//       {id: 2, name: "JavaScript"},
//       {id: 3, name: "Kotlin"},
//       {id: 4, name: "Python"},
//       {id: 5, name: "C"}
//     ];
//       return (
//     <div>
//         <h1>Best Programming Languages:</h1>
//         <ul>
//             {lang.map((item,index)=>(
//                 <li key={index.id}>{item.name}</li>
//             )
//             )}
//         </ul>
//     </div>
//   )
// }

const Languages = () => {
  let lang=[
    {id : 1, name: "Java"},
    {id : 2, name: "JavaScript"},
    {id : 3, name: "Kotlin"},
    {id : 4, name: "Python"},
    {id : 5, name: "C"}
  ];
  var check=true;
    return (
  <div>
      { <h1 className={check?"bg-warning":"bg-success text-white"}>    {/* conditional class rendering  */}
        { check?"Best Programming Languages:":"Top 5 Programming Languages"}    {/* conditional expression rendering*/}
        </h1> }     
      <ul>
          {lang.map((item,index)=>(
              <li key={index.id}>{item.name}</li>
          )
          )}
      </ul>
      {lang.filter(({item})=>item[index].name!="Kotlin")}
  </div>
)
}
export default Languages