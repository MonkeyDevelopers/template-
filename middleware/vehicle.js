export default defineNuxtRouteMiddleware((to) => {
   
   const scope = useCookie('scope').value;
   
   if(!scope.includes("programacao") && !scope.includes("direcao")) {
      const router = useRouter()
      router.push('/')
   }
   
});