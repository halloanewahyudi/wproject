<template>
    <section class="bg-light">
    <div class="container pt-5 pb-12 lg:py-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9 min-h-[calc(100vh-80px)] items-center">
            <div class="kiri ">
                <h3 class="text-primary lg:text-4xl font-extrabold ">Solusi efektif, membuatkan website anda dengan harga murah dan profesional 
                    </h3>
                <p>Freelancer yang sudah lebih dari 7 tahun berkarya, ingin memberikan solusi digital anda</p>
                <ul class="list-layanan pt-4">
                    <li> WEBSITE</li>
                    <li> LANDINGPAGE</li>
                    <li> ECOMMOERCE</li>
                    <li> INVITATION</li>
                </ul>
            </div>
            <div class="kanan ">
                <div class=" relative p-2">
                    <LabelCoding class="absolute left-3 top-1/4 z-20 hidden lg:block" />
                    <LabelWordpress class="absolute right-6 bottom-20 z-20 hidden lg:block" />
                    <!-- <img src="/label.svg" alt="" class="opacity-80 absolute -top-10 -left-6 lg:left-10 animate-spin-slow duration-1000 transition-all z-20"> -->
                    <img src="/foto.png" alt="" srcset="" class="mx-auto relative z-10">
                    <img src="/titik.svg" alt="" srcset="" class="absolute bottom-6 right-4 z-0 opacity-40">
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import LabelCoding from './element/LabelCoding.vue';
import LabelWordpress from './element/LabelWordpress.vue';

</script>

<style lang="scss" scoped>
.list-layanan {
    @apply flex flex-wrap gap-4 lg:gap-2;

    li {
        @apply flex items-center gap-2 text-sm font-semibold font-mono text-primary;
        &:after {
            content: '';
            @apply w-1.5 h-1.5 rounded-full bg-secondary hidden lg:block;
        }
        &:last-child{
            &:after {
            content: '';
            @apply hidden;
        }
        }
    }

}
</style>