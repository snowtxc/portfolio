<script setup>
    import { ref, onBeforeMount } from "vue";
    import BaseBtn from "@/components/Base/BaseBtn.vue";
    import { db } from  "@/firebase.js";
    import { getDocs, collection } from "@firebase/firestore";

    const projects = ref([]);

    onBeforeMount(() => {
        const colProjects = collection(db, "projects");
        getDocs(colProjects).then((snaps) => {
            projects.value = snaps.docs.map(item => {
                return {
                    id: item.id,
                    ...item.data()
                };
            });
        });
    });
</script>

<template>
    <div class="w-full py-32">
        <div class="flex flex-col items-center w-full">
            <h1 class="text-3xl md:text-4xl font-bold tracking-wider">PROYECTOS</h1>
            <span class="w-10 p-1 bg-primary mt-5 border rounded-lg border-none"></span>
            <p class="mt-10 px-4 text-base md:text-xl md:text-center md:w-2/3 pb-10 text-secondary">
                Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.
            </p>
        </div>
        <div class="md:flex flex-col items-center"> 
            <div class="mt-10 md:mt-10 flex flex-col md:flex-row mx-10 gap-8 shadow-inner py-4 px-2" v-for="project in projects" :key="project.id"> 
                <img class="max-w-[300px] md:max-w-[600px]" :src="project.image"/>
                <div>
                    <h1 class="text-2xl md:text-3xl font-bold tracking-wider">{{ project.title }}</h1>
                    <p class="mt-5 text-secondary">{{ project.description }}</p>
                    <div class="flex justify-center md:justify-start">
                        <BaseBtn text="ESTUDIO DE CASO"></BaseBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>