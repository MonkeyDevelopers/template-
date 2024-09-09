import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { nextTick } from 'vue';


export async function myCteFetch(request, opts = {}, headers = {}) {
  const config = useRuntimeConfig();
  
  const options = {
    baseURL: config.public.webManiaUrl,
    headers: {
      Authorization: `Bearer ${config.public.webManiaToken}`,
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
  
  return data;
}

export async function onCteFetch(request, opts = {}, headers = {}) {
  
  await nextTick();
  
  return myCteFetch(request, opts, headers)
  
}