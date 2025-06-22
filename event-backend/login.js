const mongoose=require('mongoose')
// mongoose.connect("mongodb://localhost:27017").then(()=>{
//     console.log("Login Data base connected successfully")
// }).catch(()=>{
//     console.log("Login Data base not connected")
// })

const Login=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false,
        required:false
    }
})
const Login_DB=new mongoose.model("login",Login)

const Create_User=async(email,password)=>{
 let user="New User Created"
 try
 {
    const get_user = await Login_DB.findOne({ email: email }); 

    if (get_user) {
      console.log("User already exists:", get_user);
      return "New user not Created";
    } else {
      const add = new Login_DB({ email: email, password: password });
      await add.save();
      console.log("New user added...");
      return "New User Created";
    }
  }
 catch(error)
 { 
    return "New user not Created"
 }
}

const Login_User=async(email,password)=>{
    try{
        let get_user=await Login_DB.findOne({email:email,password:password})
        console.log(get_user)
        if(get_user && get_user.email === email && get_user.password === password)
        {
            console.log("inside get user")
            return ["User Logged in Successfully",get_user.admin]
        }
        else 
        {
            return "User crendentials are wrong"
        }
    
    }
    catch(error)
    {
         return "User crendentials are wrong"
    }
    
}

module.exports={Create_User,Login_User}