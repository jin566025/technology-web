<template>
	<div class="content">
		
		<div class="navs">
			<a class="nav">政策</a>
			<a class="nav">></a>
			<a class="nav">详情</a>
		</div>
		<div class="main2 clearfix">
			<div class="section fl" @click="readDetail()">
				<div class="section-banner">
					<img src="../../static/image/consult3.png" class="consult-img" />
				</div>
				<div class="section-text">
					<p>高新技术认定</p>
					<div class="clearfix text-content">
						<div class="text-left fl">60万资金补助</div>
						<div class="text-right fr">税收减免</div>
					</div>
				</div>
				
			</div>
			<div class="section fl">
				<div class="section-banner">
					<img src="../../static/image/consult4.png" class="consult-img" />
				</div>
				<div class="section-text">
					<p>高新技术认定</p>
					<div class="clearfix text-content">
						<div class="text-left fl">60万资金补助</div>
						<div class="text-right fr">税收减免</div>
					</div>
				</div>
				
			</div>
			<div class="section fl">
				<div class="section-banner">
					<img src="../../static/image/consult5.png" class="consult-img" />
				</div>
				<div class="section-text">
					<p>高新技术认定</p>
					<div class="clearfix text-content">
						<div class="text-left fl">60万资金补助</div>
						<div class="text-right fr">税收减免</div>
					</div>
				</div>
				
			</div>
			<div class="section fl">
				<div class="section-banner">
					<img src="../../static/image/consult6.png" class="consult-img" />
				</div>
				<div class="section-text">
					<p>高新技术认定</p>
					<div class="clearfix text-content">
						<div class="text-left fl">60万资金补助</div>
						<div class="text-right fr">税收减免</div>
					</div>
				</div>
				
			</div>
			<div class="section fl">
				<div class="section-banner">
					<img src="../../static/image/consult7.png" class="consult-img" />
				</div>
				<div class="section-text">
					<p>高新技术认定</p>
					<div class="clearfix text-content">
						<div class="text-left fl">60万资金补助</div>
						<div class="text-right fr">税收减免</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="pagination-content">
			<page :total="total" :current-page='current' @pagechange="pagechange"></page>
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
			}
		},
		components:{
			Page
		},
		methods:{
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  	},
		  	readDetail:function(){
		  		this.$router.push({path:'consult-list3-detail?navid='+2});
		  	}
		}
	}
</script>

<style scoped>
	.consult-img{width: 240px;height: 180px;}
	.content{width: 1024px;margin: 0 auto;}
	.navs{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;margin: 20px 0;cursor: pointer;}
	.section{width: 240px;border: 1px solid gainsboro;height: 260px;margin-right: 18px;margin-bottom: 20px;}
	.section:nth-child(4n+4){margin-right: 0;}
	.section-banner{width:240px;height: 180px;background-color: gainsboro;}
	.section-text{height: 70px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;padding-top: 10px;width: 230px;padding-left: 5px;}
	.text-content{height: 24px;line-height: 24px;color: rgba(120, 120, 120, 1);font-size: 14px;font-family: Roboto;margin-top: 16px;}
</style>