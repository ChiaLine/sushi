<script setup>

</script>

<template lang="pug">
div(class='w-[75%] h-[80vh] m-auto mt-20 flex')
  div(class='w-[90%]')
    router-view(class='')
  div(class='w-[10%]')
    nav(class='h-full cursor-pointer')
      router-link(to='/' class='hover:bg-yellow-300 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-full') 品牌故事
      router-link(to='/about' class='hover:bg-yellow-100 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-lg') 關於我們
      router-link(to='/menu' class='hover:bg-yellow-300 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-full') 菜單
      router-link(to='/menu1' class='hover:bg-yellow-100 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-lg') 現流刺身さしみ
      router-link(to='/menu2' class='hover:bg-yellow-300 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-full') 炙燒握壽司
      router-link(to='/menu3' class='hover:bg-yellow-100 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-lg') 生魚片丼飯
      router-link(to='/' class='hover:bg-yellow-300 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-full') 手卷
      router-link(to='/' class='hover:bg-yellow-100 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-lg') 烤物
      router-link(to='/' class='hover:bg-yellow-300 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-full')
      router-link(to='/' class='hover:bg-yellow-100 block mb-1 py-2 px-2 border-double border-y-4 border-r-4 border-black rounded-r-lg')
</template>

<style scoped>

</style>
