import {createRouter, createWebHistory} from "vue-router";
import Cv from "@/features/portfolio/cv/cv/views/Cv.vue";
import Experience from "@/features/portfolio/home/views/Experience.vue";
import Studies from "@/features/portfolio/studies/views/Formation.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/experience'},
        {path: '/experience', name: 'experience', component: Experience},
        {path: '/cv', name: 'cv', component: Cv},
        {path: '/formation', name: 'formation', component: Studies}
    ]
})