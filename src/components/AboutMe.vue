<script setup>
        import BadgeSkill from "@/components/BadgeSkill.vue";
        import BaseBtn from "@/components/Base/BaseBtn.vue";
        
        import { SectionEnum } from "@/enums/SectionEnum";
        import { defineEmits } from "vue";
        import profileImg from "@/assets/perfil.jpeg";

        const emit = defineEmits(['onScrollToSection']);

        const scrollToSection = (section)=>{
            emit('onScrollToSection', section);
        }


        const skills  = [
            "Vue JS",
            "PHP",
            "Laravel",
            "Codeigniter",
            "C# .NET",
            "Angular",
            "SQL",
            "Git"
        ];
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
                    Soy un Desarrollador Web Frontend que construye el frontend de sitios web y aplicaciones web que conducen al éxito del producto en general. Echa un vistazo a algunos de mis trabajos en la sección de Proyectos.
                    También me gusta compartir contenido relacionado con las cosas que he aprendido a lo largo de los años en Desarrollo Web, para ayudar a otras personas de la comunidad de desarrollo. Siéntete libre de conectarte o seguirme en mi Linkedin, donde publico contenido útil relacionado con el Desarrollo Web y la Programación.
                    Estoy abierto a oportunidades laborales en las que pueda contribuir, aprender y crecer. Si tienes una buena oportunidad que coincida con mis habilidades y experiencia, no dudes en contactarme.
                </p>
                <BaseBtn text="CONTACTO" @click="scrollToSection(SectionEnum.CONTACT)"></BaseBtn>
            </div>
            <div class="mt-8 md:mt-0 flex-1 x:mt-20 md:mt-0">
                <h1 class="text-xl md:text-2xl font-bold">Mis Habilidades</h1>
                <div class="flex flex-wrap mt-5 gap-5">
                    <BadgeSkill v-for="(skill, idx) in skills" :key="idx" :text="skill"></BadgeSkill>
                </div>
            </div>
        </div>
    </div>
</div>
</template>