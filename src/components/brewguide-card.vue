<template>

  <router-link :to="{name: 'guide', params: {id: card.id, title: card.title, pronounce: card.pronounce, root:card.key}}">
    <div class="brewguide_card"> 
    <img class="card_image" :src=image>
    <hr>
    <p class="brewguide_card_title">{{card.title}}</p>
    <p class="pronounce" v-html="card.pronounce"></p></div>
 </router-link>

</template>



<script>


export default {
  name: 'brewguide-card',
  props:['card'],
  data:
    function(){
      return {
        image: `/static/` + this.card.key + `/card.png`
      }
    },
}

</script>




<style>

.brewguide_card{
  background: linear-gradient(to bottom, #fbf9f5 0%,#fbf9f5 50%,#000000 50%,white 50%,white 100%); /* W3C */
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 500px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
  align-items: center;
  margin:10px;
}

.brewguide_card_title{
font-family:"Open Sans";
font-weight: bold;
font-size: 22px;
color: #000000;
letter-spacing: 0;
text-align: center;
text-transform: uppercase;
}

.brewguide_card hr{
  width:40%;
  border: 0;
  height: 4px;
  background: #eb4224;
}


.pronounce{
  /* cap·puc·ci·no: */

font-style: italic;
font-size: 30px;
color: #eb4224;
letter-spacing: 0;
text-align: center;
line-height: 32px;
}


</style>