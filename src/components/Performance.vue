<template>
    <section class="bg-gradient-to-t from-primary to-white relative overflow-x-hidden">
        <div class="container ">
            <div class="text-center mb-5">
                <h3 class="mb-0 font-bold text-4xl text-primary"> Performa Website yang baik </h3>
                <p class="mt-0"> Selalu berupaya membuat website secara profesional <br> dengan mempertimbangkan
                    performa dan SEO yang baik</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 justify-around relative z-10">
                <div>
                    <img src="/porto-b2b-sinergi.png" alt="">
                </div>
                <div>
                    <img src="/porto-sanur-elok.png" alt="">
                </div>
            </div>
        </div>
        <div class="relative ">

            <div v-if="showVideo"
                class="fixed top-0 left-0 w-full h-full bg-primary_dark bg-opacity-80 flex flex-col justify-center items-center z-40">
                <div v-motion :initial="{
                    opacity: 0,
                    scale: 0.4
                }" :enter="{
                        opacity: 1,
                        scale: 1
                    }" :delay="200" :duration="700" class="relative rounded-xl overflow-hidden max-w-max">
                    <video ref="video" class="max-w-[800px] " />
                    <div
                        class="absolute bottom-0 left-0 w-full p-4 bg-primary z-10 flex items-center justify-between gap-4">
                        <button @click=" playing = !playing" class="justify-self-end">
                            <IconPause class="text-light w-6 h-6" />
                        </button>

                        <div class="w-full bg-primary_hover">
                            <div class="h-1  bg-secondary block" :style="{ width: `${progress}%`, }"></div>
                        </div>
                        <button @click="closeVideo">
                            <p> case project adipradanalestari</p>
                            <IconCloseVue class="text-light w-4 h-4" />
                        </button>
                        <button @click="toggle"><IconViewVue class="text-light w-4 h-4" /> </button>
                    </div>
                </div>

            </div>
            <button @click="playVideo" class="absolute top-1/2 left-1/2 z-10 text-light">
                <IconPlay class="w-16 h-16 opacity-70" />
            </button>
            <GalleryVue class="opacity-25" />
        </div>

    </section>

</template>
<script setup>
import GalleryVue from "./Gallery.vue";
import { useMediaControls, useFullscreen  } from '@vueuse/core'
import { ref, computed } from "vue";
import IconPlay from "./icons/IconPlay.vue";
import IconPause from "./icons/IconPause.vue";
import IconCloseVue from "./icons/IconClose.vue";
import IconViewVue from "./icons/IconView.vue";


const video = ref()
const { isFullscreen, enter, exit, toggle } = useFullscreen(video)
const { playing, currentTime, duration, volume } = useMediaControls(video, {
    src: '/apl-performance.mp4',
})

const showVideo = ref(false)
const playVideo = () => {
    showVideo.value = true
    setTimeout(() => {
        playing.value = true
    }, 200);

}
const closeVideo = () => {
    showVideo.value = false
    setTimeout(() => {
        playing.value = false
    }, 200);

}

const progress = computed(() => {
    const proses = (currentTime.value / duration.value) * 100
    return proses > 100 ? 100 : proses  // agar tidak melebihi 100%
})

</script>