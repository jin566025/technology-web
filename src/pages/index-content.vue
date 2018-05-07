<template>
	<div>
		<div class="msg-nav" :class="scroll > 1 ? 'msg-zindex':''">
			<div class="msg-sanjiao"></div>
			<div class="msg-content">
				<div class="msg-top clearfix">
					<a class="msg-top-left fl">资讯</a>
					<router-link tag="a" class="msg-top-right fr" to="/msg">查看更多</router-link>
				</div>
				<div class="msg-container">
					<div class="msg-section">
						<p>免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</p>
					</div>
					<div class="msg-section">
						<p>免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</p>
					</div>
					<div class="msg-section">
						<p>免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</p>
					</div>
					<div class="msg-section">
						<p>免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</p>
					</div>
					<div class="msg-section">
						<p>免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</p>
					</div>
					<div class="msg-section">
						<p>免费领票丨8项优质技术项目路演，与专家面对面交流，尽在中国（上海）国际技术进出口交易会</p>
					</div>
				</div>
			</div>
		</div>
		<div class="banner">
			<banner :listImg="swiperImg"></banner>
		
		</div>
		<div class="index-container">
			<div class="index-navs clearfix">
				<div class="index-nav inline-block" :to="item.path" v-for="(item,index) in navsList" :class="navIndex==index ? 'nav-active':''" @click="changeIndex(index)">
					<div class="index-nav-circle index-icon fa" :class="item.imgurl"></div>
					<p class="index-nav-name">{{ item.name }}</p>
					<p class="index-nav-desc">{{ item.desc }}</p>
				</div>
				
			</div>
			<div class="index-main">
				<div class="part-content">
					<swiper :paths="readMorePath"></swiper>
					
				</div>
			</div>
			
			
			<div class="section">
				<div class="section-title">汇聚全球先进技术，促进企业全面发展</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block" @click="toService()">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block" @click="toServiceDetail()">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active8.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">最新智能灯具控制系统</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active7.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">最新智能灯具控制系统</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active9.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">最新智能灯具控制系统</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/active3.jpeg" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">最新智能灯具控制系统</p>
						</div>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="section-title">行业顶级专家，技术高级顾问</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block" @click="toConsult()">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block" @click="toConsultDetail()">
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
				<div class="section-title">合作机构，实力资助</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block" @click="toConsult2()">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block" @click="toConsultDetail2()">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult4.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">上海科技大学</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult5.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">阿里巴巴</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult6.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">万科技术有限公司</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult7.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">网易开发运营团队</p>
						</div>
					</div>
				</div>
			</div>
			
			<div class="section">
				<div class="section-title">成功案例，详细解读</div>
				<div class="read-more clearfix">
					<div class="read-more-p inline-block">APP开发/微信小程序/商城开发/web前端开发/后台开发/页面设计</div>
					<div class="inline-block" @click="toExample()">
						<a class="read-more-a">查看全部</a>
						<img class="read-more-img" src="../../static/img/to-right2.png" />
					</div>
				</div>
				<div class="section-content clearfix">
					<div class="section-content-parts inline-block" @click="toExampleDetail()">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult4.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">才云科技：AI+云计算让IT管理成本降九成</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult5.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">如何让一家只卖1元纸箱的公司年赚6亿?</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult6.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">如何让一家只卖1元纸箱的公司年赚6亿?</p>
						</div>
					</div>
					<div class="section-content-parts inline-block">
						<div class="section-content-parts-img">
							<img class="index-img" src="../../static/image/consult7.png" />
						</div>
						<div class="section-content-parts-text text-type1">
							<p class="section-p">如何让一家只卖1元纸箱的公司年赚6亿?</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from '../components/banner'
