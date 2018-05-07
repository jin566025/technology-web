<template>
	<div class="content">
		<div class="banner"></div>
		<div class="msg-nav clearfix">
			<a class="navs-title inline-block">资讯类型：</a>
			<a class="navs inline-block" @click="changeIndex(index)" v-for="(item,index) in navList" :class="navIndex==index ? 'navs-active':''">{{ item }}</a>
		</div>
		<div class="msg-container2">
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
			</div>
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
			</div>
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
			</div>
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
			</div>
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
			</div>
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
			</div>
			<div class="section2 clearfix">
				<div class="fl section-left fa fa-angle-right"></div>
				<div class="fl section-mid">免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</div>
				<div class="fr section-right">2018-04-18</div>
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
				navList:["不限","行业新闻","最新技术","最新活动"],
				navIndex:0,
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
			}
		},
		components:{
			Page
		},
		
		methods:{
			changeIndex:function(index){
				this.navIndex=index
			},
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  	},
		}
		
	}
</script>

<style scoped>
	@import url("../../static/css/font-awesome.min.css");
	.banner{width: 100%;height: 500px;background-image: url(../../static/image/active5.jpeg);background-repeat: no-repeat;background-size: cover;background-position: center;}
	.msg-nav{width: 1024px;margin: 0 auto;font-family: Roboto;font-size: 16px;color: #101010;padding: 25px 0 15px 0;border-bottom: 1px solid gainsboro;}
	.navs{padding: 0 10px;height: 30px;line-height: 30px;font-size: 14px;margin-right: 40px;border-radius: 5px;cursor: pointer;}
	.navs-active{background-color: #1F93FF;color: #FFFFFF;}
	.msg-container2{width: 1024px;margin: 0 auto;}
	.section2{width: 1004px;margin-left: 20px;border-bottom: 1px dashed darkgray;padding: 15px 0;font-family: Roboto;}
	
	.section-left{font-size:20px ;color: #101010;margin-right: 15px;}
	.section-mid{color: #101010;font-size: 14px;}
	.section-right{color: #8C8C8C;font-size: 14px;}
	.pagination-content{width: 1024px;margin: 20px auto;}
</style>