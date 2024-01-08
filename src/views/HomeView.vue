<script setup > 
    import HomeComponent from "@/components/HomeComponent.vue";
    import AboutMe from "@/components/AboutMe.vue";
    import  ProjectsComponent from "@/components/ProjectsComponent.vue";
    import ContactMe from "@/components/ContactMe.vue";
    import ExperiencesComponent from "@/components/ExperiencesComponent.vue";
    import EducationComponent from "@/components/EducationComponent.vue"
    import { SectionEnum } from "@/enums/SectionEnum";

    import { storeToRefs } from 'pinia';
    import { watch ,onMounted} from "vue";
    import { appStore } from "@/store/app.store";
    import { useRoute  } from 'vue-router';

    
    const $appStore = appStore();
    const { sectionSelected } = storeToRefs($appStore);
    const $route = useRoute();

    onMounted(()=>{
        if($route.query && $route.query.section){
            redirectToSection($route.query.section);
        }
    })

    const redirectToSection = (section)=>{
      const sectionElement = document.getElementById(section);
       if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }


    watch(sectionSelected, (section) =>{
        redirectToSection(section);  
    })
    


    
</script>

<template>
  <HomeComponent :id="SectionEnum.HOME"  @onScrollToSection="redirectToSection"></HomeComponent>
  <AboutMe :id="SectionEnum.ABOUT" @onScrollToSection="redirectToSection"></AboutMe> 
  <ExperiencesComponent :id="SectionEnum.EXPERIENCES"></ExperiencesComponent>
  <EducationComponent :id="SectionEnum.EDUCATION"></EducationComponent>
  <ProjectsComponent :id="SectionEnum.PROJECTS"></ProjectsComponent>
  <ContactMe :id="SectionEnum.CONTACT"></ContactMe>

</template>