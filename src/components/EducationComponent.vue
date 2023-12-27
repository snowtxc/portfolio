<script setup>
import TimeLine from '@/components/TimeLine.vue'
import { ref } from 'vue'
import homeFondo from '@/assets/home-fondo.jpg'

const data = ref([
  {
    name: 'Escuela Técnica Utu, San José',
    description: 'Mar, 2018 - Dic, 2020',
    position: 'Bachillerato en Informática',
    place: 'San José',
    date: 'Ago, 2022 - Presente',
    skills: ['Java', 'Visual Basic .NET', 'SQL', 'Linux']
  },
  {
    name: 'UTEC, San José',
    description: 'Mar, 2018 - Dic, 2020',
    position: 'Tecnólogo en Informática',
    place: 'San José',
    date: 'Mar, 2021 - Dic, 2023',
    skills: ['C++', 'Java', 'PostgreSQL', 'PHP', 'C# .NET', 'Angular', 'Vue JS']
  }
])
</script>

<template>
  <div class="w-full py-32" :style="{ 'background-image': 'url(' + homeFondo + ')' }">
    <div class="flex flex-col items-center w-full">
      <h1 class="text-3xl md:text-4xl font-bold tracking-wider">EDUCACIÓN</h1>
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