<template>
   
   <div class="d-flex  flex-row mb-3 justify-content-around  align-items-center " style="height:70px">
    
    <div class="pt-2">
      <img :src="require('./clglogo.png')" alt="" class="img-thumbnail" height="7px" width="100px">
    </div>

    <div class="pt-2 d-none d-sm-block"><a href="/display" class="emails" style="font-size: 16px;">Register Events</a></div>
    <div class="pt-2 d-none d-sm-block"><a href="/eventregister" class="emails" style="font-size:16px;" @click="IsAdmin">Add Events</a></div>
    <div class="pt-2 d-none d-sm-block" style="cursor:pointer" @click="logout">Logout</div>
    <div class="pt-2 d-none d-sm-block"> <a href="mailto:bitsathy.ac.in" class="emails">Email</a></div>
    
    <div class="pt-2 d-flex d-sm-none justify-content-sm-end">
       <button  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
           <img :src="require('./burger-bar.png')" alt="" height="30px" width="30px" >
       </button>
       <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
     <div class="d-flex flex-column align-items-center">
        <div class="pt-5">
           <img :src="require('./clglogo.png')" alt="" class="img-thumbnail" height="7px" width="100px">
        </div>
        <div class="pt-5"><a href="/display" class="emails" style="font-size: 16px;">Register Events</a></div>
        <div class="pt-5"><a href="/eventregister" class="emails" style="font-size: 16px;">Add Events</a></div>
        <div class="pt-5" style="cursor:pointer" @click="logout"><a href="" class="emails" style="font-size: 16px;">Logout</a></div>
        <div class="pt-5"><a href="mailto:bitsathy.ac.in" class="emails">Email</a></div>
       
    </div>
  </div>
</div>
    </div>
       
   </div>

   <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="require('./block.jpg')" class="d-block w-100" alt="..." style="height:600px">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="require('./arvr.jpg')" class="d-block w-100" alt="..." style="height:600px">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="require('./aiml.jpg')" class="d-block w-100" alt="..." style="height:600px">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

 

     



    <div class="d-flex justify-content-center align-item-center p-5">
      <h4>DOMAINS</h4>
     </div>
     <div class="d-flex justify-content-center align-item-center p-2">
      <h4>SOFTWARE</h4>
     </div>

    <div class="d-flex justify-content-center align-item-center p-2">
           <h3>BLOCK CHAIN</h3>
     </div>

     <div class="d-flex justify-content-around flex-wrap  " >
            <div class="card m-5 items " style="width: 18rem;" @click="retrive(1)">
  <img :src="require('./block.jpg')" class="card-img-top" alt="..." style="height:200px">
  <div class="card-body" >
    <p class="card-text">Enhance product authenticity and traceability in supply chains. This blockchain system tracks products from origin to consumer, preventing counterfeiting and ensuring trust and transparency.</p>
  </div>
</div>
<div class="card m-5 items" style="width: 18rem;" @click="retrive(2)">
  <img :src="require('./bl2.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Revolutionize charitable donations with a blockchain platform for secure, transparent transactions. Donors can see the impact of their contributions in real time, while beneficiaries receive assured support</p>
  </div>
</div>
<div class="card  m-5 items" style="width: 18rem;" @click="retrive(3)">
  <img :src="require('./bl3.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Securely issue and verify academic credentials via blockchain. This system ensures the accuracy and immutability of qualifications, providing trust and reliability for students and employers</p>
  </div>
</div>
            
     </div>

     <div class="d-flex justify-content-center align-item-center p-2">
           <h3>WEB DEVELOPMENT</h3>
     </div>
      
     <div class="d-flex justify-content-around flex-wrap  " >
            <div class="card m-5 items" style="width: 18rem;" @click="retrive(4)">
  <img :src="require('./wb1.jpg')" class="card-img-top" alt="...">
  <div class="card-body" >
    <p class="card-text">Create a secure online platform for buying and selling event tickets. Ensure convenience and protection for users to facilitate smooth transactions and reliable access to events</p>
  </div>
</div>
<div class="card m-5 items" style="width: 18rem;" @click="retrive(5)">
  <img :src="require('./wb2.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"> Develop a specialized online community for pet owners to share, connect, and access resources. Focus on fostering engagement, providing valuable content, and maintaining a safe environment for pet enthusiasts.</p>
  </div>
