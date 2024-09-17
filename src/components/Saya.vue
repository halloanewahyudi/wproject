<template>
    <section class="pb-20 bg-primary">
        <div class="container relative">
          
            <div class=" rounded-xl py-3 px-4 bg-secondary text-light">
                <div class="grid grid-cols-1 lg:grid-cols-6 items-center justify-center lg:justify-between">
                    <div class="col-span-5">
                        <div class="flex items-center gap-4">
                            <img src="/logo.svg" alt="">
                            <h4>Wahyudi  &copy; 2024</h4>
                            <h2 class="italic font-bold">Hire me !</h2>
                        </div>

                    </div>
                    <div class="">
                        <div class="flex   gap-3 ">
                            <div class="flex gap-4 items-center">
                                <a href="mailto:hallo.anewahyudi@gmail.com">
                                    <IconEmail class="w-6 h-6 text-light" />
                                </a>
                                <a aria-label="Chat on WhatsApp"
                                    href="https://wa.me/089636192223?text=I'hallo..!%20Wahyudi" target="_blank">
                                    <IconWa class="w-6 h-6 text-light" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import IconEmail from "./icons/IconEmail.vue";
import IconWa from "./icons/IconWa.vue";
</script>