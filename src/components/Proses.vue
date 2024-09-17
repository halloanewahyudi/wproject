<template>
    <section class="pb-20 ">
        <div class="container">
            <h3 class="leading-tight font-extrabold lg:text-3xl pb-5">
                Berproses <br> mulai dari konsep <br> hingga launcing
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 items-center">
                <div v-for="(item, index) in steping" :key="index">
                    <div v-motion :initial="{
                    opacity: 0,
                }" :visible="{
    opacity: 1,
    transition:{
        duration:700
    }
} " class="rounded-xl overflow-hidden relative h-[400px] flex flex-col items-center justify-end">
                        <div
                            class="font-bold justify-self-start self-start mb-auto relative top-3 left-3 z-30 w-10 h-10 rounded-full bg-secondary text-light flex justify-center items-center">
                            {{ index + 1 }}</div>
                        <div class="layer"></div>
                        <img :src="item.bg" alt="" class="h-[400px] w-full absolute object-cover z-10">
                        <button @click="selectedStep(index)"
                            class="flex items-center justify-between gap-4 text-xl  font-bold text-semilight w-full text-left relative z-20 p-4"> {{
                                item.title
                            }} <IconView /> </button>
                    </div>

                </div>
            </div>
            <Transition>
                <div v-if="selectIndex"
                    class="fixed top-0 left-0  w-full  h-full mx-auto  flex flex-col justify-center items-center p-6  bg-primary bg-opacity-90 z-40">

                    <div v-motion :initial="{
                        scale: .5,
                    }" :enter="{
                            scale: 1,
                            transition: {
                                duration:500
                            },
                        }" class="max-w-[400px] p-6  rounded-xl bg-primary_hover lg:shadow-2xl relative overflow-hidden overflow-y-auto"
                        :style="{ background: `url(${selectIndex.bg})no-repeat center`, backgroundSize: 'cover' }">
                        <button class="absolute top-3 right-3 z-20" @click="selectIndex = null">
                            <IconClose class="text-light w-5 h-5" />
                        </button>
                        <div
                            class="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-primary_dark to-primary_hover opacity-90">
                        </div>

                        <div ref="target" class="relative text-white text-sm">
                            <h3 class="font-extrabold text-semilight lg:text-3xl">{{ selectIndex.title }}</h3>
                            <p class="mt-0">{{ selectIndex.description }}</p>
                        </div>

                        <div
                            class="flex justify-between items-center text-light relative border-t-0.5 pt-2 mt-2 text-sm">
                            <button @click="stepPrev(selectIndex.id)" class="flex items-center gap-2">
                                <IconArrowLeft /> Prev
                            </button>
                            <div
                            class="font-bold w-6 h-6 rounded-full bg-secondary text-light flex justify-center items-center">
                            {{ selectIndex.id+1 }}</div>
                            <button @click="stepNext(selectIndex.id)" class="flex items-center gap-2"> Next
                                <IconArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import Textbox from './element/Textbox.vue';
