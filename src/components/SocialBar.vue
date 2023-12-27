<script setup>
        const githubUrl = "https://github.com/snowtxc";
        const linkedinUrl = "https://www.linkedin.com/in/rodrigo-castro-60b68a207/";

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
    </div>

</template>