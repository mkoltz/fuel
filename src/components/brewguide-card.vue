<template>

  <div class="brewguide_card"> 
  <img class="card_image" :src="card.image"></img>
  <hr>
  <p class="brewguide_card_title">{{card.title}}</p>
  <p class="pronounce">{{card.pronounce}}</p></div>
  

</template>



<script>


export default {
  name: 'brewguide-card',
  props:['card']
}

</script>




<style>

</style>