import { useRoute } from 'vue-router'

import { useStorage } from '@vueuse/core'

export const useAuth = defineStore('useAuth', {

   state() {
      return {
         token: useCookie("token").value,
      }
   },

   actions: {
      async authenticateUser({username, password, type}) {
         const config = useRuntimeConfig();       
         
         let data, error

         try {
            data = await $fetch(config.public.baseURL + '/v1/login', {
               method: 'POST',
               body: {
                  username: username,
                  password: password,
               }
            });
         }
         catch (e) {
            error = e
         }
         
         if(error) {
            myAlert('Credenciais incorretas..!', 'error')
         } else {
            myAlert('Login efetuado com sucesso!!', 'success')
            setTimeout(() => {
               
               const token = useCookie("token");
               token.value = data.access_token;
               
               const scope = useCookie('scope');
               scope.value = data.user.scope
               
               const new_truckage = useCookie('new_truckage');
               new_truckage.value = false;
               
               const new_finance = useCookie('new_finance');
               new_finance.value = false;
               
               const new_cte = useCookie('new_cte');
               new_cte.value = false;
               
               const new_intervention = useCookie('new_intervention');
               new_intervention.value = false;
               
               const router = useRouter();
               router.push('/');
            }, 1400);
         }
         
      },
      userLogout() {
         myAlert('Logout efetuado com sucesso!!', 'success');
         setTimeout(() => {
            
            const token = useCookie("token");
            token.value = null;

            const scope = useCookie('scope');
            scope.value = null;
            
            const new_truckage = useCookie('new_truckage');
            new_truckage.value = null;
            
            const router = useRouter();
            router.push('/login');
            
         }, 1400);         
      },
      verifyRole(role) {
         const scope = useCookie('scope').value;
         return scope.includes(role);
      }
   },

})

