<template>
	<div class="content">
		<div class="first-page" v-if="firstPageShow">
			<div class="banner"></div>
			<div class="main2">
				<div class="nav clearfix">
					<div class="nav-title">政策类别：</div>
					<div class="navs" v-for="(item,index) in navList" :class="index==navIndex ? 'nav-active':''" @click="changeIndex(index)">{{ item }}</div>
				</div>
				<div class="sections clearfix">
					<div class="section fl" @click="toDetail()">
						<div class="section-banner"></div>
						<div class="section-text">
							<p class="name">高新技术认定</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">60万资金补助</a>
								<a class="desc-a2 fr">税收减免</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult4.png);"></div>
						<div class="section-text">
							<p class="name">软件著作权</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">60万资金补助</a>
								<a class="desc-a2 fr">税收减免</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult5.png);"></div>
						<div class="section-text">
							<p class="name">万科技术有限公司</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">数十万补贴</a>
								<a class="desc-a2 fr">项目扶持</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult3.png);"></div>
						<div class="section-text">
							<p class="name">网易开发运营团队</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">数十万补贴</a>
								<a class="desc-a2 fr">项目扶持</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult2.png);"></div>
						<div class="section-text">
							<p class="name">高新技术认定</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">60万资金补助</a>
								<a class="desc-a2 fr">税收减免</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult5.png);"></div>
						<div class="section-text">
							<p class="name">高新技术认定</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">60万资金补助</a>
								<a class="desc-a2 fr">税收减免</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult4.png);"></div>
						<div class="section-text">
							<p class="name">高新技术认定</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">60万资金补助</a>
								<a class="desc-a2 fr">税收减免</a>
							</p>
						</div>
					</div>
					<div class="section fl">
						<div class="section-banner" style="background-image: url(./static/image/consult3.png);"></div>
						<div class="section-text">
							<p class="name">高新技术认定</p>
							<p class="desc clearfix">
								<a class="desc-a1 fl">60万资金补助</a>
								<a class="desc-a2 fr">税收减免</a>
							</p>
						</div>
					</div>
				</div>
				<div class="pagination-content">
					<page :total="total" :current-page='current' @pagechange="pagechange"></page>
				</div>
			</div>
		</div>
		<div class="second-page" v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Page from '../components/page'
	export default{
		data(){
			return {
				navList:["不限","最新政策","技术政策","证书授予"],
				navIndex:0,
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
		        firstPageShow:true
			}
		},
		components:{
			Page
		},
		methods:{
			changeIndex:function(index){
				this.navIndex=index;
			},
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  	},
			toDetail:function(){
				this.firstPageShow=false;
			    this.$router.push({path:'/policy/policy-detail'})
			},
			watchHref:function(){
				var href = window.location.href;
				var match = /\b(detail)\b/
		    	if(match.test(href)){
					this.firstPageShow=false;
				}else{
					this.firstPageShow=true;
				}
				console.log(this.firstPageShow)
			}
		},
		created(){
			this.watchHref()
		},
		watch:{
			$route(){
		    	this.watchHref();
		    	console.log(this.firstPageShow)
		    }
		}
	}
</script>

<style scoped>
	.banner{width: 100%;height: 500px;background-image: url(../../static/img/banner2.jpeg);background-repeat: no-repeat;background-position: center;background-size: cover;}
	
	.main2{width: 1024px;margin: 0 auto;}
	.nav{margin-top: 26px;padding-bottom: 10px;border-bottom: 1px solid #BBBBBB;}
	.nav-title{display: inline-block;color: #101010 ;font-family: Roboto;padding: 5px 10px;font-size: 14px;height: 30px;line-height: 30px;}
	.navs{display: inline-block;color: #101010 ;font-family: Roboto;padding: 0 10px;font-size: 14px; margin-right: 40px;border-radius: 5px;height: 30px;line-height: 30px;cursor: pointer;}
	.nav-active{background-color: #1F93FF;color: #FFFFFF;}
	.section{width: 240px;height: 260px;margin-right: 21px;margin-top: 16px;text-align: left;}
	.section-banner{width: 240px;height: 180px;background-image: url(../../static/image/active8.jpeg);background-size: cover;background-position: center;background-repeat: no-repeat;}
	.section:nth-child(4n+4){margin-right: 0;}
	.section-text{height: 70px;border: 1px solid #BBBBBB;width: 228px;padding: 5px;}
	.name{color: #101010;font-family: Roboto;font-size: 16px;margin-bottom: 16px;height: 30px;line-height: 30px;}
	.desc{color: #787878;font-family: Roboto;font-size: 14px;}
	.pagination-content{margin-top: 34px;}
</style>