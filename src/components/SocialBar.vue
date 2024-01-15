<script setup>
        const githubUrl = "https://github.com/snowtxc";
        const linkedinUrl = "https://www.linkedin.com/in/rodrigo-castro-60b68a207/";
        const cv  = "https://firebasestorage.googleapis.com/v0/b/portfolio-personal-47e3e.appspot.com/o/Curriculum%20Profesional%20de%20Hombre%20con%20Foto%20Sencillo%20Azul.pdf?alt=media&token=8e1749f6-6b38-4970-bf04-d2e5f8d0e321";
        const openTab = (url)=>{
            window.open(url,'_blank');
        }
</script>

<template>
    <div class="py-2 px-2 flex flex-col gap-5 bg-white rounded-lg"> 
        <div class="rounded-lg hover:bg-primary p-2 px-4 hover:bg-opacity-25 hover:cursor-pointer transition duration-500" @click="openTab(linkedinUrl)">
            <i class="fa-brands fa-linkedin text-3xl"></i>
        </div>
        <div class="rounded-lg hover:bg-primary p-2 px-4 hover:bg-opacity-25 hover:cursor-pointer transition duration-200" @click="openTab(githubUrl)">
            <i class="fa-brands fa-github text-3xl hover:cursor-pointer"></i> 
        </div>

        <div class="rounded-lg hover:bg-primary p-2 px-4 hover:bg-opacity-25 hover:cursor-pointer transition duration-200" @click="openTab(cv)">
            <i class="fa-regular fa-file"></i> 
        </div>
    </div>

</template>