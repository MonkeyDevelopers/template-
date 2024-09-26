<template>
  <nuxt-layout name="admin" title="Tarefas" description="Tarefas">
    <UIForm @onSubmit="onSubmit" :validation-schema="schema">
      <UIInputPassword
        name="actualPassword"
        label="Senha Atual"
        placeholder="Include your password"
        v-model="password"
        position="left"
      />
      <br />
      <UIInputPassword
        name="newPassword"
        label="Senha"
        placeholder="Include your password"
        v-model="password"
        position="left"
      />
      <UIInputPassword
        name="repeatPassword"
        label="Novo Password"
        placeholder="Include your password"
        v-model="changePassword"
        position="left"
      />
      <KoButton color="secondary" type="submit"> Save </KoButton>
    </UIForm>
  </nuxt-layout>
</template>

<script setup>
import * as Yup from "yup";

const password = ref("");
const changePassword = ref("");

const schema = Yup.object().shape({
  actualPassword: Yup.string().required("Senha é obrigatória"),
  newPassword: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
    repeatPassword: Yup.string()
    .required("Senha é obrigatória")
    .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais"),
});
</script>
