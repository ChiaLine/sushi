<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template lang="pug">
div(class='w-full h-full border-double border-4 border-black grid grid-cols-2')
  HelloWorld(msg='壽司嬤')
  TheWelcome
</template>

<style>
@media (min-width: 1024px) {

}
</style>
