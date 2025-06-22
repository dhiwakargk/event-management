const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express();
const DB=require("./DB_operation")
const TeamDB=require("./TeamDB")
const Login=require("./login")
app.use(cors({
  origin: 'https://event-management-frontend-rld6.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.options('*', cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('dotenv').config();
const port = process.env.PORT || 3000;
app.get("/",async(req,res)=>{
    let result;
    result=await DB.RetriveAll()
    console.log(result)
    res.send(result)
})

app.post("/data",(req,res)=>{
    
   const result=DB.Adding(req.body.category,req.body.domain,req.body.description,req.body.imageurl,req.body.startdate,req.body.enddate,req.body.teamsize)
   res.send(result)
})
app.post("/create_user",async(req,res)=>{
    console.log("create_user"+" "+req.body)
    const create_user=await Login.Create_User(req.body.email,req.body.password)
   console.log(create_user)
    if(create_user=="New User Created")
    {
        res.send("New User Created").status(200)
    }
   
    res.send("New User not Created")

})
app.post("/login",async(req,res)=>{
    console.log("login"+" "+req.body)
    const login=await Login.Login_User(req.body.email,req.body.password)
    console.log(login[1])
    if(await login[0]=="User Logged in Successfully")
    {
        res.json({logged:"User Logged in!!!",admin:login[1]})
        
    }
    else
    {
    res.send("Invalid Crendentials")
    }
})
app.post("/team",async(req,res)=>{
    console.log(req.body)
    const teams=await TeamDB.Adds(req.body.team_name,req.body.team_leader,req.body.team_leader_email,req.body.team_members_name,req.body.team_members_email,req.body.problemid,req.body.registered_category,req.body.registered_domain)
    if(await teams=="Team Data Added")
    {
        res.send("Team Data Added").status(200)
        console.log("inside if")
    }
    else
    {
        res.send("Team Details Not Added").status(400)
        console.log("inside else")
    }
})

app.get("/alldata",(req,res)=>{

})

app.listen(port,()=>{
    console.log("server connected")
})