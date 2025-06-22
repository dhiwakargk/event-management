<template>
    
    <div class="container mt-5">
        <div class="d-flex flex-column justify-content-center align-items-center ">
                <img :src="require('./clglogo.png')" alt="" style="height:100px;width:100px;">
        </div>
        <h2 class="mb-4" style="text-align: center;">TEAM CREATION FORM</h2>

        <form id="registrationForm" @submit.prevent="handleSubmit()">

            <div class="form-group  mt-3">
                <label for="team-name">Team Name:</label>
                <input type="text" class="form-control" v-model="Team_Name" required>
            </div>  
             
            <div class="form-group  mt-3">
                <label for="team-leader">Team Leader:</label>
                <input type="text" class="form-control" v-model="Team_Leader" required>
            </div>  

            <div class="form-group  mt-3">
                <label for="team-leader-email">Team Leader Email:</label>
                <input type="email" class="form-control" v-model="Team_Leader_Email" required>
            </div>  

            <div class="form-group  mt-3">
                <label for="team-leader-email">Registered_Category:</label>
                <input type="text" class="form-control" v-model="Registered_Category" required>
            </div> 
            
            <div class="form-group  mt-3">
                <label for="team-leader-email">Registered_Domain:</label>
                <input type="text" class="form-control" v-model="Registered_Domain" required>
            </div> 
            
            <div class="form-group  mt-3">
                <label for="team-members-count">Team Members count:</label>
                <input type="number" class="form-control" v-model="Team_Members_count" v-on:input="TeamAdd" max="5" min="1" required>
            </div>  
            
            <div class="form-group team_members">
                       
            </div>
          <br>
          <button class="btn btn-success">submit</button>
        </form>

    </div>

</template>
<script>
import axios from 'axios';
import { onMounted } from 'vue';
import { computed } from 'vue';

export default {
    name:'TeamCreate',
    mounted()
    { 
        console.log("inside mount")
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
    data()
    {
        
        console.log("Team creation page")
        console.log(this.$route.params.problemid)
        return{
           Team_Name:'',
           Team_Leader:'',
           Team_Leader_Email:'',
           Registered_Category:'',
           Registered_Domain:'',
           Team_Members_count:0,
           Team_Members_Name:[],
           Team_Members_Email:[]
        }
    },
    methods:{
        handleSubmit()
        {
            const mem_names=document.querySelectorAll(".names")
            mem_names.forEach((names)=>{
                this.Team_Members_Name.push(names.value)
            })
            const mem_email=document.querySelectorAll(".emails")
            mem_email.forEach((emails)=>{
                this.Team_Members_Email.push(emails.value)
            })
            //console.log(this.Team_Members_Name)
            //console.log(this.Team_Members_Email)
            if(this.Team_Name!='' && this.Team_Leader!='' && this.Team_Leader_Email!='' && this.Team_Members_count>0 && this.Team_Members_Name.length>0 && this.Team_Members_Email.length>0)
            {
                this.SendToBackend()
            }
            else
            {
                alert("All data must be filled")
            }
            
        },
        TeamAdd()
        {
            
        
            const Team_Mem=document.querySelector(".team_members")
            Team_Mem.innerHTML=''
            console.log("inside Team members add")
            for(let i=0;i<this.Team_Members_count;i++)
            {
                Team_Mem.innerHTML+=`
                   <div class="form-group  mt-3">
                     <label for="team-member-${i+1}">${i+1} st Team Member Name:</label>
                     <input type="text" class="form-control names" required>
                </div>  
                <div class="form-group  mt-3">
                    <label for="team-member-email-${i+1}">${i+1} st Team Member Email:</label>
                    <input type="text" class="form-control emails" required>
               </div>  
                `
            }
            
        },
        SendToBackend()
        {
          const sendTeam=axios.post("http://localhost:3000/team",
          {
              team_name:this.Team_Name,
              team_leader:this.Team_Leader,
              team_leader_email:this.Team_Leader_Email,
              registered_category:this.Registered_Category,
              registered_domain:this.Registered_Domain,
              team_members_name:this.Team_Members_Name,
              team_members_email:this.Team_Members_Email,
              problemid:this.$route.params.problemid
          }
          )
          sendTeam.then((res)=>{
            if(res.data=="Team Data Added")
             {
                alert("Team Details Added Successfully")
                console.log(res.data)
             }
             else
             {
                alert("Some error occured during add Team Details")
             }
          })
        }
        
        

    }
}
</script>