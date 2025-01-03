import AppInput from "./AppInput";
import AppOutput from "./AppOutput";

function AppCombiner(){
    let array =[{work:'history',date:'24/12/2024'},
        {work:'geography', date:'25/12/2024'},{work:'Economics', date:'25/12/2024'}]

    
    return<>
    <div class="container text-center">
    <AppInput/>
    <br></br>
    <AppOutput items ={array}/>

    {/* <AppOutput work ="coding" date ="24/12/2024" /> */}
    {/* {array.map(item =><li>{item.no},{item.nos}</li>)} */}
   
     </div>
    </>

}
export default AppCombiner;