<template>

  <router-link :to="{name: 'guide', params: {id: card.key}}">
    <div class="brewguide_card"> 
    <img class="card_image" :src=image>
    <hr>
    <p class="brewguide_card_title">{{card.title}}</p>
    <p class="pronounce">{{card.pronounce}}</p></div>
 </router-link>

</template>



<script>


export default {
  name: 'brewguide-card',
  props:['card'],
  data:
    function(){
      return {
        image: `/static/` + this.card.image
      }
    },
}

</script>




<style>

</style>