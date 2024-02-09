import type {RouteRecordRaw} from "vue-router";
import Profile from "@/features/admin/profile/views/Profile.vue";
import UserEdit from "@/features/admin/user/views/UserEdit.vue";
import ExperienceCreate from "@/features/admin/experiences/views/ExperienceCreate.vue";
import ExperienceUpdate from "@/features/admin/experiences/views/ExperienceUpdate.vue";
import ExperienceList from "@/features/admin/experiences/views/ExperienceList.vue";
import TechnoCreate from "@/features/admin/technos/views/TechnoCreate.vue";
import TechnoDetails from "@/features/admin/technos/views/TechnoDetails.vue";
import CvCreate from "@/features/admin/cv/views/CvCreate.vue";
import CvList from "@/features/admin/cv/views/CvList.vue";
import AdminTechnoList from "@/features/admin/technos/views/AdminTechnoList.vue";

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
    {path: '/admin/cv-list', name: 'admin-cv-list', meta: {isAdmin: true}, component: CvList},
    {path: '/admin/cv-create', name: 'admin-cv-create', meta: {isAdmin: true}, component: CvCreate}
]