<template>
    
  <div class="container mt-5">
        <div class="d-flex flex-column justify-content-center align-items-center ">
                <img :src="require('./clglogo.png')" alt="" style="height:100px;width:100px;">
        </div>
        <h2 class="mb-4" style="text-align: center;">Registration Form</h2>
        <form id="registrationForm">
            <div class="form-group mt-3">
                <label for="teamLeaderName">Team Leader Name</label>
                <input type="text" class="form-control" id="teamLeaderName" placeholder="Enter team leader name" required>
            </div>
            <div class="form-group  mt-3">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" required>
            </div>
            <div class="form-group  mt-3">
                <label for="phone">Phone Number</label>
                <input type="tel" class="form-control" id="phone" placeholder="Enter phone number" required>
            </div>
            <div class="form-group  mt-3">
                <label for="teamMembers">Number of Team Members</label>
                <select class="form-control" id="teamMembers" required>
                    <option value="" disabled selected>Select number of members</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            
           
            <div id="teamMemberFields" class="team-member-fields">
               
            </div>
            
            <div class="form-group  mt-3">
                <label for="problemStatement">Select Problem Statement</label>
                <select class="form-control" id="problemStatement" required>
                    <option value="" disabled selected>Select a problem statement</option>
                    <option value="webDevelopment">Web Development</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="arvr">AR/VR</option>
                    <option value="mlDl">ML/DL</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary  mt-3">Register</button>
        </form>
    </div>

<router-view/>
</template>

<script>




export default {
    name:'register',
    mounted()
    { 
        console.log("inside register mount")
        let session=JSON.parse(sessionStorage.getItem("user"))
        console.log(session)
        if(session==null)
        {
             this.$router.push("/login")
        }
        else if(session.logged==true)
        {
            
        }
    },
}
</script>

<style scoped>
   .register{
      height: 100vh;
      width:500px !important;
   }
  
   .container{
      border: 3px dotted black !important;
      padding:  30px;
      border-radius: 20px;
      max-width:600px !important;
     
      box-shadow: 15px 15px  25px grey;
   }
</style>