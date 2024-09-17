<template>
    <section class="pt-16 pb-20 relative">
        <img src="/titik.svg" alt="" class="absolute opacity-40">
        <div class="container relative">
            <div class="mb-10 flex flex-col gap-0">
                <h3 class="font-bold text-primary mb-0"> Portofolio</h3>
                <p class="mt-0">Beberapa project yang pernah di kerjakan</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14">
                <div v-motion :initial="{
                    opacity: 0,
                }" :visible="{
    opacity: 1,
    transition:{
        duration:700
    }
} " v-for="item in porto" :key="item" class="flex flex-col">
                    <img :src="item.image" alt=""
                        class=" object-cover object-center w-full h-[320px] lf:h-[580px] rounded-xl">
                    <div class="flex flex-col gap-1">
                        <p class="font-semibold">{{ item.nama }}</p>
                        <span class="text-sm"> {{ item.dibuat }}</span>
                        <a :href="item.link" target="_blank" rel="noopener noreferrer"
                            class="text-xs font-bold text-primary italic"> Lihat Website</a>

                    </div>

                </div>
                <div
                    class=" w-full h-[320px] lf:h-[580px] rounded-xl bg-gradient-to-tr from-primary to-primary_hover flex flex-col justify-center items-center">
                    <img src="/client-saya.svg" alt=""
                        class="w-[280px] h-[280px] opacity-90 animate-spin-slow fill-light">
                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
const porto = [
    {
        nama: 'Sanur Elok Residence',
        dibuat: 'Wordpress,Oxygen',
        image: '/porto/img-ser.png',
        link: 'https://sanurelokresidence.co.id/'
    },
    {
        nama: 'lP3I',
        dibuat: 'Wordpress, ACF, Bootstrap',
        image: '/porto/lp3i.jpg',
        link: 'https://www.lp3i.ac.id/'
    },
    {
        nama: 'Sendo Indonesia',
        dibuat: 'Vue js, Tailwind css',
        image: '/porto/sendo.jpg',
        link: 'https://sendoindonesia.com/'
    },
    {
        nama: 'Adi Pradana Lestari ',
        dibuat: 'wordpress, Gutemberg, FSE',
        image: '/porto/img-apl.png',
        link: 'https://adipradanalestari.co.id/'
    },
    {
        nama: '7 Bata Pertama',
        dibuat: 'Wordpress, Gutemberg, Bootstsrap',
        image: '/porto/7bata.jpg',
        link: 'https:/7bata.co.id/'
    },
    {
        nama: 'B2B Sinergi',
        dibuat: 'Wordpress, Gutemberg,FSE',
        image: '/porto/b2b.jpg',
        link: 'https://b2bsinergi.com/'
    },
    {
        nama: 'toko Bawana',
        dibuat: 'Wordpress, Woocommrce, Bootstsrap',
        image: '/porto/tokobawana.jpg',
        link: 'https://tokobawana.com/'
    }
]
</script>

<style lang="scss" scoped></style>