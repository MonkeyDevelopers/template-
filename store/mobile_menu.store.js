export const useMobileMenu = defineStore('mobile_menu', {
   
   state() {
      return {
         mobileMenu: false
      }
   },
   
   actions: {
      changeMobileMenu() {
         this.mobileMenu = !this.mobileMenu;
      }
   }
   
});