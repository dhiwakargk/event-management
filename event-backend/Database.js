const mongoose=require('mongoose')
require("mongoose-type-url")
require('dotenv').config();
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
 mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.kanrtq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    console.log(" Event Data base connected successfully")
 }).catch(()=>{
     console.log("Data Base not connected")
 })
/* mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Event Data base connected successfully")
}).catch(()=>{
    console.log("Event Data base not connected")
}) */

const Event_table=new mongoose.Schema(
    {
        Event_Category:{
            type:String,
            required:true
        },
        Event_Organizer:{
            type:String,
            required:true
        },
        Domain:{
            type:String,
            required:true
        },
        Problem_Description:{
            type:String,
            required:true
        },
        Event_Image_Url: { type: String, required: true },

        Event_Start_Date:{
            type:Date,
            required:true
        },
        Event_End_Date:{
            type:Date,
            required:true
        },
        Max_Teams_Allowed:{
            type:Number,
            required:true
        }
    }

)

const Add_Event=new mongoose.model("Events",Event_table)


module.exports={Add_Event}