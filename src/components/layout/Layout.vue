<template>
    <div class="min-h-screen bg-neutral-900/95 text-white font-sans selection:bg-brand selection:text-black">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

</script>