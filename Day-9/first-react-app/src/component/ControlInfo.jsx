import Info from "./info";

const ControllInfo=()=>{
    // const lang=["Java","JavaScript","Kotlin","Python","C"]
            let lang=[
              {id: 1, name: "Java"},
              {id: 2, name: "JavaScript"},
              {id: 3, name: "Kotlin"},
              {id: 4, name: "Python"},
              {id: 5, name: "C"}
            ];
    return(
        <div>
            {/* Info(lang); */}
            <Info lang={lang}/>
        </div>
    )
}
export default ControllInfo;