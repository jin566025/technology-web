<template>
	<div>
		<div class="banner"></div>
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
						<div class="section-content-parts inline-block">
							<div class="section-content-parts-img">
								<img src="../../static/image/consult2.png" class="consult-img" />
							</div>
							<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
						</div>
						<div class="section-content-parts inline-block">
							<div class="section-content-parts-img">
								<img src="../../static/image/consult1.png" class="consult-img" />
							</div>
							<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
						</div>
						<div class="section-content-parts inline-block">
							<div class="section-content-parts-img">
								<img src="../../static/image/consult3.png" class="consult-img" />
							</div>
							<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
						</div>
						<div class="section-content-parts inline-block">
							<div class="section-content-parts-img">
								<img src="../../static/image/consult2.png" class="consult-img" />
							</div>
							<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
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
						<div class="section-content-parts inline-block">
							<div class="section-content-parts-img">
								<img src="../../static/image/consult4.png" class="consult-img" />
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
								<img src="../../static/image/consult5.png" class="consult-img" />
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
								<img src="../../static/image/consult6.png" class="consult-img" />
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
								<img src="../../static/image/consult4.png" class="consult-img" />
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
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		
		methods:{
			lookAll1:function(){
				this.$router.push({path:'consult-list1?navid='+2});
			},
			lookAll2:function(){
				this.$router.push({path:'consult-list2?navid='+2});
			},
			lookAll3:function(){
				this.$router.push({path:'consult-list3?navid='+2});
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
.read-more-a{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;vertical-align: middle;cursor: pointer;}
.read-more-p{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;vertical-align: middle;margin-right: 30px;}
.section-content{margin-top: 30px;font-size: 0;}
.section-content-parts{width: 240px;height: 240px;border: 1px solid #BBBBBB;margin-right: 16px;vertical-align: middle;}
.section-content-parts:last-child{margin-right: 0;}
.section-content-parts-img{width: 240px;height: 180px;background-color: darkgray;}
.section-content-parts-text{height: 60px;left: 218px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Microsoft Yahei;}
.text-type1{line-height: 60px;text-align: center;}
.text-type2{text-align: left;}
.section-text1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;margin:0 10px;}
.section-text2{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
.section-text3{height: 24px;line-height: 24px;color: rgba(120, 120, 120, 1);font-size: 14px;font-family: Roboto;margin:0 10px;}
.text-type2 p:nth-child(1){margin-top:4px;}
.text-type2 p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.banner{width: 100%;height: 550px;background-image: url(../../static/img/banner2.png);background-repeat: no-repeat;background-position: center;background-size: cover;}
.consult-img{width: 240px;height: 180px;}
</style>