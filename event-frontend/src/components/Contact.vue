<template>
     <div class="d-flex flex-column justify-content-center align-items-center">
        <h3>Enquiry Form</h3>
     </div>
      <form class="d-flex flex-column justify-content-center align-items-center forms pb-5">
        
        <div class="incls">
           <div class="d-flex flex-column justify-content-center align-items-center ">
                <img :src="require('./clglogo.png')" alt="" style="height:150px;width:200px;margin-top:-80px">
        </div>
       
      <div class="form-group pt-2">
         <label for="exampleFormControlInput1">Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
      </div>

       <div class="form-group pt-2">
         <label for="exampleFormControlInput2">Email</label>
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
      </div>

       <div class="form-group pt-2">
         <label for="exampleFormControlInput3">Phone</label>
         <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone">
      </div>

      <div class="form-group pt-2">
         <label for="exampleFormControlInput4">Event Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Event Name">
      </div>

      <div class="form-group pt-2">
         <label for="exampleFormControlInput5">Message</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Message">
      </div>
      
      <div class="d-flex flex-column justify-content-center align-items-center pt-4">
           <button type="submit" class="btn btn-primary">Submit</button> 
      </div>
       </div>
      </form>


</template>

<script>
export default {
    name:'contact'
}
</script>

<style scoped>
  .forms{
    height: 100vh !important;
   
  }
  .incls{
    height: 650px;
    box-shadow: 20px 20px 20px grey;
    padding: 100px;
  }
  .form-group{
    margin-top: 10px;
  }
  .form-control{
    padding-left: 100px;
  }
</style>