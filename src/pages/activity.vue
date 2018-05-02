<template>
	<div class="content">
		
		<div class="banner">
			<p class="banner-text1">行业热门活动</p>
			<p class="banner-text2">汇聚全国各种技术</p>
		</div>
		<div class="main">
			<div class="types clearfix">
				<div class="fl types2">活动类型：</div>
				<div class="type-content clearfix fl">
					<a class="type inline-block" @click="changeType(index)" v-for="(item,index) in typeList" :class="active_index==index ? 'type-active':''">{{ item }}</a>
				</div>
			</div>
			<div class="section-content">
				<div class="section clearfix" @click="readDetail()">
					<div class="section-left fl">
						<div class="section-left-content">
							<img src="../../static/image/active1.jpeg" class="activity-img" />
						</div>
						<div class="section-left-bottom">
							<p class="section-type">进行中</p>
						</div>
					</div>
					<div class="section-right fr">
						<p class="section-p1">【免费领票】新型技术分享交流会</p>
						<p class="section-p2">活动时间：2018.03.30——2018.4.2</p>
						<p class="section-p3">简介：</p>
						<p class="section-p4">新型会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会</p>
						<button class="btn">我要报名</button>
					</div>
				</div>
				<div class="section clearfix">
					<div class="section-left fl">
						<div class="section-left-content">
							<img src="../../static/image/active2.jpeg" class="activity-img" />
						</div>
						<div class="section-left-bottom">
							<p class="section-type">进行中</p>
						</div>
					</div>
					<div class="section-right fr">
						<p class="section-p1">【免费领票】新型技术分享交流会</p>
						<p class="section-p2">活动时间：2018.03.30——2018.4.2</p>
						<p class="section-p3">简介：</p>
						<p class="section-p4">新型会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会</p>
						<button class="btn">我要报名</button>
					</div>
				</div>
				<div class="section clearfix">
					<div class="section-left fl">
						<div class="section-left-content">
							<img src="../../static/image/active3.jpeg" class="activity-img" />
						</div>
						<div class="section-left-bottom">
							<p class="section-type">进行中</p>
						</div>
					</div>
					<div class="section-right fr">
						<p class="section-p1">【免费领票】新型技术分享交流会</p>
						<p class="section-p2">活动时间：2018.03.30——2018.4.2</p>
						<p class="section-p3">简介：</p>
						<p class="section-p4">新型会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会</p>
						<button class="btn">我要报名</button>
					</div>
				</div>
				<div class="section clearfix">
					<div class="section-left fl">
						<div class="section-left-content">
							<img src="../../static/image/active4.jpeg" class="activity-img" />
						</div>
						<div class="section-left-bottom">
							<p class="section-type">进行中</p>
						</div>
					</div>
					<div class="section-right fr">
						<p class="section-p1">【免费领票】新型技术分享交流会</p>
						<p class="section-p2">活动时间：2018.03.30——2018.4.2</p>
						<p class="section-p3">简介：</p>
						<p class="section-p4">新型会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会</p>
						<button class="btn">我要报名</button>
					</div>
				</div>
				<div class="section clearfix">
					<div class="section-left fl">
						<div class="section-left-content">
							<img src="../../static/image/active5.jpeg" class="activity-img" />
						</div>
						<div class="section-left-bottom">
							<p class="section-type">进行中</p>
						</div>
					</div>
					<div class="section-right fr">
						<p class="section-p1">【免费领票】新型技术分享交流会</p>
						<p class="section-p2">活动时间：2018.03.30——2018.4.2</p>
						<p class="section-p3">简介：</p>
						<p class="section-p4">新型会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会新型技术分享交流会</p>
						<button class="btn">我要报名</button>
					</div>
				</div>
			</div>
			<div class="pagination-content">
				<page :total="total" :current-page='current' @pagechange="pagechange"></page>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import Page from '../components/page'
	export default{
		data(){
			return {
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
				typeList:["不限","论坛","讲座","分享"],
				active_index:"0"
			}
		},
		components:{
			Page
		},
		methods:{
			changeType:function(index){
				this.active_index = index
			},
			readDetail:function(){
				this.$router.push({path:'activity-detail?navid='+3});
			},
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  	},
		}
	}
</script>

<style scoped>
	.banner{width: 100%;height: 500px;background-image: url(../../static/img/banner2.png);background-position: center;background-size: cover;background-repeat: no-repeat;}
	.banner-text1{padding-top: 190px;height: 58px;line-height: 58px;color: rgba(16, 16, 16, 1);font-size: 40px;text-align: center;font-family: Roboto;}
	.banner-text2{height: 24px;line-height: 24px;color: rgba(0, 0, 0, 1);font-size: 16px;text-align: center;font-family: Roboto;margin-top: 64px;}
	.main{width: 1024px;margin: 0 auto;min-width: 1024px;}
	.types{margin-top: 50px;border-bottom: 1px solid gainsboro;padding-bottom: 10px;}
	.types2{width: 90px;height: 30px;line-height: 30px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;}
	.type{width: 50px;height: 30px;line-height: 30px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;margin: 0 10px;cursor: pointer;}
	.type-active{width: 50px;height: 30px;line-height: 30px;border-radius: 5px;background-color: rgba(31, 147, 255, 1);text-align: center;color:#FFFFFF;}
	.section-left{width: 240px;position: relative;}
	.section-right{width: 760px;}
	.section-left-content{height: 180px;width: 240px;}
	.section-left-bottom{height: 40px;position: absolute;width: 240px;z-index: 2;background-color: rgba(0,0,0,0.4);bottom: 0;line-height: 40px;}
	.section{margin-top: 40px;text-align: left;}
	.section-p1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;}
	.section-p2{height: 24px;line-height: 24px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;}
	.section-p3{height: 30px;line-height: 30px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;}
	.section-p4{height: 60px;line-height: 20px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;overflow: hidden;text-overflow: ellipsis;}
	.btn{width: 86px;height: 30px;line-height: 30px;border-radius: 4px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;margin-top: 14px;border: 1px solid rgba(255, 255, 255, 1);}
	.section-type{color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Roboto;}
	.activity-img{width: 240px;height: 180px;}
	.zanwei{height: 160px;width: 100%;}
	.pagination-content{margin-top: 30px;}
</style>