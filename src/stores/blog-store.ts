//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

//Define Stores
export const useBlogsStore = defineStore('Blogs', () => {
    const userStore = useUserStore();

    //Serve Blogs data
    const allBlogs = ref('');
    const oneBlog = ref('');

    //Logics
    const createBlog = async (formData: any) => {
        try {
            const res = await api({
                url: '/blog',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });

            oneBlog.value = res.data.blog;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getAllBlogs = async (showPost: number) => {
        try {
            const res = await api({
                url: '/blog/all',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            if (showPost == 0) {
                allBlogs.value = res.data.posts;
            } else {
                //Get last 3 Posts
                const finalArray = res.data.posts.reverse();

                finalArray.length = showPost;

                allBlogs.value = finalArray;
            }
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getBlogByID = async (id: string) => {
        try {
            const res = await api({
                url: '/blog/' + id,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            oneBlog.value = res.data.blog;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const updateBlog = async (id: string) => {
        try {
            const res = await api({
                url: '/blog/' + id,
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const deleteBlog = async (id: string) => {
        try {
            const res = await api({
                url: '/blog/' + id,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allBlogs,
        oneBlog,
        createBlog,
        getAllBlogs,
        getBlogByID,
        updateBlog,
        deleteBlog,
    };
});
