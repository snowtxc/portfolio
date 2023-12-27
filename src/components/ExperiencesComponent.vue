<script setup>
    import TimeLine from "@/components/TimeLine.vue";
    import { ref } from "vue";

    const loading = ref(false);
    const data = ref([ 
        {
            name: 'Avance Software',
            description: "He desarrollado aplicaciones web en el frontend utilizando VueJS y el framework Quasar, creando interfaces de usuario interactivas y eficientes. Además, he integrado servicios de Firebase como Firestore, autenticación, base de datos en tiempo real y almacenamiento. También he trabajado en la implementación y mejora de un software de gestión de activos utilizando PHP y el framework CodeIgniter en el backend",
            position: "Dev Jr",
            place:  "San Jose",
            date: "Aug, 2022 - Present",
            skills: ['Vue js', 'PHP', 'Codeigniter','Firebase', 'SQL']
        }
            
        ])
</script>

<template>
   <div class="w-full py-32" :style="{ 'background-image': 'url(' + homeFondo + ')' }">
    <div class="flex flex-col items-center w-full">
        <h1 class="text-3xl md:text-4xl font-bold tracking-wider">EXPERIENCIAS</h1>
        <span class="w-10 p-1 bg-primary mt-5 border rounded-lg border-none"></span>
        <p class="mt-10 px-4 text-base md:text-xl md:text-center md:w-2/3 pb-10 text-secondary">
            Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en
            términos de programación y tecnología
        </p>
    </div>
    <div class="w-full flex justify-center">
        <TimeLine :data="data" class="w-full md:w-2/3"></TimeLine>
    </div>
</div>
    
</template>