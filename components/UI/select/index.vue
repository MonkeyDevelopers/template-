<template>
   
   <div class="select_component" ref="open_select_ref" @click="changeSelectState()">
      <h2>{{ selectedOption ? selectedOption.name : 'Selecione uma Opção' }}</h2>
      <icon name="ph:caret-down-bold" class="select_icon" :class="state ? 'select_icon_rotate' : 'select_icon_rotate_deny'" />
   </div>
   <Transition name="select-show">
      <div class="select_options" ref="select_ref" v-if="state" 
      :style="{
         '--color': $colors.primary,
         '--shadow-color': $colors.primary + '99',
      }"
      >
         <div class="select_input">
            <icon name="ph:magnifying-glass" class="select_input_icon" />
            <input v-model="filterText" type="text" placeholder="Pesquisar">
         </div>
         <!-- <span class="default_option">Selecione uma Opção</span> -->
         <span
            v-for="option in filteredOptions"
            :key="option.value"
            :class="{ selected_option: option.id === modelValue }"
            @click="selectOption(option.id)"
         >{{ option.name }}</span>
      </div>
   </Transition>
   
</template>

<script setup>

   const props = defineProps({
      modelValue: [String, Number],
      options: Array,
   });
   
   const state = ref(false); 
   const filterText = ref('');
   const select_ref = ref(null);
   const open_select_ref = ref(null);
   
   const changeSelectState = ((type) => {
      if(type == 'close') {
         filterText.value = '';
         state.value = false;
         return;
      }
      
      if(type != 'close' && state.value == true) {
         filterText.value = '';
         state.value = false;
         return;
      }
      state.value = true;
   })
   
   const emit = defineEmits(['update:modelValue']);
   
   const selectedOption = computed(() => props.options.find(option => option.id === props.modelValue));

   function selectOption(value) {
      emit('update:modelValue', value);
      changeSelectState('close')
   }
      
   onClickOutside([select_ref, open_select_ref], (event) => {
      if (
         state.value == true && 
         !select_ref.value.contains(event.target) && 
         !open_select_ref.value.contains(event.target)
      ) {
         changeSelectState('close')
      }
   });
   
   const filteredOptions = computed(() => {
      return props.options.filter(option => 
         option.name.toLowerCase().includes(filterText.value.toLowerCase())
      );
   });
   
</script>

<style scoped>
   
   .content {
      width: 100%;
      padding: 50px;
   }

   .select_component {
      width: 300px;
      padding: 13px 15px;
      border-radius: 6px;
      background: #0E0E0E;
      border: 2px solid #171717;
      cursor: pointer;
      transition: .3s;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
   }
   
   .select_component h2 {
      font-size: 12px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #e6e6e6;
   }
   
   .select_icon {
      font-size: 14px;
      color: #e6e6e6;
   }
   
   .select_component:hover {
      border: 2px solid #1c1c1c;
   }
   
   /* options */
   
   .select_options {
      width: 300px;
      display: flex;
      flex-direction: column;
      padding: 3px;
      align-items: flex-start;
      row-gap: 3px;
      border-radius: 6px;
      background: #0E0E0E;
      border: 2px solid #171717;
      position: absolute;
      z-index: 9999;
      margin-top: 3px;
      transition: .3s;
   }
   
   .select_options span {
      padding: 10px 15px;
      font-size: 12px;
      font-weight: 300;
      background: #0E0E0E;
      color: #e6e6e6;
      cursor: pointer;
      border-radius: 4px;
      transition: .3s;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
   
   .select_options .default_option {
      color: #9b9b9b;
      font-weight: 400 !important;
   }
   
   
   .select_options .default_option:hover {
      background: #131313;
   }
   
   .select_options span:hover {
      background: #131313;
   }
   
   .select_options .selected_option {
      background: var(--color);
   }
   
   .select_options .selected_option:hover {
      background: var(--shadow-color);
   }
   
   .select_input {
      width: 100%;
      padding: 10px 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
   }
   
   .select_input input {
      font-size: 12px;
      font-weight: 400;
      background: #0E0E0E;
      color: #e6e6e6;
      flex: 1;
   }
   
   .select_input .select_input_icon {
      font-size: 13px;
      color: #747474;
   }
   
   
   /* transform */
   
   .select_icon_rotate {
      transform: rotate(180deg);
      transition: .3s;
   }
   
   .select_icon_rotate_deny {
      transform: rotate(0deg);
      transition: .3s;
   }
   
   
   /* transitions */
   
   .select-show-enter-active {
      transition: all .3s;
   }
   
   .select-show-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   }
   
   .select-show-enter-from,
   .select-show-leave-to {
      opacity: 0;
   }

</style>