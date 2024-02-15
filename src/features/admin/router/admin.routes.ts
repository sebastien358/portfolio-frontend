import type {RouteRecordRaw} from "vue-router";
import Profile from "@/features/admin/profile/views/Profile.vue";
import UserEdit from "@/features/admin/user/views/UserEdit.vue";
import ExperienceCreate from "@/features/admin/experiences/views/ExperienceCreate.vue";
import ExperienceUpdate from "@/features/admin/experiences/views/ExperienceUpdate.vue";
import ExperienceList from "@/features/admin/experiences/views/ExperienceList.vue";
import TechnoCreate from "@/features/admin/technos/views/TechnoCreate.vue";
import TechnoDetails from "@/features/admin/technos/views/TechnoDetails.vue";
import AdminTechnoList from "@/features/admin/technos/views/AdminTechnoList.vue";
import ProjectCreate from "@/features/admin/projects/views/ProjectCreate.vue";
import ProjectList from "@/features/admin/projects/views/ProjectList.vue";
import ProjectUpdate from "@/features/admin/projects/views/ProjectUpdate.vue";

export const ADMIN_ROUTES: RouteRecordRaw[] = [
    {path: '', redirect: '/admin/profile'},
    {path: '/admin/profile', name: 'admin-profile', meta: {isAdmin: true}, component: Profile},
    {path: '/admin/user/:id', name: 'admin-user-edit', meta: {isAdmin: true}, component: UserEdit},
    {path: '/admin/experience-list', name: 'admin-experience-list', meta: {isAdmin: true}, component: ExperienceList},
    {path: '/admin/experience-create', name: 'admin-experience-create', meta: {isAdmin: true}, component: ExperienceCreate},
    {path: '/admin/experience-update/:id', name: 'admin-experience-update', meta: {isAdmin: true}, component: ExperienceUpdate},
    {path: '/admin/techno-list', name: 'admin-techno-list', meta: {isAdmin: true}, component: AdminTechnoList},
    {path: '/admin/techno-create', name: 'admin-techno-create', meta: {isAdmin: true}, component: TechnoCreate},
    {path: '/admin/techno-details/:id', name: 'admin-techno-details', meta: {isAdmin: true}, component: TechnoDetails},
    {path: '/admin/project-create', name: 'admin-project-create', meta: {isAdmin: true}, component: ProjectCreate},
    {path: '/admin/project-list', name: 'admin-project-list', meta: {isAdmin: true}, component: ProjectList},
    {path: '/admin/project-update/:id', name: 'admin-project-update', meta: {isAdmin: true}, component: ProjectUpdate}
]