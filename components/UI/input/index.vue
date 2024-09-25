<template>
  <div
    class="TextInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid && !!modelValue }"
    :style="{
      '--success-color': useColor().setColor('success'),
      '--error-color': useColor().setColor('danger'),
      '--shadow-error-color': useColor().setDarkenColor('danger'),
      '--shadow-success-color': useColor().setDarkenColor('success'),
    }"
  >
    <label :for="name">{{ label }}</label>
    <div class="input">
      <div>
        <slot name="prepend"></slot>
      </div>
      <input
        :name
        :type
        :placeholder
        :autocomplete
        :value="modelValue"
        :id="name"
        @input="handleInput"
        @blur="handleBlur"
      />
      <slot name="append"></slot>
    </div>

    <p
      class="help-message"
      :class="errorMessage ? 'danger' : 'success'"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script setup>
import { toRef, defineEmits } from "vue";
import { useField, useForm } from "vee-validate";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  successMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: "off",
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event) => {
  emit("update:modelValue", event.target.value);
  handleChange(event);
};

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
.TextInput {
  position: relative;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
  color: #cecece
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  width: 100%;
  background-color: transparent;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  color: #cecece;
  border: 1px solid #464646;
}

input:focus {
  border: 1px solid #464646;
}

.input {
  display: flex;
  align-items: center;
}

.TextInput.has-error input {
  border: 1px solid var(--error-color);
}

.TextInput.has-error input:focus {
  border: 1px solid var(--error-color);
}

.TextInput.success input {
  border-color: var(--success-color);
}

.TextInput.success input:focus {
  border-color: var(--success-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 12px;
}

.help-message.success {
  margin-top: 4px;
  color: var(--success-color);
}
.help-message.danger {
  margin-top: 4px;
  color: var(--error-color);
}
</style>
