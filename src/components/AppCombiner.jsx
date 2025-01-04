import { useState } from "react";
import AppInput from "./AppInput";
import AppOutput from "./AppOutput";

function AppCombiner(){
    // let array =[{work:'history',date:'24/12/2024'},
    //     {work:'geography', date:'25/12/2024'},{work:'Economics', date:'25/12/2024'}]
    let [content, setcontent] = useState([{id:1,work:'history1',date:'24/12/2024'},
        {id:2,work:'history2',date:'24/12/2024'},{id:3,work:'history3',date:'24/12/2024'}])
    let ii=0;

    let input_val=(i1,i2)=>{
        ii =((content.length)+1);
        let item = {id:ii,work:i1,date:i2};
        console.log(ii,i1,i2)
        let newitem = [...content,item] 
        setcontent(newitem);
    }

    let ondelete=(inn)=>{
             setcontent(current =>
               current.filter(employee => {
                 // Remove the object that has an id equal to 2
                 return employee.id !== inn;
                 
               }))
              
         
        
          };

    
    return<>
    <div class="container text-center">
    <AppInput inputv ={input_val}/>
    <br></br>
    {content.length ==0 && <div>Make your schedule</div>}
    <AppOutput items ={content} del={ondelete}/>

    {/* <AppOutput work ="coding" date ="24/12/2024" /> */}
    {/* {array.map(item =><li>{item.no},{item.nos}</li>)} */}
   
     </div>
    </>

}
export default AppCombiner;