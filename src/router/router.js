import {createRouter, createWebHistory} from "vue-router";

import CourseList from "@/components/CourseList"
import MainPage from "@/components/MainPage"
import LogIn from "@/components/Forms/LogIn"
import Registration from "@/components/Forms/Registration"
import PageError from "@/components/PageError"

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: "/courseList",
    component: CourseList
  },
  {
    path: "/login",
    component: LogIn
  },
  {
    path: "/registration",
    component: Registration
  },
  {
    path: "/page404",
    component: PageError
  }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;