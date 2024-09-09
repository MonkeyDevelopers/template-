export default defineNuxtRouteMiddleware((to) => {
   
   const scope = useCookie('scope').value;
   
   if(!scope.includes("direcao") && !scope.includes("v_rotas_preferenciais")) {
      const router = useRouter()
      router.push('/')
   }
   
});