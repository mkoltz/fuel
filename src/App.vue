<template>
<div id = "app">
      <div class = "header">
          <img src ="/img/F.png">
          <h1>You're Ultimate Brew Guide</h1>
          <p>These guides serve as a good place to start.<br>
          Start with learning how the espresso machine works.</p>

      </div> 

     <brewguide-card
     v-for="item in card_list"
     v-bind:card="item"
     v-bind:key="item.id">       
     </brewguide-card>
</div>
</template>



<script>

import card_list from './data/cards.js';
import brewguideCard from './components/brewguide-card.vue';


export default {
  name: 'app',
  components: {
    brewguideCard
  },
  data:
    function () {
    return {
      card_list
    }
  }
}

</script>



<style>
#app{
  display: flex;
  font-family: "Open Sans";
  align-content: flex-start;
  flex-wrap: wrap;

}

.brewguide_card{
  background: linear-gradient(to bottom, #f1f5f4 0%,#f1f5f4 50%,#000000 50%,white 50%,white 100%); /* W3C */
  display: flex;
    flex-direction: column;
    width: 315px;
    height: 500px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    align-items: center;
    margin:10px;
}

.card_image{

}

.header{
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px;
    border: 2px solid #A0945A;
}

.header img{
    position: relative;
  top: -20px;
}

.header h1{
  font-size: 40px;
 text-transform: uppercase;
 margin: 15px 0 0 0;
}

.header p{
    color: #A0945A;
    font-style: italic;
    font-size: 18px;
    padding: 0 70px;
    text-align: center;
    font-weight: 300;
}


.brewguide_card_title{
font-family: "Open Sans";
font-size: 22px;
color: #000000;
letter-spacing: 0;
text-align: center;
text-transform: uppercase;
}

.pronounce{
  /* cap·puc·ci·no: */
font-family: "Open Sans";
font-style: italic;
font-size: 30px;
color: #A0945A;
letter-spacing: 0;
text-align: center;
line-height: 32px;
}

.brewguide_card hr{
        width:40%;
      border: 0;
    height: 4px;
    background: #A0945A;
}
</style>
