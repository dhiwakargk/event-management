<template>
    
    
    
    <div class="container mt-5">
        <div class="d-flex flex-column justify-content-center align-items-center ">
                <img :src="require('./clglogo.png')" alt="" style="height:100px;width:100px;">
        </div>
        <h2 class="mb-4" style="text-align: center;">EVENT CREATION FORM</h2>
        <form id="registrationForm" @submit.prevent="handleSubmit()">
            
            <div class="form-group  mt-3">
                <label for="event_category">Event Category</label>
                <select class="form-control" id="event_category" required v-on:change="DomainUpload" v-model="category">
                    <option value=""></option>
                    <option value="software">SOFTWARE</option>
                    <option value="hardware">HARDWARE</option>
                </select>
            </div>
            <div class="form-group  mt-3">
                <label for="domain">Domain</label>
                <select name="" id="domains" class="form-control" required v-model="domain">
                     <option value="" ></option>
                </select>
            </div>
            <div class="form-group  mt-3">
                <label for="problem-description">Problem Description</label>
                <textarea name="" id="description" class="form-control" v-model="description"></textarea>
            </div>  
            <div class="form-group  mt-3">
                <label for="">Upload Event Image URL</label>
                <input type="url" class="form-control" required v-model="imgsrc">
            </div>
            <div class="form-group  mt-3">
                <label for="start date">Start Date</label>
                <input type="date" class="form-control" required v-model="startDate">
            </div>
            <div class="form-group  mt-3">
                <label for="end date">End Date</label>
                <input type="date" class="form-control" required v-model="endDate">
            </div>
            <div class="form-group  mt-3">
                <label for="teams">Maximum Teams</label>
                <input type="number" class="form-control" required min="1" v-model="teamsize">
            </div>
            <button type="submit" class="btn btn-primary  mt-3">Create Event</button>
        </form>
    </div>
    

</template>
<script>
import axios from 'axios'
export default {
    name:'EventRegister',
    mounted()
    {
        console.log("inside event register page mount")
        let session=JSON.parse(sessionStorage.getItem("user"))
        console.log(session)
        if(session==null)
        {
             this.$router.push("/login")
        }
        else if(session.logged==true)
        {
            if(session.admin==false)
            {
                 alert("You are not admin")
                 this.$router.push("/first")
            }
        }

    },
    data()
    {
        return{
            category:'',
            domain:'',
            imgsrc:'',
            description:'',
            startDate:'',
            endDate:'',
            teamsize:''

        }
        
    },
    methods:{
       handleSubmit()
        {
        
              this.DataToBackend()   
          
        },
        DomainUpload()
        {
              const selected= document.querySelector("#event_category")
              const domain=document.querySelector("#domains")
              domain.innerHTML=''
              if(selected.value=="software")
              {
                let software_domain=["AI/ML","AR/VR","BLOCKCHAIN","DEEP LEARNING","FULLSTACK DEVELOPEMNT"]
                let options
                options=document.createElement("option")
                options.value=""
                options.innerHTML=""
                domain.append(options)
                for(var i=0;i<software_domain.length;i++)
                {
                    options=document.createElement("option")
                   options.value=software_domain[i]
                   options.innerHTML=software_domain[i];
                   domain.append(options)
                }
                //console.log(domain.options.length)
              }
              if(selected.value=="hardware")
              {
                let hardware_domain=["CAD MODEL","AUTOMATIC ROBO","MONKEY CLIMBLING"]
                let options
                options=document.createElement("option")
                options.value=""
                options.innerHTML=""
                domain.append(options)
                for(var i=0;i<hardware_domain.length;i++)
                {
                    options=document.createElement("option")
                   options.value=hardware_domain[i]
                   options.innerHTML=hardware_domain[i];
                   domain.append(options)
                }

              }
        },
        async DataToBackend()
        {
           if(this.category!='' && this.domain!='' && this.imgsrc!='' && this.description!='' && this.startDate!='' && this.endDate!='' && this.teamsize!='')
           {
              const datasender=axios.post("http://localhost:3000/data",{
                category:this.category,
                domain:this.domain,
                description:this.description,
                imageurl:this.imgsrc,
                startdate:this.startDate,
                enddate:this.endDate,
                teamsize:this.teamsize
              })
             await datasender.then(async(res)=>{
                if(res.status==200)
                {
                    alert("Data sended to backend successfully")
                    
                }
             })
           }
           else
           {
            alert("Not All Details are filled..")
           }
             
        }
        

            
        

    }
}
</script>
<style scoped>
  .container{
      /* border: 1px solid black !important; */
      background-color: whitesmoke;
      padding:  30px;
      border-radius: 20px;
      max-width:600px !important;
     
      box-shadow: 15px 15px  25px grey;
   }
</style>