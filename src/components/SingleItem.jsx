function SingleItem({singlei}){

return(<>
<div class="row">
        <div class="col-4">{singlei.work}</div>
        <div class ="col-4">{singlei.date}</div>
        <div class="col-2"><button class="btn btn-primary">Delete</button></div>
         </div>
         <br></br>



</>)

}
export default SingleItem;