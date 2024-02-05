import {createRouter, createWebHistory} from "vue-router";
import Cv from "@/features/portfolio/cv/cv/views/Cv.vue";
import Experience from "@/features/portfolio/home/views/Experience.vue";
import Project from "@/features/portfolio/project/views/Project.vue";
import Formation from "@/features/portfolio/formation/views/Formation.vue";
import Login from "@/components/login/views/Login.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/experience'},
        {path: '/experience', name: 'experience', component: Experience},
        {path: '/project', name: 'project', component: Project},
        {path: '/cv', name: 'cv', component: Cv},
        {path: '/formation', name: 'formation', component: Formation},
        {path: '/login', name: 'login', component: Login},

    ]
})