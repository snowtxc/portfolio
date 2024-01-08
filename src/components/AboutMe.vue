<script setup>
        import BadgeSkill from "@/components/BadgeSkill.vue";
        import BaseBtn from "@/components/Base/BaseBtn.vue";
        
        import { SectionEnum } from "@/enums/SectionEnum";
        import { defineEmits,onBeforeMount,ref } from "vue";
        import profileImg from "@/assets/perfil.jpeg";
        import { db } from  "@/firebase.js";
         import { getDocs, collection } from "@firebase/firestore";

        const emit = defineEmits(['onScrollToSection']);

        const scrollToSection = (section)=>{
            emit('onScrollToSection', section);
        }

        onBeforeMount(()=>{
            const colSkills= collection(db, "skills");
            getDocs(colSkills).then((snaps) => {
                skills.value = snaps.docs.reverse().map(item => {
                    return {
                        id: item.id,
                        ...item.data()
                    }; 
                });
            });
        })


        const skills  = ref([
            
        ]);
</script>

<template>
    <div class="w-full flex justify-center bg-[#f9f9f9] py-16">
    <div class="flex flex-col items-center">
        <img class="w-64 h-64 object-cover rounded-full" :src="profileImg" alt="Avatar extra grande">
        <h1 class="text-3xl md:text-4xl font-bold tracking-wider mt-5">SOBRE MÍ</h1>
        <span class="w-10 p-1 bg-primary mt-5 border rounded-lg border-none"></span>
        <p class="mt-10 px-4 text-base md:text-xl md:text-center md:w-2/3 pb-10 text-secondary">
            Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.
        </p>
        <div class="w-full md:flex px-4 md:px-16 mt-10 gap-16">
            <div class="flex-1">
                <h1 class="text-xl md:text-2xl font-bold">¡Conóceme!</h1>
                <p class="text-base md:text-xl mt-8 text-secondary">
                    Hola, soy Rodrigo Castro. Me encanta sumergirme en el fascinante mundo del desarrollo de software y enfrentar nuevos retos y desafíos que ponga a prueba mi capacidad de resolucion de problemas. Tengo un amplio interes por el desarrollo back-end , inteligencia artificial y blockhain.
                </p>
                <BaseBtn text="CONTACTO" @click="scrollToSection(SectionEnum.CONTACT)"></BaseBtn>
            </div>
            <div class="mt-8 md:mt-0 flex-1 x:mt-20 md:mt-0">
                <h1 class="text-xl md:text-2xl font-bold">Mis Habilidades</h1>
                <div class="flex flex-wrap mt-5 gap-5">
                    <BadgeSkill v-for="skill in skills" :key="skill.id" :text="skill.name"></BadgeSkill>
                </div>
            </div>
        </div>
    </div>
</div>
</template>