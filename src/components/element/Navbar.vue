<template>
    <div class="navbar">
      <div class="container">
        <div class="flex justify-between items-center">
            <img src="/logo.svg" alt="">
            <div class="flex gap-4 items-center">
                <a href="mailto:hallo.anewahyudi@gmail.com">
                    <IconEmail class="w-6 h-6 text-primary" />
                </a>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/089636192223?text=I'hallo..!%20Wahyudi" target="_blank">
                    <IconWa class="w-6 h-6 text-primary" />
                </a >
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import IconWa from '../icons/IconWa.vue';
import IconEmail from '../icons/IconEmail.vue';


</script>

<style lang="scss" scoped>
.navbar{
    @apply bg-light py-3 
}
</style>