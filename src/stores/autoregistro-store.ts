//Import tools
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';
import { useQuasar } from 'quasar';

export const useAutoregisterStore = defineStore('registro', () => {
  const userStore = useUserStore();

  const registros = ref('');
  const allRegister = ref('');
  const $q = useQuasar();

  const getAllAutoregistro = async () => {
    try {
      const res = await api({
        url: '/self-register/register',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + userStore.token,
        },
      });
      allRegister.value = res.data.arte;
    } catch (error: any) {
      throw error.response?.data || error;
    }
  };

  const createAutoregistro = async (
    pensamiento: any,
    emocion: any,
    accion: any,
    detonante: any
  ) => {
    try {
      const res = await api({
        url: '/self-register/register',
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + userStore.token,
        },
        data: {
          pensamiento,
          emocion,
          accion,
          detonante,
        },
      });

      registros.value = res.data.register;
      console.log(registros.value);
    } catch (error: any) {
      throw error.response?.data || error;
    }
  };

  return { createAutoregistro, allRegister, getAllAutoregistro };
});