</div>
<div class="card  m-5 items" style="width: 18rem;" @click="retrive(6)">
  <img :src="require('./wb3.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"> Provide a secure, user-friendly web wallet for managing and transacting with multiple cryptocurrencies. Include features like privacy protection, real-time market data, and adherence to regulatory standards to enhance user experience</p>
  </div>
</div>
            
     </div>




          <div class="d-flex justify-content-center align-item-center p-2">
           <h3>AR-VR</h3>
     </div>
      
     <div class="d-flex justify-content-around flex-wrap  " >
            <div class="card m-5 items" style="width: 18rem;" @click="retrive(7)">
  <img :src="require('./al.jpeg')" class="card-img-top" alt="...">
  <div class="card-body" >
    <p class="card-text"> Enhance traditional reading by overlaying digital content and interactive elements on printed pages for an immersive experience.</p>
  </div>
</div>
<div class="card m-5 items" style="width: 18rem;" @click="retrive(8)">
  <img :src="require('./a2.png')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Use real-time location data to overlay information and navigation cues on a live city view for improved travel and exploration.</p>
  </div>
</div>
<div class="card  m-5 items" style="width: 18rem;" @click="retrive(9)">
  <img :src="require('./a3.png')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Allow users to visualize and experiment with furniture and décor in their space for better home improvement decisions</p>
  </div>
</div>
            
     </div>

     <div class="d-flex justify-content-center align-item-center p-2">
           <h3>CLOUD</h3>
     </div>


        <div class="d-flex justify-content-around flex-wrap  " >
            <div class="card m-5 items" style="width: 18rem;" @click="retrive(10)">
  <img :src="require('./c1.png')" class="card-img-top" alt="...">
  <div class="card-body" >
    <p class="card-text">Foster campus collaboration by enabling students to connect, share notes, blog, organize events, and stay updated on activities.</p>
  </div>
</div>
<div class="card m-5 items" style="width: 18rem;" @click="retrive(11)">
  <img :src="require('./c2.jpeg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Simplify travel planning by allowing users to organize trips, discover destinations, book accommodations, and create itineraries.</p>
  </div>
</div>
<div class="card  m-5 items" style="width: 18rem;" @click="retrive(12)">
  <img :src="require('./c3.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Provide eco-friendly campus transportation by allowing students to book battery vehicles for convenient and sustainable commutes.</p>
  </div>
</div>
            
     </div>


     <div class="d-flex justify-content-center align-item-center p-2">
           <h3>ML DL</h3>
     </div>


     <div class="d-flex justify-content-around flex-wrap  " >
            <div class="card m-5 items" style="width: 18rem;" @click="retrive(14)">
  <img :src="require('./ml1.jpg')" class="card-img-top" alt="...">
  <div class="card-body" >
    <p class="card-text">Predict the best location and time for high taxi fares using a dataset and tree-based models like Decision Tree and Random Forest</p>
  </div>
</div>
<div class="card m-5 items" style="width: 18rem;" @click="retrive(15)">
  <img :src="require('./ml2.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Clean store sales data, perform time series analysis, and train a multivariate model, using techniques like Bagging and Voting Regressors for improved accuracy</p>
  </div>
</div>
<div class="card  m-5 items" style="width: 18rem;" @click="retrive(16)">
  <img :src="require('./ml3.jpg')" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Train a Logistic Regression model on bird sightings and climate data to analyze and visualize the impact of climate change over four decades.</p>
  </div>
</div>
            
     </div>

      


     



    <router-view/>
 
</template>

<script>
import ProblempageVue from './Problempage.vue'
export default {
    name:'first',
    mounted()
    {
      console.log("inside first page mount")
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
    components:{
      ProblempageVue
    },
    data(){

        return{
           selectedId: null
        }
    },
    methods:{
      retrive(id)
      {
         this.$router.push(`/problem/${id}`)

      },
      logout()
      {
        sessionStorage.removeItem("user");
        window.location.href="/login"
      },
      IsAdmin()
      {

      }
    }
}
</script>
<style scoped>
 
   .items{
    cursor:  pointer !important;
   }
   .emails{
    text-decoration: none;
    color: black;
    font-size: 20px;
   }
   .card-text{
    text-align: justify !important;
   }
</style>