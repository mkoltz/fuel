<template>

  
 <div class="saying_card"> 
    
    <div class = "internal_box">
      <h1 v-html="card.title"></h1>
         <hr>
      <p class="saying" v-html="card.pronounce"></p>

    </div>
  </div>


</template>



<script>


export default {
  name: 'saying-card',
  props:['card'],
  
}

</script>




<style>

.saying_card{
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 500px;
  align-items: center;
  margin:10px;
  
}


.internal_box{
  padding: 25px;
  height: 70%;
  width: 70%;
  border-style : Solid;
  border-color : #38110b;
  border-color : rgba(0, 0, 0, 1);
  border-width : 2px;
  margin: auto;
}

.saying_card hr{
  width:40%;
  border: 0;
  height: 4px;
  background: #eb4224;
  margin-top:25px;
}

.saying {
  color: #eb4224;
  font-style: italic;
  font-size: 24px;
  line-height: 1.73;
}

.saying_card h1{
  font-size: 26pt;
  font-weight: 700;
  text-transform: uppercase;
  margin: 15px 0 0 0;
  color: #38110b
}

</style>