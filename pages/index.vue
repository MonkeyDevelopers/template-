<template>
  <nuxt-layout name="admin" title="Início" description="Dashboard Inicial">
    <div class="idk">
      <div class="card">
        <h1>{{ test.value }}</h1>
        <KoButton color="primary" @click="test.add">
          Add essa caralha +</KoButton
        >
        <KoButton color="secondary" @click="test.add">
          Add essa caralha (so que laranja)</KoButton
        >
      </div>
      <div class="card">
        <Test />
      </div>
      <div class="card">
        <Testuser />
      </div>
    </div>
  </nuxt-layout>
</template>

<script setup>
useHead({
  title: "Início - Admin",
});

const useTest = () => {
  const value = ref(2203);

  const add = () => {
    value.value++;
  };
  const subtract = () => {
    value.value--;
  };

  return {
    value,
    add,
    subtract,
  };
};

const test = useTest();
</script>

<style scoped>
.idk {
  display: flex;
  gap: 50px;
}
.card {
  width: 320px;
  height: 100%;
  background: #121212;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
