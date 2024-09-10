<template>
   
   <main>
      <div class="container">
         <img src="/logo.png" alt="">
         <h2>Bem-vindo de volta!</h2>
         
         <form class="form">
            <span>Usuário</span>
            <input type="text" placeholder="Usuário" v-model="user.username">
            <span class="last_span">Senha</span>
            <input type="password" placeholder="Senha" v-model="user.password">
            <button>Fazer Login</button>
         </form>
      </div>
   </main>
   
</template>

<script setup>

   const user = ref({
      username: '',
      password: '',
   });
   
   useHead({
      title: 'Login - Admin'
   })

</script>


<style scoped>

   main {
      width: 100%;
      height: 100svh;
      background: url('/public/noise.svg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   .container {
      width: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #0e0e0e;
      border: 2px solid #171717;
      border-radius: 8px;
      padding: 20px;
      row-gap: 20px;
   }
   
   .container img {
      width: 30px;
   }
   
   .container h2 {
      font-size: 18px;
      font-weight: 500;
      color: #e0e0e0;
   }
   
   .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   
   .form span {
      font-size: 13px;
      font-weight: 400;
      color: #5d5d5d;
      margin-bottom: 3px;
   }
   
   .last_span {
      margin-top: 10px;
   }
   
   .form input {
      width: 100%;
      padding: 9px;
      font-size: 12px;
      border-radius: 4px;
      border: 1px solid #1e1e1e;
      background: #131313;
      transition: .3s;
      color: #cecece;
   }
   
   .form input:first-child {
      margin-top: 50px !important;
   }
   
   .form input:focus {
      border: 1px solid #282828;
      background: #191919;
   }
   
   .form input::placeholder {
      color: #5d5d5d;
   }
   
   .form button {
      width: 100%;
      padding: 9px;
      border-radius: 4px;
      margin-top: 25px;
      font-size: 13px;
      font-weight: 400;
      cursor: pointer;
      transition: .3s;
      background: #c51b1b;
      color: #ffffff;
   }
   
   .form button:hover {
      background: #971616;
   }

</style>