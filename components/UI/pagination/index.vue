<template>
   <div class="container">
      <div class="previous" @click="prevPage">
         <icon name="ph:caret-left-bold" class="previous_icon" />
         Anterior
      </div>
      
      <div v-if="hasPreviousPages" class="undefined">
         <icon name="ph:dots-three-bold" class="undefined_icon" />
      </div>

      <div v-for="page in visiblePages" :key="page" :class="(currentPage) == page ? 'selected_number' : ''" class="number" @click="goToPage(page)">
         {{ page }}
      </div>

      <div v-if="hasMorePages" class="undefined">
         <icon name="ph:dots-three-bold" class="undefined_icon" />
      </div>

      <div class="next" @click="nextPage">
         Próxima
         <icon name="ph:caret-right-bold" class="next_icon" />
      </div>
   </div>
</template>

<script setup>

const totalPages = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
const visibleCount = 5;
const currentIndex = ref(0);
const currentPage = ref(1);

const visiblePages = computed(() => {
   return totalPages.value.slice(currentIndex.value, currentIndex.value + visibleCount);
});

const hasPreviousPages = computed(() => {
   return currentIndex.value > 0;
});

const hasMorePages = computed(() => {
   return currentIndex.value + visibleCount < totalPages.value.length;
});

const prevPage = () => {
   if (currentPage.value > 1) {
      currentPage.value--;
      goToPage(currentPage.value); // Atualiza a página atual e centraliza, se necessário
   }
};

const nextPage = () => {
   if (currentPage.value < totalPages.value.length) {
      currentPage.value++;
      goToPage(currentPage.value); // Atualiza a página atual e centraliza, se necessário
   }
};

const goToPage = (page) => {
   const pageIndex = totalPages.value.indexOf(page);
   currentPage.value = page;

   // Lógica de centralização
   const halfVisible = Math.floor(visibleCount / 2);
   
   if (pageIndex >= halfVisible && pageIndex + halfVisible < totalPages.value.length) {
      // Centraliza a página selecionada, desde que haja páginas antes e depois
      currentIndex.value = pageIndex - halfVisible;
   } else if (pageIndex < halfVisible) {
      // Se está perto do começo, mostra as primeiras páginas
      currentIndex.value = 0;
   } else if (pageIndex + halfVisible >= totalPages.value.length) {
      // Se está perto do final, mostra as últimas páginas
      currentIndex.value = totalPages.value.length - visibleCount;
   }
};

</script>

<style scoped>

   .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      user-select: none;
   }
   
   .previous {
      height: 40px;
      padding: 0px 15px;
      cursor: pointer;
      border-radius: 4px;
      transition: .3s;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
   }
   
   .previous:hover {
      background: #212121;
   }
   
   .previous_icon {
      font-size: 16px;
      margin-top: 1px;
   }
   
   .number {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 4px;
      transition: none;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   .number:hover {
      background: #212121;
      transition: .3s !important;
   }
   
   .selected_number {
      background: #c51b1b !important;
      color: white;
      font-weight: bold;
      transition: none !important;
   }
   
   .undefined {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   .undefined_icon {
      font-size: 21px;
   }
   
   .next {
      height: 40px;
      padding: 0px 15px;
      cursor: pointer;
      border-radius: 4px;
      transition: .3s;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3px;
   }
   
   .next:hover {
      background: #212121;
   }
   
   .next_icon {
      font-size: 16px;
      margin-top: 1px;
   }

</style>