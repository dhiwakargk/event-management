const db=require("./Database")

const Adding=async(category,domain,description,imageurl,startdate,enddate,teamsize)=>{
    const adds=new db.Add_Event({Event_Category:category.toLowerCase(),Event_Organizer:"BIT",Domain:domain.toLowerCase(),Problem_Description:description.toLowerCase(),
        Event_Image_Url:imageurl,Event_Start_Date:new Date(startdate),Event_End_Date: new Date(enddate),Max_Teams_Allowed:teamsize
    })
    await adds.save().then(()=>{
        console.log("Event Added to DB successfully")
        return "Data Added"
    })
}

const RetriveAll=async()=>{
      let data;
     await  db.Add_Event.find({}).then(async(res)=>{
        data=res
     })
     return data
}

module.exports={Adding,RetriveAll}