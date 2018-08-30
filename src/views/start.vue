<template>
  <div class="home">

  	<div class = "head">
  		<p>a good day is a caffeinated one</p>
    <h1>Let's Fuel your day</h1>
    <div class = "button red" style="width: 234px; height:59px;"> <p style="color:white; margin: auto;">Coming Soon</p> </div>
  	</div>

  		<div class = "image">
  				<img src="/static/start.png">
  		</div>

  </div>
</template>

<style>

		body	{

			margin: 0;
			overflow: hidden;

		}

		.home {
			display: flex;
			flex-direction: column;
			width: 100vw;
			height: 101vh;
		}

  .home p{
				color: #eb4224;
    font-style: italic;
    font-size: 25px;
    line-height: 30pt;
    text-align: center;
    font-weight: lighter;
  }


  .home h1{
  	font-family:"Open Sans";
			font-weight: bold;
			font-size: 55px;
			color: #000000;
			letter-spacing: 14px;
			text-transform: uppercase;
			margin-top:0px;
  }

  .head {
  	flex-grow: 1;
  	padding-top:33px;
  	background-color: #fbf9f5;
  	display: flex;
			flex-direction: column;
			width: 100%;
			align-items: center;
			width: 100%;
  }

  .home img {
  	width:100vw;
  }


</style> 