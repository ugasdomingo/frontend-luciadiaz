//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

//Define Stores
export const useBooksStore = defineStore('books', () => {
    const userStore = useUserStore();

    //Serve books data
    const allBooks = ref('');
    const oneBook = ref('');

    //Logics
    const createBook = async (formData: any) => {
        try {
            const res = await api({
                url: '/books',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });

            oneBook.value = res.data.arte;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getAllBooks = async () => {
        try {
            const res = await api({
                url: '/books/all',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            allBooks.value = res.data.books;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    const getBookByID = async (id: string) => {
        try {
            const res = await api({
                url: '/books/' + id,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            oneBook.value = res.data.book;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allBooks,
        oneBook,
        createBook,
        getAllBooks,
        getBookByID,
    };
});
