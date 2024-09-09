import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export async function myToast(text, status) {
  
   toast(text, {
      autoClose: 600,
      theme: 'light',
      position: 'bottom-right',
      type: status
   });
   
}