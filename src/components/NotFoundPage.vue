<script setup>
    import BaseBtn from "@/components/Base/BaseBtn.vue";
    import  { useRouter} from "vue-router";

    const $router = useRouter();

    const goToHome = ()=>{
        $router.push({name: 'home'})
    }
</script>

<template>

<main class="h-screen w-full flex flex-col justify-center items-center bg-primary">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-secondary text-white px-2 text-sm rounded rotate-12 absolute">
		Pagina no encontrada
	</div>
    <BaseBtn text="Vovler al inicio" bgColor="bg-secondary" @click="goToHome"></BaseBtn>

	
</main>
</template>