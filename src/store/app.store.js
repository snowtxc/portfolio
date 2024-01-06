import { defineStore } from 'pinia'


export const appStore = defineStore('app', {
    state: () => ({ loading: false  , sectionSelected: null}),
    getters: {
      getGlobalLoading: (state) => state.loading,
      getSectionSelected: (state) => state.sectionSelected
    },
    actions: {
      setGlobalLoading(value) {
        this.loading = value;
      },
      setSectionSelected(value){
        this.sectionSelected = value;
      }
    },
})