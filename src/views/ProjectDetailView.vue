<script setup>
import { onBeforeMount, ref ,watch} from 'vue'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router'
import homeFondo from '@/assets/home-fondo.jpg'
import BadgeSkill from '@/components/BadgeSkill.vue'
import BaseBtn from '@/components/Base/BaseBtn.vue'
import { db } from '@/firebase.js'
import { getDoc, doc } from '@firebase/firestore'
import { useRouter  } from "vue-router";
import { appStore } from "@/store/app.store";
import NotFoundPage from "@/components/NotFoundPage.vue";
const $appStore = appStore();

const { sectionSelected } = storeToRefs($appStore);
const $router = useRouter();

watch(sectionSelected, (section) =>{
    $router.push({name:'home', query: { section }})    
})
    



const $route = useRoute()
const notFound = ref(true)
const loading = ref(true)
const projectData = ref(null)
onBeforeMount(() => {
  $appStore.setGlobalLoading(true);
  if ($route.query) {
    const { id } = $route.query
    const ref = doc(db, 'projects', id)
    getDoc(ref)
      .then((snap) => {
        const data = snap.data();
        if(!data){
            loading.value = false;
            $appStore.setGlobalLoading(false);
            return;
        }
        projectData.value = {
          id: snap.id,
          ...data
        }
        loading.value = false
        notFound.value = false
        $appStore.setGlobalLoading(false);
      })
      .catch((e) => {
        loading.value = false
      })
  }
})


const goToRepo = ({linkRepo})=>{
    window.open(linkRepo,'_blank');
}


</script>

<template>
    <NotFoundPage v-if="!appStore.getGlobalLoading && notFound"></NotFoundPage>
    <div class="" v-else-if="!$appStore.getGlobalLoading && !notFound">
        <div
    class="w-full h-[80vh] text-center flex items-center justify-center py-10 "
    :style="{ 'background-image': 'url(' + homeFondo + ')' }"
  >
    <SocialBar class="absolute top-50 left-2 hidden md:block"></SocialBar>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl md:text-6xl font-bold tracking-wider">{{ projectData.title }}</h1>
      <p class="mt-10 text-xl md:text-2xl w-2/3 text-secondary">
         {{ projectData.subtitle }}
      </p>
      <button
        class="mt-16 bg-primary text-white py-3 md:py-5 min-w-[250px] md:min-w-[300px] text-xl md:text-2xl rounded-md"
        @click="scrollToSection(SectionEnum.PROJECTS)"
        v-if="!projectData.repositorioPrivado"
      >
        REPOSITORIO GITHUB
      </button>
    </div>
  </div>

  <div class="w-full">
    <div class="w-full" v-if="!loading && notFound">
      <h1>No se encontro</h1>
    </div>
    <div class="md:flex flex-col mt-10 p-10" v-else-if="!loading && !notFound && projectData">
      <img
        class="max-w-[300px] md:max-w-[800px] m-auto"
        :src="projectData.image"
      />

      <div class="md:px-16 mt-10">
        <div>
          <h1 class="text-2xl md:text-3xl font-bold tracking-wider">{{ projectData.title }}</h1>
          <p class="mt-5 text-secondary">{{ projectData.description }}</p>
          <div class="flex justify-center md:justify-start"></div>
        </div>

        <div class="mt-10">
          <h1 class="text-2xl md:text-3xl font-bold tracking-wider">Herramientas Utilizadas</h1>
          <div class="flex flex-wrap mt-2 gap-3">
            <BadgeSkill  v-for="(tecnologia,idx) in projectData.tecnologias" :key="idx" :text="tecnologia">{{ tecnologia }}</BadgeSkill>
          </div>
        </div>

        <div class="mt-10">
          <h1 class="text-2xl md:text-3xl font-bold tracking-wider">Ir al repositorio</h1>
          <div class="flex gap-10" v-if="!projectData.repositorioPrivado">
            <BaseBtn text="REPOSITORIO" @click="goToRepo(projectData)"></BaseBtn>
            <BaseBtn text="VOLVER AL INICIO"  bgColor="bg-white" textColor="black" borderColor="border-black"></BaseBtn>
          </div>
          <p v-else>
            Lo siento este repositorio es privado
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  
</template>
