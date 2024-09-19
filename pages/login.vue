<template>
  <main>
    <div class="container">
      <!-- <img src="/logo.png" alt="" /> -->
      <h2>Bem-vindo de volta!</h2>

      <form class="form">
        <div>
          <UIInput label="Usuário" v-model="user.username" placeholder="scooby.doo@test.com" />
          <UIInput
            label="Senha"
            placeholder="*********"
            type="password"
            v-model="user.password"
          />
        </div>
        <UIButton color="primary">Fazer Login</UIButton>
      </form>
    </div>
  </main>
</template>

<script setup>
const user = ref({
  username: "",
  password: "",
});

useHead({
  title: "Login - Admin",
});
</script>

<style scoped>
main {
  width: 100%;
  height: 100svh;
  background: url("/public/noise.svg");
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

</style>
