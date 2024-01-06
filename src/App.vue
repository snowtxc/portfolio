<script setup > 
    import { ref } from "vue";
    import HeaderComponent from "@/components/HeaderComponent.vue"; 
    import FooterView from "@/components/FooterView.vue"; 
    import GlobalSpinner from "@/components/GlobalSpinner.vue"

    import { appStore } from "@/store/app.store";

    const $appStore = appStore();

    const sectionSelected = ref(null);

    const onSelectSection = (section)=>{
        sectionSelected.value = section;
    }
</script>

<template>
  <div>
    <GlobalSpinner v-if="$appStore.getGlobalLoading"></GlobalSpinner>
    <div :class="{ invisible: $appStore.getGlobalLoading }"> 
      <HeaderComponent @onScrollToSection="onSelectSection"></HeaderComponent>
      <RouterView />
      <FooterView></FooterView>
    </div>
  </div>
</template>

