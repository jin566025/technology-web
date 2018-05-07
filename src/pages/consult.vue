<template>
	<div>
		<div class="first-page" v-if="firstPageShow">
			<div class="banner">
				<div class="banner-zanwei"></div>
				<div class="banner-title">
					<p>有问题，找专家</p>
					<div class="left-circle"></div>
					<div class="right-circle"></div>
				</div>
				<div class="banner-input clearfix">
					<input class="banner-inp" type="text" placeholder="请输入你的专家顾问" />
					<button class="banner-btn">搜索</button>
				</div>
			</div>
			<div class="consult-content">
				<div class="index-container">
					
					<div class="section">
						<div class="section-title">入住专家</div>
						<div class="read-more clearfix">
							<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
							<div class="inline-block">
								<a class="read-more-a" @click="lookAll1()">查看全部</a>
								<img class="read-more-img" src="../../static/img/to-right2.png" />
							</div>
						</div>
						<div class="section-content clearfix">
							<div class="section-content-parts inline-block" @click="toDetail1()">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult1.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">张晓林</a>
										<a class="section-text2">研究员</a>
									</p>
									<p>
										<a class="section-text3">Java开发</a>
										<a class="section-text3">PHP开发</a>
										<a class="section-text3">web前端</a>
									</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult2.png" class="consult-img" />
								</div>
							
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">马智骁</a>
										<a class="section-text2">博士</a>
									</p>
									<p>
										<a class="section-text3">HTML</a>
										<a class="section-text3">数据库</a>
										<a class="section-text3">服务器运维</a>
									</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult3.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">郭大志</a>
										<a class="section-text2">博导</a>
									</p>
									<p>
										<a class="section-text3">HTML</a>
										<a class="section-text3">自动化测试</a>
										<a class="section-text3">服务器运维</a>
									</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult1.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">蔡峰</a>
										<a class="section-text2">教授</a>
									</p>
									<p>
										<a class="section-text3">安卓开发</a>
										<a class="section-text3">iOS 开发</a>
		
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="section">
						<div class="section-title">合作机构</div>
						<div class="read-more clearfix">
							<div class="read-more-p inline-block">汇聚全国顶级的研究技术机构</div>
							<div class="inline-block">
								<a class="read-more-a" @click="lookAll2()">查看全部</a>
								<img class="read-more-img" src="../../static/img/to-right2.png" />
							</div>
						</div>
						<div class="section-content clearfix">
							<div class="section-content-parts inline-block"  @click="toDetail2()">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult4.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">上海科技大学</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult5.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">阿里巴巴</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult6.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">万科技术有限公司</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult4.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">网易开发运营团队</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult4.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">上海科技大学</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult5.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">阿里巴巴</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult6.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">万科技术有限公司</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult4.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type1">
									<p class="section-title-name">网易开发运营团队</p>
								</div>
							</div>
						</div>
						
					</div>
					<!--<div class="section">
						<div class="section-title">亲民政策</div>
						<div class="read-more clearfix">
							<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
							<div class="inline-block">
								<a class="read-more-a" @click="lookAll3()">查看全部</a>
								<img class="read-more-img" src="../../static/img/to-right2.png" />
							</div>
						</div>
						<div class="section-content clearfix">
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult6.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">高新技术认定</a>
									</p>
									<p>
										<a class="section-text3">60万资金补助</a>
										<a class="section-text3">税收减免</a>
		
									</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult7.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">软件著作</a>
									</p>
									<p>
										<a class="section-text3">数十万补贴</a>
										<a class="section-text3">项目扶持</a>
		
									</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult8.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">研发费用加计扣除</a>
									</p>
									<p>
										<a class="section-text3">60万资金补助</a>
										<a class="section-text3">税收减免</a>
		
									</p>
								</div>
							</div>
							<div class="section-content-parts inline-block">
								<div class="section-content-parts-img">
									<img src="../../static/image/consult6.png" class="consult-img" />
								</div>
								<div class="section-content-parts-text text-type2">
									<p>
										<a class="section-text1">上海市专利试点企业认定</a>
									</p>
									<p>
										<a class="section-text3">60万资金补助</a>
										<a class="section-text3">税收减免</a>
		
									</p>
								</div>
							</div>
						</div>
					</div>-->
				</div>
			</div>
		</div>
		<div class="second-page" v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return {
				firstPageShow:true
			}
		},
		methods:{
			lookAll1:function(){
				this.firstPageShow=false;
			    this.$router.push({path:'/consult/consult-list1'})
			},
			lookAll2:function(){
				this.firstPageShow=false;
				this.$router.push({path:'/consult/consult-list2'});
			},
			toDetail1:function(){
				this.firstPageShow=false;
				this.$router.push({path:'/consult/consult-list1/consult-list1-detail'});
			},
			toDetail2:function(){
				this.firstPageShow=false;
				this.$router.push({path:'/consult/consult-list2/consult-list2-detail'});
			},
			watchHref:function(){
				var href = window.location.href;
				var match = /\b(consult-)\b/
		    	if(match.test(href)){
					this.firstPageShow=false;
				}else{
					this.firstPageShow=true;
				}

			}
		}
		,
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
	
