import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
    }
}

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
});

export default boot(({ app }) => {
    app.config.globalProperties.$axios = axios;

    app.config.globalProperties.$api = api;
});

export { api };
