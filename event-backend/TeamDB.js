const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017").then(()=>{
//     console.log("Team Data base connected successfully")
// }).catch(()=>{
//     console.log(" Team Data Base not connected")
// })

const Teams=new mongoose.Schema({
   
    Team_Name:{
        type:String,
        required:true,
        unique:true
    },
    Team_Leader_Name:{
        type:String,
        required:true
    },
    Team_Leader_Email:{
        type:String,
        required:true,
        unique:true
    },
    Registered_Category:{
        type:String,
        required:true
    },
    Registered_Domain:{
        type:String,
        required:true
    },
    Team_Members:{
        type:[String]
    },
    Team_Members_Email:{
        type:[String]
    },
    Registered_Problem_Id:{
        type:mongoose.Schema.ObjectId,
        required:true
    }

})

const Team_Add=new mongoose.model("Teams",Teams)

const Adds=async(team_name,team_leader,team_leader_email,team_members_name,team_members_email,problemid,category,domain)=>{
    try{
     const add= await new Team_Add({Team_Name:team_name,Team_Leader_Name:team_leader,
        Team_Leader_Email:team_leader_email,
        Registered_Category:category,
        Registered_Domain:domain,
        Team_Members:team_members_name,
        Team_Members_Email:team_members_email,
        Registered_Problem_Id:problemid
     })
     await add.save()
     var id=add.Registered_Problem_Id
     console.log(id)
     console.log("Team Details addedd")
     return "Team Data Added"
    }
    catch(error)
    { 
         console.log("Team Data not Added")
         return "Team Data Not Added"
    }
}
module.exports={Team_Add,Adds}