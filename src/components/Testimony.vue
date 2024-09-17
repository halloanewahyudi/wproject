<template>
   <section class="py-20 bg-primary text-light">
  
    <div class="container">
        <h3 class="leading-tight font-extrabold lg:text-3xl text-light mt-0 pb-5">
                Beberapa Klien <br> yang mereka <br> katakan
    </h3>
       <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
        <div class="bg-gradient-to-tr from-primary to-primary_hover p-6 rounded-xl border-primary_hover border" v-for="(item,index) in testimony" :key="index">
            <div v-if="item.img" class="shrink-0">
                <img :src="item.img" alt="" srcset="">
            </div>
            <div >
                <div class="flex gap-2">
                    <IconQuote class="text-secondary w-8 h-8 shrink-0" />
                    <div class="flex flex-col gap-2 h-full">
                        <span class="text-lg font-semibold font-serif italic">{{ item.description }}</span>
                        <span class="text-sm  testi-name">{{ item.name }}</span>
                    </div>
                </div>
                
            </div>
        </div>
       </div>
    </div>
   </section>
</template>

<script setup>
import IconQuote from "./icons/IconQuote.vue"

const testimony = [
    {
        name:'Yoyon',
        company:'B2B Sinergi',
        description:'Terimakasih pak Wahyu orang banyak yang tau bisnins saya semenjak di buatkan website',
        img:''
    },
    {
        name:'Anna',
        company:'Aanur Elok Residence',
        description:'Websitenya sesuai konsep dan supportnya baik sangat membantu',
        img:''
    },
    {
        name:'Cheppy',
        company:'7 Bata Pertama',
        description:'Keren Pak, dan sangat membantu tim marketing saya dalam memperkenalkan jasa kami',
        img:''
    }

]
</script>

<style lang="scss" scoped>
.testi-name{
    @apply flex items-center gap-2;
    &:before{
       content: '';
       @apply w-10 h-[1px] bg-semilight;
    }
}
</style>