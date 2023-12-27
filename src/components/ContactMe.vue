<script setup>
    import { ref } from "vue";
    import BaseBtn from "@/components/Base/BaseBtn.vue";
    import homeFondo from "@/assets/home-fondo.jpg";
</script>

<template>
    <div class="w-full flex justify-center bg-gray py-32" :style="{'background-image': 'url(' + homeFondo + ')'}">
        <div class="w-full md:w-2/3 flex flex-col gap-4 items-center px-4 md:px-0">
            <h1 class="text-3xl md:text-4xl font-bold tracking-wider">CONTÁCTAME</h1>
            <span class="w-10 p-1 bg-primary mt-5 border rounded-lg border-none"></span>
            <p class="mt-10 text-secondary text-base md:text-xl md:w-2/3 pb-10 text-secondary">
                No dudes en contactarme enviando el formulario a continuación, y me pondré en contacto contigo lo antes posible.
            </p>
            <div class="w-full bg-white p-5 rounded-lg flex flex-col gap-5 mb-8 px-8 md:w-1/2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" id="name" class="p-5 border-none bg-gray bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa tu nombre" required>
                </div>

                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                    <input type="text" id="name" class="p-5 border-none bg-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa tu correo electrónico" required>
                </div>
                <div>
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
                    <input type="text" id="large-input" class="min-h-[150px] p-5 border-none bg-gray block w-full p-4 text-gray-900 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa tu mensaje">
                </div>

                <div class="flex justify-end">
                    <BaseBtn text="ENVIAR"></BaseBtn>
                </div>
            </div>
        </div>
    </div>
</template>
