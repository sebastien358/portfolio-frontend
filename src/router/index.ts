import {createRouter, createWebHistory} from "vue-router";
import Experience from "@/features/portfolio/experiences/views/Experience.vue";
import Project from "@/features/portfolio/projects/views/Project.vue";
import ProjectDetails from "@/features/portfolio/projects/views/ProjectDetails.vue";
import Formation from "@/features/portfolio/formation/views/Formation.vue";
import Login from "@/components/login/views/Login.vue";
import NotFound from "@/components/notFound/views/NotFound.vue";
import Admin from "@/features/admin/Admin.vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {ADMIN_ROUTES} from "@/features/admin/router/admin.routes";
import RequestPassword from "@/components/resetPassword/views/requestPassword.vue";
import ResetPassword from "@/components/resetPassword/views/ResetPassword.vue";
import Techno from "@/features/portfolio/technos/views/Techno.vue";
import IllustrationSource from "@/components/illustrationSource/IllustrationSource.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/experience'},
        {path: '/experience', name: 'experience', component: Experience},
        {path: '/projects', name: 'projects', component: Project},
        {path: '/project-details/:id', name: 'project-details', component: ProjectDetails},
        {path: '/techno', name: 'techno', component: Techno},
        {path: '/studies', name: 'formation', component: Formation},
        {path: '/login', name: 'login', component: Login},
        {path: '/admin', name: 'admin', meta: {isAdmin: true}, component: Admin, children: ADMIN_ROUTES},
        {path: '/request-password', name: 'request-password', component: RequestPassword},
        {path: '/reset-password/:token', component: ResetPassword},
        {path: '/illustration-source', name: 'illustration-source', component: IllustrationSource},
        {path: '/:notFound(.*)*', component: NotFound}

    ]
})

// GOOD
router.beforeEach((to, from, next) => {
    const userAdminStore = useUserAdminStore()
    if (to.meta.isAdmin && !userAdminStore.isLogged()) next({ name: 'login' })
    else next()
})