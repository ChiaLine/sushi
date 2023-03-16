<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template lang="pug">
div(class='w-full h-full bg-blue-50')
  div(class='m-5 flex justify-center items-center bg-blue-50')
    img(alt='logo' src='@/assets/wei120322.jpg' class='w-40 border-double border-2 border-black rounded-full')
    div(class='ml-5 text-base')
      p(class='mb-1 text-xl') {{ msg }}
        // TODO: icon
        //- i(class="icofont-facebook")
        a(target='_blank' href='https://www.facebook.com/wei120322' class='ml-1 p-2 text-blue-600 hover:bg-amber-200') FB粉絲團
      p(class='mb-1') 聯絡電話： 0917-819-904
      p(class='mb-1') 營業時間： 11:30 ~ 14:00 / 17:30 ~ 21:30
      p(class='mb-1') 地址： 新北市中和區光華街45號
  iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.890818763918!2d121.50338085088123!3d25.003825645575205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9b12f9101cd%3A0x815bd5e96df3608d!2z5aO95Y-45ayk!5e0!3m2!1szh-TW!2stw!4v1678962000821!5m2!1szh-TW!2stw"
  class='w-full h-[500px] mt-2'
  )
</template>

<style scoped>
@media (min-width: 1024px) {

}
</style>
