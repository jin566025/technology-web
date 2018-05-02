<template>
	<div class="main">
		<m-header></m-header>
		<keep-alive>
	    	<router-view></router-view>
	    </keep-alive>
		<m-footer></m-footer>
		<float-nav></float-nav>
	</div>
</template>

<script>
import MHeader from './components/m-header'
import MFooter from './components/m-footer'
import FloatNav from './components/float-nav'
export default {
	data(){
		return {
			
		}
		
	},
	components:{
	   MHeader,
	   MFooter,
	   FloatNav,
	},
	methods:{
	  
	}
}
</script>

<style >
@import url("../static/css/common.css");
.main{width: 100%;min-width: 1440px;}

</style>