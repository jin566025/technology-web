<template>
	<div>
		<div class="first-page" v-if="firstPageShow">
			<div class="banner">
				<div class="banner-zanwei"></div>
				<div class="banner-title">
					<p>技术在手，说走就走</p>
					<div class="left-circle"></div>
					<div class="right-circle"></div>
				</div>
				<div class="banner-input clearfix">
					<input class="banner-inp" type="text" placeholder="请输入你需要的技术" />
					<button class="banner-btn">搜索</button>
				</div>
			</div>
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
				firstPageShow:true,
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
				this.firstPageShow=false;
			    this.$router.push({path:'/service/service-detail'})
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
.banner{width: 100%;height: 550px;background-image: url(../../static/img/banner1.jpeg);background-repeat: no-repeat;background-position: center;background-size: cover;}
.section-text,.section-footer{width: 220px;padding: 0 10px;}
.service-img{width: 240px;height: 180px;}

.banner-title{border: 1px solid transparent;height: 70px;line-height: 70px;color: #FFFFFF;font-size: 32px;text-align: center;font-family: Roboto;position: relative;width: 300px;margin: 0 auto;}
.banner-title:after,.banner-title:before{width: 200px;height: 2px;background-color: #FFFFFF;position: absolute;content: " ";top: 34px;}
.banner-title:before{left:-260px;}
.banner-title:after{right:-260px;}
.left-circle,.right-circle{width: 20px;height: 20px;border-radius: 50%;background-color: #FFFFFF;position: absolute;top: 26px;}
.left-circle{left: -60px;}
.right-circle{right: -60px;}
.banner-zanwei{width: 100%;height: 150px;}
.banner-input{width: 100%;text-align: center;font-size: 0;margin-top: 94px;}
.banner-inp{display: inline-block;border: none;width: 634px;height: 60px;line-height: 60px;background-color: #FFFFFF);color: rgba(66, 66, 66, 1);font-size: 20px;text-align: center;font-family: Roboto;}
.banner-btn{display: inline-block;border: none;width: 105px;height: 60px;line-height: 60px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 20px;text-align: center;font-family: Roboto;}

</style>