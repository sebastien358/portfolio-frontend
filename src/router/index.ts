import {createRouter, createWebHistory} from "vue-router";
import Home from "@/features/portfolio/home/views/Home.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', name: 'home', component: Home}
    ]
})