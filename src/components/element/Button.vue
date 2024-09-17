<template>
    <div>
       <button class="btn">{{ btnText }}</button>
    </div>
</template>

<script setup>
const props = defineProps<{
    btnText:{
        type:String,
        default:'Button'
    }
}>()
</script>

<style lang="scss" scoped>
 .btn{
    padding: 12px 30px;
    border-radius: 30px;
    
 }
</style>