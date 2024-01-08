<script setup>
  import { defineEmits, defineProps } from "vue";
  const emit = defineEmits(['click']);

  const props = defineProps({
    text: { type: String, required: true },
    bgColor: { type: String, required: false },
    borderColor: { type: String, required: false },
    textColor: { type: String, required: false }
  })
</script>

<template>
  <button
    class="w-full md:w-0 mt-16 py-3 min-w-[200px] text-xl rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-secondary"
    :class="[
      'bg-primary',
      props.bgColor,
      props.borderColor,
      props.textColor || 'text-white' // Establecer el color de texto predeterminado en blanco si no se proporciona
    ]"
    @click="emit('click')"
  >
    {{ props.text }}
  </button>
</template>