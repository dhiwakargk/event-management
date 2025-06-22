<template>
   <div class=" d-flex justify-content-center  align-content-center justify-items-center">
     <div className="wrapper">
            <div className="logo-container d-flex justify-content-center">
                 <img :src="require('./clglogo.png')" alt="" srcset="">
            </div>
            <form @submit.prevent="handleSubmit" >
                <h1>Sign-Up</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email id" v-model="email" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" v-model="password" required />
                    <FaLock className="icon" />
                </div>
                <button type="submit">Sign-Up</button>
            </form>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
 export default{
    name:'signup',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        handleSubmit()
        {
            console.log("Inside submit function")
            const user_data=axios.post("http://localhost:3000/create_user",{
               email:this.email,
               password:this.password
            }).then((res)=>{
                console.log(res)
                if(res.data=="New User Created")
                {
                    alert("New User Created...")
                    sessionStorage.setItem("user",JSON.stringify({email:this.email,logged:true,admin:res.data.admin}))
                    window.location.href="/first"
                }
                else 
                {
                    alert("User Already Exists...")
                }
            })
        }
    }
 }
</script>
<style scoped>
.wrapper {
    width: 420px;
    background-color: #fff; 
    border: 2px solid #ddd; 
    box-shadow: 0 0 10px rgba(0,0,0,.1); 
    color: #333; 
    padding: 20px;
    border-radius: 8px;
    position: relative;
    margin: 0 auto; 
    margin-top: 120px; 
}

.logo-container img {
    width: 150px; 
    height: auto; 
}

.wrapper h1 {
    font-size: 36px;
    text-align: center;
    color: #333; 
}

.wrapper .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
}

.input-box input {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9; 
    border: none;
    outline: none;
    border: 2px solid #ddd; 
    border-radius: 40px;
    font-size: 16px;
    padding: 0 45px 0 20px;
    color: #333;
}

.input-box input::placeholder {
    color: #888; 
}

.input-box .icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #888; 
}

.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
    color: #555; 
}

.remember-forgot a {
    color: #007BFF; 
    text-decoration: none;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.wrapper button {
    width: 100%;
    height: 45px;
    background-color: #007BFF; 
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0,0,0, .2);
    cursor: pointer;
    font-size: 16px;
    color: #fff; 
    font-weight: 700;
}

.wrapper .register-link {
    font-size: 14.5px;
    text-align: center;
    margin-top: 20px 0 15px;
    color: #555; 
}

.register-link p a {
    color: #007BFF; 
    text-decoration: none;
    font-weight: 600;
}

.register-link p a:hover {
    text-decoration: underline;
}


</style>