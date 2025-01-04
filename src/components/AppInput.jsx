import { useState } from "react";

function AppInput({inputv}){
let [item1, setitem1]= useState('');
let [item2, setitem2]= useState('');

let main=(i1,i2)=>{
    inputv(i1,i2);
    setitem1("");
    setitem2("");
}

return <><div class="row">
<div class="col-4"><input type='text' placeholder='Enter work' value={item1} onChange={(event)=>setitem1(event.target.value)}/></div>
<div class ="col-4"><input type='date' value={item2} onChange={(event)=>setitem2(event.target.value)}/></div>
<div class="col-2"><button class="btn btn-success" onClick={()=>main(item1,item2)} >Add</button></div>
 </div></>
}
export default AppInput;