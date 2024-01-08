<script setup>
import { ref, defineEmits , watch} from 'vue'
import profileImg from '@/assets/perfil.jpeg'
import { SectionEnum } from '@/enums/SectionEnum';
import { appStore } from "@/store/app.store";
import BaseBtn from "@/components/Base/BaseBtn.vue";

const $appStore = appStore();
const emit = defineEmits(['onScrollToSection'])
const cv  = "https://firebasestorage.googleapis.com/v0/b/portfolio-personal-47e3e.appspot.com/o/CV%20(3).pdf?alt=media&token=b5f26c1e-2933-4438-b6ce-25f153fa5aaa";

const onToggle = () => {
  document.getElementById('navbar-default').classList.toggle('hidden')
  document.getElementById('navbar-default').classList.toggle('flex')
}
const scrollToSection = (section) => {
  $appStore.setSectionSelected(section);
  emit('onScrollToSection', section)
  document.getElementById('navbar-default').classList.toggle('hidden')
}

const openTab = (url)=>{
    window.open(url,'_blank');
}


</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="profileImg" class="h-16 w-16 rounded-full object-cover" alt="Perfil " />
        <span class="self-center text-2xl whitespace-nowrap dark:text-white">RODRIGO CASTRO  </span>
      </a>
      <button
        @click="onToggle"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 2xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Abrir menú principal</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full 2xl:block 2xl:w-auto" id="navbar-default">
        <ul
          class="border-0 font-medium w-full gap-2 md:gap-0 flex gap-5 flex-col p-4 2xl:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 2xl:flex-row xl:space-x-20 rtl:space-x-reverse 2xl:mt-0 xl:border-0 2xl:bg-white dark:bg-gray-800 2xl:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="text-base hover:text-primary duration-300 flex justify-end border-t-1 md:border-t-0 py-3"
              aria-current="page"
              @click="scrollToSection(SectionEnum.HOME)"
              >INICIO</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base hover:text-primary duration-300 flex justify-end border-t-1 py-3 md:border-t-0 items-center"
              aria-current="page"
              @click="scrollToSection(SectionEnum.ABOUT)"
              >SOBRE MÍ</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base hover:text-primary duration-300 flex justify-end border-t-1 py-3 md:border-t-0 items-center"
              aria-current="page"
              @click="scrollToSection(SectionEnum.EXPERIENCES)"
              >EXPERIENCIAS</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base hover:text-primary duration-300 flex justify-end border-t-1 py-3 md:border-t-0 items-center"
              aria-current="page"
              @click="scrollToSection(SectionEnum.EDUCATION)"
              >EDUCACIÓN</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base hover:text-primary duration-300 flex justify-end border-t-1 py-3 md:border-t-0"
              aria-current="page"
              @click="scrollToSection(SectionEnum.PROJECTS)"
              >PROYECTOS</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-base hover:text-primary duration-300 flex justify-end border-t-1 py-3 md:border-t-0"
              aria-current="page"
              @click="scrollToSection(SectionEnum.CONTACT)"
              >CONTACTO</a
            >
          </li>

          <li class="flex justify-end items-center">
            <button
              type="button"
              @click="openTab(cv)"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
               CV<i class="fa-regular fa-file ml-2"></i>
            </button>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>