.index-container{width: 1440px;margin: 0 auto;}
.index-container-title{width: 1020px;margin-left: 210px;margin-top: 40px;}
.title-section{margin-right: 72px;vertical-align: middle;width: 198px;height: 100px;line-height: 20px;border-radius: 5px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);}
.title-section:last-child{margin-right: 0;}
.title-section-left{width: 50px;height:50px;vertical-align: middle;margin: 0 10px;}
.title-section-right{width: 110px;vertical-align: middle;height: 100px;}
.title-section-p1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: center;font-family: Roboto;margin-top: 24px;}
.title-section-p2{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;}
.section{width: 1020px;margin: 0 auto;text-align: center;margin-top: 50px;}
.section-title{height: 44px;line-height: 44px;color: rgba(16, 16, 16, 1);font-size: 30px;text-align: center;font-family: Roboto;position: relative;}
.section-title:before,.section-title:after{content: '';display: inline-block;background:darkgray;width: 70px;height: 2px;vertical-align: middle;}
.section-title:before{margin-right: 20px;}
.section-title:after{margin-left: 20px;}
.read-more{text-align: center;margin-top: 24px;}
.read-more-img{height: 14px;width:14px;vertical-align: middle;cursor: pointer;}
.read-more-a{height: 24px;line-height: 24px;color: #969696;font-size: 14px;text-align: center;font-family: Roboto;vertical-align: middle;cursor: pointer;}
.read-more-p{height: 24px;line-height: 24px;color: #969696;font-size: 14px;text-align: center;font-family: Roboto;vertical-align: middle;margin-right: 30px;}
.section-content{margin-top: 30px;font-size: 0;text-align: left;}
.section-content-parts{width: 240px;height: 260px;border: 1px solid #BBBBBB;margin-right: 16px;vertical-align: middle;margin-bottom: 20px;}
.section-content-parts:nth-child(4n+4){margin-right: 0;}
.section-content-parts-img{width: 240px;height: 180px;background-color: darkgray;}
.section-content-parts-text{height: 80px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Microsoft Yahei;}
.section-title-name{line-height:40px;width: 220px;padding: 0 10px;font-size: 16px;}

.text-type2{text-align: left;}
.section-text1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;margin:0 10px;}
.section-text2{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
.section-text3{height: 24px;line-height: 24px;color: rgba(120, 120, 120, 1);font-size: 14px;font-family: Roboto;margin:0 10px;}
.text-type2 p:nth-child(1){margin-top:10px;}
.text-type2 p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.banner{width: 100%;height: 550px;background-repeat: no-repeat;background-position: center;background-size: cover;background-image: url(../../static/img/banner2.jpeg);}
.consult-img{width: 240px;height: 180px;}

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