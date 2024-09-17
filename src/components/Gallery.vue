<template>
    <Vue3Marquee >
    <div class="grid grid-cols-6 grid-rows-2 gap-3 p-3">
        <div class=""> 
            <img src="/sc/sanur-about.jpg" alt="" >
        </div>
        <div class=" col-span-2">
            <img src="/sc/sendo.png" alt="" >
        </div>
        <div class=" col-span-2 row-span-2 ">
          <img src="/sc/sanur-about.jpg" alt="" >
        </div>
        <div class=""> 
            
            <img src="/sc/7bata.png" alt="" >
        </div>
        <div class="col-span-2"> 
            <img src="/sc/apl.png" alt="" >
        </div>
        
        <div class="">
            <img src="/sc/toko-bawana.png" alt="" >
        </div>

        <div class=""> 
            <img src="/sc/b2b.png" alt="" >
        </div>
    </div>
</Vue3Marquee>
</template>
<script setup>
import { Vue3Marquee } from 'vue3-marquee'
</script>
<style lang="scss" scoped>
.grid{
    div{
        @apply w-full  rounded-xl overflow-hidden  block h-[210px];
      img{
       @apply  w-full h-full object-cover object-top;
       &:hover{
        @apply opacity-90 duration-500;
       }
      }
    }
    div.col-span-2.row-span-2{
        @apply h-[430px]
    }
}
</style>