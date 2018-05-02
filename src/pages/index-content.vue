<template>
	<div>
	
		<div class="banner">
			<banner></banner>
		
		</div>
		<div class="index-container">
			<div class="index-navs clearfix">
				<router-link tag="div" class="index-nav inline-block" :to="item.path" v-for="(item,index) in navsList">
					<div class="index-nav-circle">
						<img class="index-icon" :src="item.imgurl" />
					</div>
					<p class="index-nav-name">{{ item.name }}</p>
					<p class="index-nav-desc">{{ item.desc }}</p>
				</router-link>
				
			</div>
			<div class="index-main">
				<router-view></router-view>
			</div>
			<div class="section">
				<div class="section-title">汇聚全球先进技术，促进企业全面发展</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active8.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active7.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active9.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active3.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">最新智能灯具控制系统</div>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="section-title">行业顶级专家，技术高级顾问</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult1.png" />
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
							<img class="index-img" src="../../static/image/consult2.png" />
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
							<img class="index-img" src="../../static/image/consult3.png" />
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
							<img class="index-img" src="../../static/image/consult1.png" />
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
				<div class="section-title">获补贴拿荣誉，享政策得优惠</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult5.png" />
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
							<img class="index-img" src="../../static/image/consult6.png" />
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
							<img class="index-img" src="../../static/image/consult7.png" />
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
							<img class="index-img" src="../../static/image/consult4.png" />
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
</template>

<script>
import Banner from '../components/banner'
export default{
	data(){
		return {
			navsList:[
				{name:"资讯",path:"/index-content/index-part1",imgurl:"./static/img/index-icon1.png",desc:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"},
				{name:"活动",path:"/index-content/index-part2",imgurl:"./static/img/index-icon2.png",desc:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"},
				{name:"政策",path:"/index-content/index-part3",imgurl:"./static/img/index-icon3.png",desc:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"}
			]
		}
	},
	components:{
		Banner
	}
}
</script>

<style >

.banner{height: 550px;font-size: 14px;text-align: center;font-family: Roboto;position: relative;}
.swiper-pagination-bullet{width:10px;height:10px;display: inline-block;background-color: transparent ;border-radius: 50%;margin: 0 5px;cursor: pointer;border: 2px solid darkgray;}
.swiper-pagination-bullet-active{background-color: darkgray ;}

.big-circle{width: 40px;height: 40px;border-radius: 50%;position: relative;border: 1px solid #BBBBBB;}
.small-circle{width: 14px;height: 14px;border-radius: 50%;background-color:#BBBBBB ;}
.nav-name{height: 24px;line-height: 24px;font-size: 14px;text-align: center;font-family: Roboto;padding-top: 30px;color: #101010;}
.router-link-active .big-circle:after{width: 0;height: 0;content: "";border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 10px solid #1F93FF;box-sizing: border-box;position: absolute;bottom: -20px;left: 10px;}
.router-link-active .big-circle{border: 1px solid #1F93FF;}
.router-link-active .small-circle{background-color: #1F93FF;}
.router-link-active .nav-name{color: #4DB4FF;}

.index-navs{width: 1024px;margin: 0 auto;margin-top: 38px;font-size: 0;text-align: center}
.index-nav-name{color: #009688;font-family: Roboto;font-size: 16px;height: 30px;line-height: 30px;border-bottom: 1px solid #B8B4B8;padding-bottom: 10px;}
.index-nav-desc{color: #AAAAAA;font-family: Roboto;font-size: 14px;padding-top: 10px;}
.index-nav{cursor: pointer;width: 25%;margin: 0 4%;text-align: left;}
.index-nav-circle{width: 100px;height: 100px;border-radius: 50%;background-color: #B8B4B8;line-height: 100px;text-align: center;margin: 0 auto;margin-bottom: 20px;}
.index-icon{width: 60px;height: 60px;margin-top: 20px;}
.router-link-active .index-nav-circle{background-color: #0395FF;}
.router-link-active .index-nav-name{color: #0395FF;border-bottom: 1px solid #FF9800;}
.section{width: 1020px;margin: 0 auto;text-align: center;margin-top: 50px;}
.section-title{height: 44px;line-height: 44px;color: rgba(16, 16, 16, 1);font-size: 30px;text-align: center;font-family: Roboto;position: relative;}
.section-title:before,.section-title:after{content: '';display: inline-block;background:darkgray;width: 70px;height: 1px;vertical-align: middle;}
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
.index-img{width: 240px;height: 180px;}

.index-main{margin-top: 40px;}
</style>