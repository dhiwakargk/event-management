import { createRouter, createWebHistory } from 'vue-router'
import first from "@/components/Firstpage.vue"
import  problem from "@/components/Problempage.vue"
import login from "@/components/Login.vue"
import contact from "@/components/Contact.vue"
import register from "@/components/Register.vue"
import eventregister from "@/components/EventRegister.vue"
import DisplayEvents from '@/components/DisplayEvents.vue'
import TeamCreate from '@/components/TeamCreate.vue'
import SignUp from '@/components/Signup.vue'
const routes=[
   {
      
    path: "/",
    redirect: "/login"
   },
   {
    path:'/first',
    name:'Firstpage',
    component:first
    
   },
   {
      path:'/problem/:id',
      name:'Problempage',
      component:problem
   },
   {
      path:'/login',
      name:'Login',
      component:login
   },
   {
      path:'/contact',
      name:'Contact',
      component:contact
   },
   {
      path:'/register',
      name:'Register',
      component:register
   },
   {
      path:'/eventregister',
      name:'EventRegister',
      component:eventregister
   },
   {
      path:'/display',
      name:'DisplayEvents',
      component:DisplayEvents
   },
   {
      path:'/team/:problemid',
      name:'TeamCreate',
      component:TeamCreate
   },
   {
      path:'/signup',
      name:'Signup',
      component:SignUp
   }

]
const router = createRouter({ history: createWebHistory(), routes })
export default router