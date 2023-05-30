import { useuUserStore } from '~/store/user'

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useuUserStore();

    if (store.user !== null) {
        return;
    }
    return navigateTo('/login');
})