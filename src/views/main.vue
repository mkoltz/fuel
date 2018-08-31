<template>
  
<div id="brewguide_list">
  			<div class = "header" style="margin-top:60px;">
          <img src="/static/fuel-icon-white.png">
          <h1>You're Ultimate Brew Guide</h1>
          <p>Coffee is the fuel that creates a cross-cultural spark, bringing people together to discuss, collaborate, and form community.</p>
      </div> 
  

     <component
       v-for="(n, index) in 6"
       v-bind:is="card_list[index].type"
       v-bind:card="card_list[index]"
       v-bind:key="card_list[index].id">       
     </component>

    <div class = "divider">
      <hr class = "vertical_hr"/>
    </div>

    <div class = "header2">
      <img src="/static/fuel-icon-white.png" style="width:42px;">
      <h1>Coffee 101</h1>
      <p>Whether you have been slinging espresso for years or just begining, these videos are a guide to take your skills to another level.</p> 
    </div>

    <component
       v-for="(n, index) in 6"
       v-bind:is="card_list[index+6].type"
       v-bind:card="card_list[index+6]"
       v-bind:key="card_list[index+6].id">       
     </component>

     <div class = "footer"></div>

</div>

</template>

<script>
	import card_list from '../data/cards.js';
	import brewguideCard from '../components/brewguide-card.vue';
  import sayingCard from '../components/saying-card.vue';


export default {
  name: 'app',
  components: {
    brewguideCard,
    sayingCard
  },
  data:function () {
    return {
      card_list
    }
  },
  methods:{
    created: function(){
      idle.start();
    }
  }
}

</script>

<style>
  #brewguide_list{
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
}

.divider {
  flex: 100%;
  height:192px;

}

.vertical_hr{
    width: 2px;
    height: 100%;
    border: 0;
    background: #38110b;
}


.header, .header2{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 77px;
    border: 2px solid #38110b;
}

.header2{
  border:none;
}

.header img{
    position: relative;
    top: -32px;
    width: 45px;
}

.header h1, .header2 h1{
  font-size: 29pt;
  letter-spacing: 8px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 0 0;
}

.header p, .header2 p{
    color: #eb4224;
    font-style: italic;
    font-size: 25px;
    line-height: 30pt;
    text-align: center;
    font-weight: lighter;
}


.footer {

  width: 1024px;
  height: 89px;
  background-color: #fbf9f5;
  margin-top: 30px;

}


</style>