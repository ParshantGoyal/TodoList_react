import SingleItem from "./SingleItem";

function AppOutput({items,del}){
return<>
<hr></hr>

{items.map(item =><SingleItem  singlei ={item} dele ={del}/>)}
 {/* <SingleItem work = {work} date ={date}/> */}
         </>

}
export default AppOutput;