<script setup>
    import { defineProps } from "vue";

    const props = defineProps({
        text: { type: String, required: true}
    })
</script>

<template>
    <div class="bg-gray px-4 py-2 rounded-lg text-xl text-secondary">
        {{ props.text }}
    </div>
</template>