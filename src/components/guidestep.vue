<template>
	
<div class = "guide_step">

		<img :src="`/static/` + fileroot + `/`+ index + `.png`"></img> <br>

  <hr>
		<h1>{{step.title}}</h1>
		<p>{{step.details}}</p>

</div>

</template>

<script>

	export default{
		name:'guidestep',
		props:['step', 'fileroot', 'index']
	}


</script>

<style>
		
		.guide_step{

			width:452px;

		}



</style>