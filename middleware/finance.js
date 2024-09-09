export default defineNuxtRouteMiddleware((to) => {
   
   const scope = useCookie('scope').value;
   
   if(!scope.includes("direcao") && !scope.includes("financeiro")) {
      const router = useRouter();
      router.push('/');
   }

});