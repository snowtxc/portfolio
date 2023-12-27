<script setup>
    import homeFondo from "@/assets/home-fondo.jpg";
    import SocialBar from "@/components/SocialBar.vue";
    import { SectionEnum } from "@/enums/SectionEnum";
    import { defineEmits } from "vue";

    const emit = defineEmits(['onScrollToSection']);

    const scrollToSection = (section)=>{
        emit('onScrollToSection', section);
    }
</script>

<template>
    <div class="w-full h-[80vh] text-center flex items-center justify-center" :style="{'background-image': 'url(' + homeFondo + ')'}" >
        <SocialBar class="absolute top-50 left-2 hidden md:block"></SocialBar>
        <div class="flex flex-col items-center">
            <h1 class="text-4xl md:text-6xl  font-bold tracking-wider">¡HOLA, SOY RODRIGO CASTRO!</h1>
            <p class="mt-10 text-2xl w-2/3 text-secondary">Soy tecnólogo en informática apasionado por el desarrollo de software y la resolución de problemas tecnológicos</p>
            <button class="mt-16 bg-primary text-white py-3 md:py-5 min-w-[250px] md:min-w-[300px] text-xl md:text-2xl rounded-md" @click="scrollToSection(SectionEnum.PROJECTS)">PROYECTOS</button>
        </div>
        
    </div>
</template>