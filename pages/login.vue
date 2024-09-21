<template>
  <main>
    <div class="container">
      <!-- <img src="/logo.png" alt="" /> -->
      <h2>Bem-vindo de volta!</h2>
      <form class="form">
        <div class="logins">
          <UIButton
            class="btn"
            color="black"
            @click="
              auth.signInWithOAuth({
                provider: 'github',
                options: { redirectTo },
              })
            "
          >
            <Icon name="ph:github-logo" />
            GitHub
          </UIButton>
          <UIButton
            color="info"
            class="btn"
            @click="
              auth.signInWithOAuth({
                provider: 'facebook',
                options: { redirectTo },
              })
            "
          >
            <Icon name="ph:facebook-logo" />
            Facebook
          </UIButton>
        </div>
        <div class="inputs">
          <UIInput
            label="Usuário"
            v-model="data.email"
            placeholder="scooby.doo@test.com"
          />
          <UIInput
            label="Senha"
            placeholder="*********"
            type="password"
            v-model="data.password"
          />
        </div>
        <UIButton color="primary" @click="loginwithEmail()"
          >Fazer Login</UIButton
        >
      </form>
    </div>
  </main>
</template>

<script setup>
const data = ref({
  email: "",
  password: "",
});

const loginwithEmail = async () => {
  const { user, session, error } = await auth.signInWithPassword({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: redirectTo,
    },
  });
  useRouter().push("/");
};

useHead({
  title: "Login - Admin",
});

const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const redirectTo = `http://localhost:3000/confirm`;
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

.inputs {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
}
svg {
  font-size: 20px;
  color: white;
}

.logins {
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
