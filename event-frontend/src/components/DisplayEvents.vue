<template>
    <center>
        <h2>Display events</h2>
    </center>
    <div class="container">
    <div class="row">
        <div v-for="data in details" :key="data._id" class="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch">
            <div class="card" style="width: 100%;">
                <img class="card-img-top" :src="data.Event_Image_Url" alt="Card image cap" height="300px" width="300px">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{data.Domain}}</h5>
                    <p class="card-text" style="flex-grow: 1; overflow:hidden; text-align: justify;">
                        {{data.Problem_Description}}
                    </p>
                    <a href="#" class="btn btn-primary mt-auto" v-on:click="GetId(data._id)" style="align-self: center;">
                        Register
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import axios from 'axios';

// <h4 v-on:click="GetId(data._id)">{{ data._id }}</h4>
//          <div class="alldata">
//             <p>Category:{{data.Event_Category}}</p>
//             <p>Organizer:{{data.Event_Organizer}}</p>
//             <p>Domain:{{data.Domain}}</p>
//             <p>Description:{{data.Problem_Description}}</p>
//              <img :src="data.Event_Image_Url" alt="" height="100px" width="150px">
//              <p>{{ data.Event_Image_Url }}</p>
//             <p>StartDate:{{data.Event_Start_Date}}</p>
//             <p>EndDate:{{data.Event_End_Date}}</p>
//             <p>Teams Allowed:{{data.Max_Teams_Allowed}}</p>
//          </div>


export default {
    name:'DisplayEvents',
    data()
    {
        this.GetData();
        return{
            details:null
        }
    },
    methods:{
          async GetData()
           {
              await axios.get("http://localhost:3000/").then(async(response)=>{
                  this.details=response.data
              })
              console.log(await this.details[0])
           },
           GetId(ids)
           {
              console.log("clicked id:"+ids)
              window.location.href=`http://localhost:8080/team/${ids}`
           }
    }
}
</script>