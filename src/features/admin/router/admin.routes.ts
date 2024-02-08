import type {RouteRecordRaw} from "vue-router";
import Profile from "@/features/admin/profile/views/Profile.vue";
import UserEdit from "@/features/admin/user/views/UserEdit.vue";
import ExperienceCreate from "@/features/admin/experiences/views/ExperienceCreate.vue";
import ExperienceUpdate from "@/features/admin/experiences/views/ExperienceUpdate.vue";
import ExperienceList from "@/features/admin/experiences/views/ExperienceList.vue";

export const ADMIN_ROUTES: RouteRecordRaw[] = [
    {path: '', redirect: '/admin/profile'},
    {path: '/admin/profile', name: 'admin-profile', meta: {isAdmin: true}, component: Profile},
    {path: '/admin/user/:id', name: 'admin-user-edit', meta: {isAdmin: true}, component: UserEdit},
    {path: '/admin/experience-list', name: 'admin-experience-list', meta: {isAdmin: true}, component: ExperienceList},
    {path: '/admin/experience-create', name: 'admin-experience-create', meta: {isAdmin: true}, component: ExperienceCreate},
    {path: '/admin/experience-update/:id', name: 'admin-experience-update', component: ExperienceUpdate}
]