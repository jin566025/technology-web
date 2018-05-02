<template>
	<div class="personal-content">
		
		<div class="personal-content-top clearfix">
			<div class="personal-tops1 fl">写</div>
			<div class="personal-tops2 fl">写作（17856323122）</div>
			<div class="personal-tops3 fl">设计师</div>
			<div class="personal-tops3 fl">846213299999@qq.com</div>
			<div class="personal-tops3 fl">2018-03-30加入协会</div>
		</div>
		
		<div class="personal-main clearfix">
			<div class="personal-left fl">
				<router-link tag="div" class="personal-nav" :to="item.path"  v-for="(item,index) in navList">{{ item.name }}</router-link>
			</div>
			<div class="personal-right fr">
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
					{name:'我的消息',border:true,path:'/personal/personal-nav1'},
					{name:'咨询的消息',border:false,path:'/personal/personal-nav2'},
					{name:'咨询的技术',border:true,path:'/personal/personal-nav3'},
					{name:'发布的技术',border:false,path:'/personal/personal-nav4'},
					{name:'发布的需求',border:true,path:'/personal/personal-nav5'},
					{name:'报名活动',border:false,path:'/personal/personal-nav6'},
					{name:'我的收藏',border:true,path:'/personal/personal-nav7'},
					{name:'我的订阅',border:true,path:'/personal/personal-nav8'},
					{name:'设置',border:false,path:'/personal/personal-nav9'}
				]
			}
		}
	}
</script>

<style scoped>
	.zanwei{width: 100%;height: 100px;}
	.personal-content{width: 1024px;margin: 0 auto;margin-top: 40px;}
	.personal-content-top{width: 1024px;height: 110px;line-height: 110px;text-align: center;border: 1px solid rgba(187, 187, 187, 1);}
	.personal-tops1{width: 80px;height: 80px;margin-top: 15px;margin-left: 20px;margin-right: 20px;line-height:80px;border-radius: 50%;color: #FFFFFF;font-size: 40px;text-align: center;font-family: Roboto;background-color: #009688 ;}
	.personal-tops2{width: 200px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: center;font-family: Roboto;}
	.personal-tops3{width: 220px;color: #8C8C8C;font-size: 16px;text-align: center;font-family: Roboto;}
	.personal-left{width: 130px;}
	.personal-main{margin-top: 40px;}
	.personal-nav{width: 130px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: center;font-family: Roboto;height: 50px;line-height: 50px;cursor: pointer;}
	.no-border{border-bottom: none;padding-bottom: 0;}

	.personal-right{width: 860px;border: 1px solid gainsboro;}
	.router-link-active{color: #FFFFFF;background-color: #1F93FF;font-weight: bold;}
</style>