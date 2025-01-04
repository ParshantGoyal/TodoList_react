function SingleItem({singlei,dele}){

return(<>
<div class="row" key={singlei.id}>
        <div class="col-4">{singlei.work}</div>
        <div class ="col-4">{singlei.date}</div>
        <div class="col-2"><button class="btn btn-primary" onClick={()=>dele(singlei.id)}>Delete</button></div>
         </div>
         <br></br>



</>)

}
export default SingleItem;