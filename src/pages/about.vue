<template>
	<div class="content">
		<div class="banner">
			<p class="banner-text1">行业热门活动</p>
			<p class="banner-text2">汇聚全国各种技术</p>
		</div>
		<div class="main clearfix">
			<div class="main-left fl">
				<router-link  tag="div" class="main-left-nav" @click="changeIndex(index)" :to="item.path" v-for="(item,index) in navList">{{ item.name }}</router-link>
			</div>
			<div class="main-right fr">	
			    <router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				navList:[
					{"name":"公司简介","path":"/about/about1"},
					{"name":"优势与服务","path":"/about/about2"},
					{"name":"发展中心","path":"/about/about3"}
				],
				nav_index:"0"
			}
		},
		
		methods:{
			changeIndex:function(index){
				this.nav_index = index
			}
		}
	}
</script>

<style scoped>
	.banner{width: 100%;height: 500px;background-image:url(../../static/img/banner2.png);background-position: center;background-size: cover;background-repeat: no-repeat;}
	.banner-text1{padding-top: 190px;height: 58px;line-height: 58px;color: rgba(16, 16, 16, 1);font-size: 40px;text-align: center;font-family: Roboto;}
	.banner-text2{height: 24px;line-height: 24px;color: rgba(0, 0, 0, 1);font-size: 16px;text-align: center;font-family: Roboto;margin-top: 64px;}
	.main{width: 1024px;margin: 0 auto;min-width: 1024px;margin-top: 40px;}
	.main-left-nav{width: 200px;height: 50px;line-height: 50px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;cursor: pointer;}
	.router-link-active{background-color: rgba(220, 220, 220, 1);}
	
	.main-left{width: 200px;}
	.main-right{border: 1px solid gainsboro;padding-bottom: 60px;width: 800px;}
	
</style>