import IconClose from './icons/IconClose.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';
import { useMotion } from '@vueuse/motion'
import IconView from './icons/IconView.vue';
const steping = [
    {
        title: ' Identifikasi ',
        description: 'Proses pembuatan website dimulai dengan mendengarkan kebutuhan dan tujuan dari klien. Apakah website akan digunakan sebagai toko online, portofolio, company profile, atau blog? Dalam tahap ini, penting untuk memahami target audiens, fitur yang diinginkan, dan bagaimana website akan berperan dalam pengembangan bisnis atau personal branding. Berdasarkan informasi ini, kami menyusun strategi dan fitur yang sesuai dengan kebutuhan.',
        bg: '/steping/img1.jpg'
    },
    {
        title: 'Perencanaan',
        description: 'Setelah tujuan dan kebutuhan jelas, kami mulai merancang struktur website dalam bentuk wireframe. Wireframe adalah kerangka dasar dari tampilan website yang menunjukkan layout elemen-elemen utama seperti header, menu, konten, dan footer. Pada tahap ini, navigasi dan tata letak direncanakan untuk memastikan kemudahan akses dan pengalaman pengguna yang baik.',
        bg: '/steping/img2.jpg'

    },
    {
        title: ' Desain UI/UX',
        description: 'Tahap berikutnya adalah merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX). Desain UI/UX dibuat agar menarik secara visual dan tetap fungsional. Kami memperhatikan estetika, pemilihan warna, tipografi, serta ikon untuk menciptakan tampilan yang profesional. Dalam proses ini, prototipe interaktif sering kali dibuat untuk memberi gambaran lebih jelas tentang bagaimana pengguna akan berinteraksi dengan website.',
        bg: '/steping/img3.jpg'
    },
    {
        title: 'Development',
        description: 'Setelah desain disetujui, kami masuk ke tahap pengembangan. Dalam tahap ini, kami mulai mengonversi desain ke dalam kode. Kami menggunakan teknologi terkini seperti HTML, CSS, JavaScript, dan framework seperti Vue.js, React, atau WordPress tergantung pada kebutuhan klien. Pada tahap ini, kami juga membangun backend, mengintegrasikan sistem manajemen konten (CMS), dan menambahkan fitur interaktif serta fungsi lainnya.',
        bg: '/steping/img4.jpg'
    },
    {
        title: 'Testing',
        description: 'Sebelum website diluncurkan, kami melakukan berbagai pengujian untuk memastikan semua elemen berfungsi dengan baik. Kami memeriksa responsivitas pada berbagai perangkat, performa loading, kompatibilitas browser, serta memastikan tidak ada bug yang mengganggu. Kami juga melakukan pengujian terhadap fitur interaktif seperti form, slider, atau fitur e-commerce.',
        bg: '/steping/img5.jpg'
    },
    {
        title: ' Optimasi SEO',
        description: 'Agar website mudah ditemukan di mesin pencari seperti Google, kami melakukan optimasi SEO. Ini melibatkan pengaturan meta tag, kecepatan loading, penggunaan kata kunci yang relevan, serta memastikan struktur URL yang ramah SEO. Pada tahap ini, kami juga mengintegrasikan alat analitik seperti Google Analytics untuk memantau kinerja website setelah diluncurkan.',
        bg: '/steping/img6.jpg'
    },
    {
        title: 'Launch',
        description: 'Setelah semua pengujian selesai dan klien puas dengan hasilnya, website siap untuk diluncurkan. Kami memindahkan website dari server pengembangan ke server live dan melakukan peluncuran resmi. Setelah website aktif, kami tetap melakukan pemantauan untuk memastikan tidak ada masalah yang muncul dan memastikan performa website tetap optimal.',
        bg: '/steping/img7.jpg'
    },
    {
        title: 'Pemeliharaan',
        description: 'Setelah peluncuran, kami menyediakan layanan pemeliharaan berkala untuk memastikan website tetap aman, terupdate, dan berjalan lancar. Kami siap membantu klien dengan pembaruan konten, perbaikan bug, atau penambahan fitur di masa depan.   Narasi ini menggambarkan seluruh proses mulai dari konsep hingga launching yang terstruktur dan memastikan website memenuhi harapan dan kebutuhan klien.',
        bg: '/steping/img8.jpg'
    }
]

const target = ref(null)
const selectIndex = ref(null)
const selectedStep = (index) => {
    selectIndex.value = {
        id: index,
        title: steping[index].title,
        description: steping[index].description,
        bg: steping[index].bg
    };
}

const stepNext = (index) => {
    selectedStep(index + 1)
    useMotion(target, {
    initial: {
        opacity: 0,
        x: 200
    },
    enter: {
        opacity: 1,
        x: 0,
        transition:{
            duration:500
        }
    },
})
}

const stepPrev = (index) => {
    selectedStep(index - 1)
    useMotion(target, {
    initial: {
        opacity: 0,
        x: -200
    },
    enter: {
        opacity: 1,
        x: 0,
        transition:{
            duration:500
        }
    },
})
}


watchEffect(() => {
    console.log(selectIndex.value)

})
</script>

<style lang="scss" scoped>
.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    background: rgb(53, 151, 125);
    background: linear-gradient(0deg, rgba(53, 151, 125, 1) 0%, rgba(127, 140, 138, 0.6951155462184874) 46%, rgba(255, 255, 255, 0) 93%);
    z-index: 20;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>