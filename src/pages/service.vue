<template>
	<div>
		
			<div class="banner"></div>
			<div class="content">
				<div class="type">
					<div class="types clearfix">
						<div class="types-left inline-block">所属类型：</div>
						<div class="types-right inline-block clearfix" v-for="(item,index) in type2List">
							<div class="types-right2" @click="addClass1(index)" :class="active_index1==index ? 'types-right2-active':''" >{{ item }}</div>
						</div>
					</div>
					<div class="types clearfix">
						<div class="types-left inline-block">所属行业：</div>
						<div class="types-right inline-block clearfix" v-for="(item,index) in industryList">
							<div class="types-right2" @click="addClass1(index)" :class="active_index1==index ? 'types-right2-active':''" >{{ item }}</div>
						</div>
					</div>
					<div class="types clearfix">
						<div class="types-left inline-block">来源地：</div>
						<div class="types-right inline-block clearfix"  v-for="(item,index) in countryList">
							<div class="types-right2"  @click="addClass2(index)" :class="active_index2==index ? 'types-right2-active':''">{{ item }}</div>
						</div>
					</div>
					<div class="types clearfix">
						<div class="types-left inline-block">专利：</div>
						<div class="types-right inline-block clearfix" v-for="(item,index) in typeList">
							<div class="types-right2"  @click="addClass3(index)" :class="active_index3==index ? 'types-right2-active':''">{{ item }}</div>
						</div>
					</div>
				</div>
				
				<div class="section-content clearfix">
					
					<div class="section fl" @click="toDetail()">
						<div class="section-img">
							<img src="../../static/image/service1.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service2.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service3.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service4.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service5.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service6.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service4.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service5.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
						</div>
					</div>
					<div class="section fl">
						<div class="section-img">
							<img src="../../static/image/service6.jpeg" class="service-img" />
						</div>
						<div class="section-text">
							<p class="section-title2">智能家用服务机器人</p>
							<p class="section-desc">智能、环保的智能家用服务智能家用服智能家用服务智能家用服务人，是一款环境友好型产品。</p>
						</div>
						<div class="section-footer clearfix">
							<div class="section-footer-left fl">中国</div>
							<div class="section-footer-left fr">生试阶段</div>
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
				industryList:["不限","服务类","商城类","应用类"],
				countryList:["不限","中国","新西兰","瑞典","挪威"],
				typeList:["不限","有专利","无专利"],
				type2List:["不限","技术","需求"],
				active_index1:"0",
				active_index2:"0",
				active_index3:"0",
			
				navs_index:"0"
			}
			
		},
		components:{
			Page
		},
		methods:{
			addClass1:function(index){
				this.active_index1 = index;
			},
			addClass2:function(index){
				this.active_index2 = index;
			},
			addClass3:function(index){
				this.active_index3 = index;
			},
			navsClick:function(index){
				this.navs_index = index;
			},
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  	},
			toDetail:function(){
				this.$router.push({path:'service-detail?navid='+1});
			}
		}
	}
</script>

<style scoped>
.content{width: 1024px;margin: 0 auto;}
.type{margin-bottom: 30px;}
.types{padding: 18px 0 ;border-top:1px solid gainsboro ;}
.types:first-child{border-top: none;}
.types-left{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;width: 90px;}
.types-right2{height: 30px;line-height:30px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;display: inline-block;cursor: pointer;margin: 0 20px;width: 50px;text-align: center;}
.types-right2-active{cursor: pointer;color: #FFFFFF;font-size: 14px;font-family: Roboto;width: 50px;border-radius: 5px;background-color: #1F93FF;}
.navs{width: 200px;height: 50px;line-height: 50px;font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid gainsboro;cursor: pointer;}
.navs-active{color: rgba(255, 152, 0, 1);border: 1px solid rgba(255, 152, 0, 1)}
.nav-content{margin-top: 26px;margin-bottom: 22px;border-bottom: 1px solid gainsboro ;}
.section{width: 240px;height: 300px;line-height: 20px;border-radius: 5px;text-align: center;border: 1px solid rgba(187, 187, 187, 1);margin-right: 18px;margin-bottom: 40px;}
.section:nth-child(4n+4){margin-right: 0;}
.section-img{width: 240px;height: 180px;background-color: gainsboro;}
.section-title2{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;margin: 10px 0;}
.section-desc{color: rgba(140, 140, 140, 1);font-size: 14px;text-align: left;font-family: Roboto;margin-bottom: 10px;height: 40px;line-height: 20px;overflow: hidden;text-overflow: ellipsis;}
.section-footer-left{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
.banner{width: 100%;height: 550px;background-image: url(../../static/img/banner2.png);background-repeat: no-repeat;background-position: center;background-size: cover;}
.section-text,.section-footer{width: 220px;padding: 0 10px;}
.service-img{width: 240px;height: 180px;}
</style>