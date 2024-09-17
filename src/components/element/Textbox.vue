<template>
    <div>
        <h3 class="font-extrabold"> {{ props.title }}</h3>
        <p class=" leading-normal">{{ props.description }}</p>
    </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title:{
        type:String,
        default:'Sebuah Judul'
    },
    description:{
         type:String,
        default:'Sebuah Descripsi'
    }
  }>()
</script>

<style lang="scss" scoped>

</style>