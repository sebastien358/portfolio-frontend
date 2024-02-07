import type {RouteRecordRaw} from "vue-router";
import Profile from "@/features/admin/profile/views/Profile.vue";
import UserEdit from "@/features/admin/user/views/UserEdit.vue";

export const ADMIN_ROUTES: RouteRecordRaw[] = [
    {path: '', redirect: '/admin/profile'},
    {path: '/admin/profile', name: 'admin-profile', meta: {isAdmin: true}, component: Profile},
    {path: '/admin/user/:id', name: 'admin-user-edit', meta: {isAdmin: true}, component: UserEdit}
]