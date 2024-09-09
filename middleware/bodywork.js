export default defineNuxtRouteMiddleware((to) => {
   
   const scope = useCookie('scope').value;
   
   if(!scope.includes("direcao") && !scope.includes("v_carrocerias")) {
      const router = useRouter()
      router.push('/')
   }
   
});