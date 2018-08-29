<template>
  <div class="guide">

  	<div class = "drink_description">
  			<div id = "guide_hero_card">
  				<img :src="`/static/` + $route.params.root + `/hero.png` " >
  					
  			<div class="rule"><hr></div>		
  				
  			<h1 class = "hero_card_title">{{$route.params.title}}</h1>
  			<p class = "hero_card_pronounce" v-html="$route.params.pronounce"></p>
  		
  		</div>
  		
     <div class = "right_col">
      
      <div class= "description" v-html=details.description> </div>
      <div class = "button_row">

        <router-link class="button back" to="/main" tag='button'>
            <img src="">  
            <p>Back</p>
        </router-link>
        
        <a class="button watch" href="">
          <img src="/static/play_icon.png">  
          <p>Watch</p>
        </a>   

      </div>    
     </div> 
    
		</div>
    
 <div class = "bottom_quote">
      <h1>I followed my Heart</h1>
      <p>and it led me to coffee.</p>
      <img src="/static/fuel-icon-white.png" style="width:45px;">
  </div>  


  <div class = "modal" style="display:none;">
      <video width="1024" controls>
        <source :src="details.video" type="video/MP4">
      </video>
  </div>

  


   <div class="footer"></div>

  
  </div>



</template>


<script>
	
import guidestep from '../components/guidestep.vue';
import card_list from '../data/cards.js';

	export default{
		name: 'guide',
		components:{
			guidestep
		},
		data:function(){
		
			const details = card_list[this.$route.params.id]

			return{
				details
			}
		}

	}



</script>

<style>

.guide{
	width: 100%;

}

.drink_description{
	display: flex;
  padding:40px;
}

.description{
    color: #38110b;
    line-height: 1.8;
    font-size: 17px;
}

	#steps_list{
  display:flex;
}

#guide_hero_card{
	background: linear-gradient(to bottom, #fbf9f5 0%,#fbf9f5 37%,#000000 37%,white 37%,white 100%); /* W3C */
 width: 432px;
 box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
 padding:56px;

}

#guide_hero_card h1{
font-family:"Open Sans";
font-weight: bold;
font-size: 55px;
color: #000000;
letter-spacing: 0;
text-transform: uppercase;
}

#guide_hero_card p{
font-style: italic;
font-size: 30px;
color: #eb4224;
letter-spacing: 0;
line-height: 32px;
}

.rule hr{

	width:130px;
  border: 0;
  height: 6px;
  background: #eb4224;

}

.rule{
	   width: 140px;
}


.right_col{
  margin-top:auto;
  display:flex;
  align-items: flex-end;
  margin-left: 40px;
  flex-direction: column;
}


.button {
  color:white;
  height: 59px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 160px;
}

.back{
  background-color: #38110b;
}

.watch, .red{
  background-color: #eb4224;
}

.button p{
  font-size: 12pt;
}


.button_row{
  margin-top:40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.button img{
  margin-top:auto;
  margin-bottom:auto;
  margin-right:10px;
}

.bottom_quote{

  display: flex;
  flex-direction: column;
  border: solid 2px #38110b;
  margin-top: 40px;
  margin-bottom:40px;
  align-items: center;

}

.bottom_quote h1{
    font-size: 21pt;
    letter-spacing: 8px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 25px 0 0 0;
}

.bottom_quote p{
    color: #eb4224;
    font-style: italic;
    font-size: 25px;
    line-height: 30pt;
    text-align: center;
    font-weight: lighter;
    margin: 0 40px;
}

.bottom_quote img{
  position: relative;
  top:27px;
}

.modal{
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    background-color:rgba(0,0,0,0.4);
}


</style>