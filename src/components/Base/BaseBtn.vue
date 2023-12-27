<script setup>
        import { defineEmits,defineProps  } from "vue";
        const emit = defineEmits(['click']); 

        const props = defineProps({
            text: { type: String, required: true}
        })
</script>

<template>
<button class="w-full md:w-0 mt-16 bg-primary text-white py-3 min-w-[200px] text-xl rounded-md" @click="emit('click')">{{ props.text }}</button>
</template>