import Swiper from '../components/swiper'
export default{
	data(){
		return {
			navsList:[
				{name:"资讯",path:'/msg',imgurl:"fa-comments",desc:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"},
				{name:"活动",path:'/activity',imgurl:"fa-gift",desc:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"},
				{name:"政策",path:'/policy',imgurl:"fa fa-globe",desc:"如果你无法简洁的表达你的想法，那只说明你还不够了解它。"}
			],
			navIndex:0,
			scroll:0,
//			readMorePath:'/msg'
			readMorePath:{
				path:'/msg',
				imgList:[
					['./static/image/active1.jpeg','./static/image/active6.jpeg','./static/image/active7.jpeg','./static/image/active8.jpeg'],
					['./static/image/active8.jpeg','./static/image/active7.jpeg','./static/image/active6.jpeg','./static/image/active4.jpeg'],
					['./static/image/active4.jpeg','./static/image/active6.jpeg','./static/image/active7.jpeg','./static/image/active8.jpeg'],
				]
			},
			swiperImg:['./static/img/banner1.jpeg','./static/img/banner2.png','./static/img/banner3.jpeg']
		}
	},

    
	methods:{
		changeIndex:function(index){
			this.navIndex = index;
			this.readMorePath.path = this.navsList[index].path;
		},
		navScroll:function(){
			this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
		},
		toServiceDetail:function(){
			this.$router.push({path:'/service/service-detail'})
		},
		toService:function(){
			this.$router.push({path:'/service'})
		},
		toConsultDetail:function(){
			this.$router.push({path:'/consult/consult-list1/consult-list1-detail'})
		},
		toConsult:function(){
			this.$router.push({path:'/consult/consult-list1'})
		},
		toConsultDetail2:function(){
			this.$router.push({path:'/consult/consult-list2/consult-list2-detail'})
		},
		toConsult2:function(){
			this.$router.push({path:'/consult/consult-list2'})
		},
		toExample:function(){
			this.$router.push({path:'/example'})
		},
		toExampleDetail:function(){
			this.$router.push({path:'/example/example-detail'})
		}
	},
	components:{
		Banner,
		Swiper
	},
	mounted() {
      window.addEventListener('scroll', this.navScroll)
    }
}
</script>

<style >
@import url("../../static/css/font-awesome.min.css");
.banner{height: 550px;font-size: 14px;text-align: center;font-family: Roboto;position: relative;}
.swiper-pagination-bullet{width:10px;height:10px;display: inline-block;background-color: transparent ;border-radius: 50%;margin: 0 5px;cursor: pointer;border: 2px solid darkgray;}
.swiper-pagination-bullet-active{background-color: darkgray ;}
.msg-nav{width: 1024px;margin: 0 auto;position: relative;}
.msg-content{width: 320px;position: absolute;top: -15px;z-index: 20;right: 0;}
.msg-sanjiao{width: 0;height: 0;border-bottom: 15px solid #0773B0;border-left: 15px solid transparent;position: absolute;z-index: 20;top: -15px;right: 320px;}
.msg-top{width: 300px;padding: 0 10px;height: 30px;background-color: #1F93FF;line-height: 30px;color: #D4EAFF;font-size: 12px;font-family: Roboto;}
.msg-container{width: 100%;background-color:rgba(0,0,0,0.7);}
.msg-section{width: 300px;margin: 0 auto;border-bottom: 1px solid dimgray;color: #D9D9D9;font-size: 12px;font-family: Roboto;padding: 8px 0;}
.msg-top-right{cursor: pointer;color: #FFFFFF;}
.msg-zindex{z-index: 11;}
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
.index-icon{font-size: 60px;color: #FFFFFF;}
.nav-active .index-nav-circle{background-color: #0395FF;}
.nav-active .index-nav-name{color: #0395FF;border-bottom: 1px solid #FF9800;}
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
.section-content-parts{width: 240px;height: 260px;border: 1px solid #BBBBBB;margin-right: 16px;vertical-align: middle;}
.section-content-parts:last-child{margin-right: 0;}
.section-content-parts-img{width: 240px;height: 180px;background-color: darkgray;}
.section-content-parts-text{height: 80px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Microsoft Yahei;}
.text-type1{text-align: left;width: 220px;padding: 0 10px;}
.section-p{margin-top: 15px;}
.text-type2{text-align: left;}
.section-text1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;margin:0 10px;}
.section-text2{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
.section-text3{height: 24px;line-height: 24px;color: rgba(120, 120, 120, 1);font-size: 14px;font-family: Roboto;margin:0 10px;}
.text-type2 p:nth-child(1){margin-top: 10px;}
.text-type2 p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.index-img{width: 240px;height: 180px;}
.part-content{height: 400px;width: 100%;background: url(../../static/image/service1.jpeg) no-repeat center/cover;}
.index-main{margin-top: 40px;}
</style>