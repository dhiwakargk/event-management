<template>
    
  <div class="  centered-container d-flex justify-content-center  align-item-center justify-items-center h-100">

   <div class="card p-5">
    

  <div class="card-body">
    <h5 class="d-flex justify-content-center align-items-center">
        Problem id:
        {{id.problemid}}
        </h5>

        <div class="d-flex justify-content-center align-items-center pt-4">
            <img  class="img-fluid" :src="require(`./${id.source}`)" alt="Card image cap" style="height:200px; width:500px">
        </div>

    <h5 class="d-flex justify-content-center align-items-center p-5" >
         Problem Statement
        </h5>
    <p class="card-text" style="text-align:justify">
        {{id.objective}}
    </p>
    <div class="d-flex justify-content-center align-items-center" >
      
      <!-- <button type="button" class="btn btn-info m-5" @click="register">Register</button>
       <button type="button" class="btn btn-danger" @click="enquiry">Enquiry</button> -->
   </div>

  </div>
   
   
</div>


  </div>

</template>

<script>
export default {
    name:'problem',
    data()
    {
        return{
           items:[
            {
                problemid:1,
                source:"block.jpg",
                objective:"This blockchain project addresses one of the most pressing issues in supply chain management—product authenticity and traceability. With the ability to track products from their origin to the end consumer, this system ensures that consumers receive genuine, unaltered goods. Counterfeiting, a significant concern in various industries, is mitigated through immutable blockchain records. It's not just about tracking; it's about guaranteeing the authenticity of every step in the supply chain. This creates trust, fosters better consumer protection, and enables businesses to uphold their reputation by offering authentic products."
            },
            {
                problemid:2,
                source:"bl2.jpg",
                objective:"Charitable giving is an essential part of our society, and ensuring that contributions reach the intended beneficiaries is crucial. This blockchain application transforms the charity landscape. It provides a platform for secure, quick, and transparent transactions, so donors can witness the immediate impact of their donations. For beneficiaries, the assurance of receiving the support they need is invaluable. Trust is built through transparency, ensuring that every dollar donated makes a genuine difference in the lives of those in need."
            },
            {
                problemid:3,
                source:"bl3.jpg",
                objective:"Education and qualifications are the foundation of countless careers. Yet, the credibility of academic credentials has, at times, been called into question. This blockchain project addresses this challenge by establishing a system where academic credentials can be issued and verified securely and transparently. Institutions can issue these credentials in an immutable format, ensuring they remain unaltered and accurate. This system is a game-changer for students and employers who can rely on the authenticity of educational qualifications without a shadow of doubt."
            },
            {
                problemid:4,
                source:"wb1.jpg",
                objective:"The primary objective of the Event Ticket Reselling Project is to create an online platform that allows individuals to buy and sell event tickets in a secure and convenient manner."
            },
            {
                problemid:5,
                source:"wb2.jpg",
                objective: "Social Platform for Pet Owners project seeks to address the needs and desires of a growing community of pet owners by creating a specialized online platform. By focusing on community-building, content sharing, resources, and a secure environment, this project aims to provide a valuable and engaging experience for pet enthusiasts."
            },
            {
                problemid:6,
                source:"wb3.jpg",
                objective:"The Digital Wallet for Cryptocurrencies project addresses the growing demand for a secure, user-friendly web-based wallet. It aims to provide multi-currency support, privacy protection, real-time market data, and regulatory compliance, empowering users to manage and transact with their digital assets effectively"
            },
            {
                problemid:7,
                source:"al.jpeg",
                objective:"An augmented reality interactive book enhances traditional reading by overlaying digital content, animations, and interactive elements on printed pages, providing an immersive and engaging reading experience."
            },
            {
                problemid:8,
                source:"a2.png",
                objective:"An AR city guide app utilizes real-time location data to overlay information about nearby points of interest, historical facts, and navigation cues onto a live view of the city, enhancing the travel and exploration experience."
            },
            {
                problemid:9,
                source:"a3.png",
                objective:"Augmented reality interior design apps allow users to visualize and experiment with furniture, décor, and color schemes in their physical space, aiding in the planning and decision-making for home improvement projects"
            },
            {
                problemid:11,
                source:"c1.png",
                objective:"The College Students Community App is a dynamic platform designed to foster collaboration, knowledge sharing, and community engagement within the college campus. This comprehensive app empowers students to connect, share notes, create blogs, organize events, and stay updated on campus activities, creating a vibrant and inclusive learning environment."
            },
             {
                problemid:12,
                source:"c2.jpeg",
                objective:" The Travel Planner is a comprehensive platform designed to simplify the process of organizing and managing travel experiences. This user-friendly application empowers travelers to efficiently plan their trips, discover new destinations, book accommodations, create itineraries, and access valuable travel resources, ensuring a seamless and memorable travel experience."
            },
             {
                problemid:13,
                source:"c3.jpg",
                objective:"BIT Rapido is an innovative campus battery vehicle booking system designed to provide convenient and eco-friendly transportation options for students within the institution's premises. This platform enables registered students to book battery vehicles for their commutes, ensuring a seamless and sustainable mode of transport."
            },
            {
                problemid:14,
                source:"ml1.jpg",
                objective:" In the Predict Taxi Fares project, you will be predicting the location and time to earn the biggest fare using the New York taxi dataset. You use tidyverse for data processing and visualization. To predict location and time, you will experiment with a tree base model such as Decision Tree and Random Forest.The Predict Taxi Fare project is a guided project, but you can replicate the result on a different dataset, such as Seoul's Bike Sharing Demand. Working on a completely new dataset will help you with code debugging and improve your problem-solving skills"
            },
            {
                problemid:15,
                source:"ml2.jpg",
                objective:"In the project, you will be provided with store sales data, and you will clean the data, perform extensive time series analysis, feature scaling, and train the multivariate times series model. To improve your score on the leaderboard, you can use ensembling such as Bagging and Voting Regressors. Store Sales is a Kaggle-based project where you can look at other participants' notebooks"
            },
            {
                problemid:16,
                source:"ml3.jpg",
                objective:" In the Impact of Climate Change on Birds project, you will train the Logistic Regression model on bird sightings and climate data using caret. You will perform data cleaning and nesting, prepare data for spatial analytics, create pseudo-absences, train glmnet models, and visualize results of four decades on the map.The Impact of Climate Change on Birds is a guided intermediate machine learning project. You can replicate the result on a different dataset, such as the Airbnb Listings dataset. You can use caret to predict the price of the listings based on features and locations"
            },
           ],
            
        }
    },
   methods:{
    // enquiry()
    // {
    //       window.location.href='http://localhost:8080/contact'
    // },
    // register()
    // {
    //     window.location.href='http://localhost:8080/register'
    // }

   },
    computed:{
        id()
        {
            return this.items[(this.$route.params.id)-1]
        }
    }
}
</script>
<style scoped>
html,body{
    height: 100% !important;
}
.centered-container
{
    height: 100vh !important;
            display: flex  !important;
            justify-content: center !important;
            /* align-items: center !important; */
}

</style>