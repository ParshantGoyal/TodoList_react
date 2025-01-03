import SingleItem from "./SingleItem";

function AppOutput({items}){
return<>
<hr></hr>

{items.map(item =><SingleItem singlei ={item}/>)}
 {/* <SingleItem work = {work} date ={date}/> */}
         </>

}
export default AppOutput;