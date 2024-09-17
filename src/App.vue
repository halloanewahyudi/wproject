<script setup lang="ts">
import { ref } from 'vue'
import Hero from './components/Hero.vue';
import Navbar from './components/element/Navbar.vue';
import Portofolio from './components/Portofolio.vue';
import Proses from './components/Proses.vue';
import Testimony from './components/Testimony.vue';
import Saya from './components/Saya.vue';
import Gallery from './components/Gallery.vue';
import Performance  from './components/Performance.vue';

</script>

<template>
 <div class="plus-jakarta-sans-font">
  <Navbar class="relative z-10 lg:z-0" />
  <img src="/arrow.svg" alt="" class="absolute -top-24 lg:-top-10 left-1/2 -translate-x-1/2 opacity-55">
<Hero class="" />
<Portofolio />
<Proses />
<Performance />
<Testimony />
<Saya />
 </div>
</template>

