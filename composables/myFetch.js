import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { nextTick } from 'vue';


export async function myFetch(request, opts = {}, headers = {}) {
  const config = useRuntimeConfig();
  const token = useCookie("token")
  
  const options = {
    baseURL: config.public.baseURL || "http://127.0.0.1:8000/api",
    headers: {
	    Authorization: `Bearer ${token.value}`,
      ...headers
    },
    ...(opts || {}),
  };

  let data, error

  try {
    data = await $fetch(request, options)
  }
  catch (e) {
    error = e
  }
  
  if(error) {
    const status = error?.response.status;
    const errorMessage = error?.response._data.message;
    if(status === 401) {
      toast('Sua sessão expirou..', {
        autoClose: 2000,
        theme: 'light',
        position: 'bottom-center',
        type: 'error'
      });
    } else {
      toast(errorMessage, {
        autoClose: 2000,
        theme: 'light',
        position: 'bottom-center',
        type: 'error'
      });
    }
  } else {
    if(data?.message) {
      myAlert(data?.message, 'success')
    }
    return data
  }

}

export async function onFetch(request, opts = {}, headers = {}) {
  
  await nextTick();
  
  return myFetch(request, opts, headers)
  
}