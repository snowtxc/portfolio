<script setup > 
    import HeaderComponent from "@/components/HeaderComponent.vue"; 
    import HomeComponent from "@/components/HomeComponent.vue";
    import AboutMe from "@/components/AboutMe.vue";
    import  ProjectsComponent from "@/components/ProjectsComponent.vue";
    import ContactMe from "@/components/ContactMe.vue";
    import ExperiencesComponent from "@/components/ExperiencesComponent.vue";
    import FooterView from "@/components/FooterView.vue";
    import EducationComponent from "@/components/EducationComponent.vue"
    import { SectionEnum } from "@/enums/SectionEnum";

    const onScrollToSection = (section) =>{
       const sectionElement = document.getElementById(section);
       if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
</script>

<template>
  <HeaderComponent @onScrollToSection="onScrollToSection"></HeaderComponent>
  <HomeComponent :id="SectionEnum.HOME"  @onScrollToSection="onScrollToSection"></HomeComponent>
  <AboutMe :id="SectionEnum.ABOUT" @onScrollToSection="onScrollToSection"></AboutMe> 
  <ExperiencesComponent :id="SectionEnum.EXPERIENCES"></ExperiencesComponent>
  <EducationComponent :id="SectionEnum.EDUCATION"></EducationComponent>
  <ProjectsComponent :id="SectionEnum.PROJECTS"></ProjectsComponent>
  <ContactMe :id="SectionEnum.CONTACT"></ContactMe>
  <FooterView></FooterView>
  <RouterView />
</template>

