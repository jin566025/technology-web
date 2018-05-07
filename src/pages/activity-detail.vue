<template>

	<div class="content">

		<div class="detail">
			<p class="detail-nav">
				<a>活动</a>
				<a>></a>
				<a>详情</a>
			</p>
			<div class="detail-head clearfix">
				<div class="detail-head-left fl">
					<img class="activity-detail-img" src="../../static/image/active2.jpeg" />
					<div class="detail-left-texts">进行中</div>
				</div>
				<div class="detail-head-right fr">
					<p class="detail-p1">【免费领票】新型技术分享交流会</p>
					<p class="detail-p2">活动时间：2018.03.30——2018.4.2</p>
					<p class="detail-p2">简介</p>
					<p class="detail-p2">简介简介简介简介简介简介简介简介简介简介</p>
					<div class="detail-head-bottom clearfix">
						<div class="detail-btn fl" @click="baoming()">我要报名</div>
						
						<div class="detail-btn2 fr">
							<a class="detail-text">分享到：</a>
							<img src="../../static/img/wx-active.png" class="detail-icon" />
						</div>
						<div class="detail-btn2 fr">
							<a class="detail-text">收藏：</a>
							<img src="../../static/img/collect.png" class="detail-icon" />
						</div>
					</div>
					
				</div>
			</div>
			<div class="detail-main clearfix">
				<div class="detail-main-left fl">
					<div class="detail-main-section">
						<div class="detail-main-section-title">活动简介</div>
						<div class="detail-main-section-desc">迈科技作为一站式技术创新服务平台，也将携150余项国内外优质技术参加中国（上海）国际进出口交易会-技术转移专区。同时，迈科技也会精选7项优质项目进行科技成果转移转化项目路演，欢迎大家现场参与！</div>
					</div>
					<div class="detail-main-section detail-main-section2">
						<div class="detail-main-section-title" @click="baoming2()">活动详情</div>
						<div class="detail-main-section-desc" @click="baoming2()">中国（上海）国际技术进出口交易会（简称上交会CSITF）以“技术，让生活更精彩”为核心理念，以“创新驱动发展，保护知识产权，促进技术贸易”为主题，旨在通过整合海内外科技力量和创新成果，积极打造技术贸易发展，推进实现创新升级战略的权威性展示、交流、服务平台。作为国内领先的一站式技术创新服务平台，迈科技将携150+项国内外优质技术参加中国（上海）国际技术进出口交易会！</div>
					</div>
					<p class="detail-main-desc">4月20日13点上海世博展览馆1号馆-技术转移专区迈科技精选7项优质技术进行科技成果转移转化项目路演邀您与行业大咖面对面交流全方位了解技术详情现场对接</p>
					<div class="detail-person">
						<img class="person-img" src="../../static/img/test.jpg" />
						<p class="person-name">张晓林</p>
						<p class="person-desc">Java开发  研究员  PHP开发  Web</p>
						<p class="project">路演项目：环保阻燃可瓷化硅橡胶热防护材料及其应用 该技术已经做过充分的技术和市场调研：技术方面，国外德国瓦克有，但是价格高，国内深圳沃尔核材有，材料性能不好，该技术有技术含量，综合性能比国外差得不多，但性价比高许多，而与国内比，无论性能和性价比，均占优。据调研，该材料最大的问题是市面上没有标准，所以目前没有推广开来，所以一旦推广开来，市场当量非常大，价值可观，上海电缆研究所在起草该标准，预计7月面世。</p>
					</div>
					<div class="detail-person">
						<img class="person-img" src="../../static/img/test.jpg" />
						<p class="person-name">张晓林</p>
						<p class="person-desc">Java开发  研究员  PHP开发  Web</p>
						<p class="project">路演项目：环保阻燃可瓷化硅橡胶热防护材料及其应用 该技术已经做过充分的技术和市场调研：技术方面，国外德国瓦克有，但是价格高，国内深圳沃尔核材有，材料性能不好，该技术有技术含量，综合性能比国外差得不多，但性价比高许多，而与国内比，无论性能和性价比，均占优。据调研，该材料最大的问题是市面上没有标准，所以目前没有推广开来，所以一旦推广开来，市场当量非常大，价值可观，上海电缆研究所在起草该标准，预计7月面世。</p>
					</div>
					<p class="detailsss">路演项目：3D打印齿科全陶瓷种植修复系统材料与技术1、国内第一个满足工业应用要求的3d陶瓷打印解决方案；2、打印技术和材料设计与国外三家竞争者完全不同，拥有完整的自主知识产权；3、国际上第一个真正进入力学支撑性医用陶瓷3d打印商业化的团队之一；4、目前达到国际领先水准，产品的使用稳定性和精度控制超过国际竞争对手（打印材料货架和使用寿命远超竞争对手）；5、3d打印陶瓷材料性能和国际竞争者一致或略有领先；6、种植修复3d打印解决方案独创，强调多功能统一和仿生学结构与功能设计。即日起至2018年4月18日，点击下方报名按钮，即可获得免费门票一张。数量有限，先到先得，送完为止。如果您不能到现场参与路演，也可点击上方技术名称，直接联系技术方。活动地址：上海世博展览馆1号馆-技术转移专区H1-15（上海市浦东新区国展路1099号）联系电话：15821566126</p>
					<img class="map" src="../../static/image/active2.jpeg" />
					<button class="finish" @click="baoming()">我要报名</button>
				</div>
				<div class="detail-main-right fr">
					<p class="baoming">正在报名</p>
					<div class="detail-right-section">
						<img src="../../static/image/active7.jpeg" class="right-img" />
						<p class="detail-right-section-desc">土壤修复矿物技术专场 | 邀请企业免费参与！</p>
					</div>
					<div class="detail-right-section">
						<img src="../../static/image/active5.jpeg" class="right-img" />
						<p class="detail-right-section-desc">土壤修复矿物技术专场 | 邀请企业免费参与！</p>
					</div>
					<div class="detail-right-section">
						<img src="../../static/image/active6.jpeg" class="right-img" />
						<p class="detail-right-section-desc">土壤修复矿物技术专场 | 邀请企业免费参与！</p>
					</div>
					<div class="detail-right-section">
						<img src="../../static/image/active8.jpeg" class="right-img" />
						<p class="detail-right-section-desc">土壤修复矿物技术专场 | 邀请企业免费参与！</p>
					</div>
				</div>
			</div>
		</div>
		<div class="shadow" v-show="dialogShow"></div>
		<div class="shadow" v-show="dialog2Show"></div>
		<div class="dialog2 absolute-center" v-show="dialog2Show">
			<img src="../../static/img/close.png" @click="baoming2()" class="close" />
			<div class="dialog2-content">
				<div class="tab clearfix">
					<div @click="tabItem(index)" class="tab-btn fl" v-for="(item,index) in tabsParam" :class="index==nowIndex ? 'tab-active':''">{{ item }}</div>
				</div>
				<div class="input-group" v-show="nowIndex===0">
					<div class="input-group1 clearfix">
						<div class="input-group1-left fl">手机</div>
						<select class="input-group1-mid fl">
							<option>+86</option>
							<option>+87</option>
							<option>+89</option>
							<option>+90</option>
						</select>
						<input class="input-group1-right fr" type="text" placeholder="请输入您的手机号" />
						
					</div>
					<div class="input-group2 clearfix">
						<div class="input-group1-left fl">验证码</div>
						<input class="input-group2-mid fl" type="text" placeholder="请输入您的验证码" />
						<div class="input-group2-right fl">发送验证码</div>
					</div>
					<div class="clearfix agree">
						<div class="agree-left inline-block" @click="checkThis()">
							<div class="agree-circle" v-if="checked"></div>
						</div>
						<div class="agree-right inline-block">
							<a class="agree-right1">我已同意注册</a>
							<a class="agree-right2">《xxxxxx科技服务平台》</a>
						</div>
					</div>
					<div class="submit-btn">登录</div>
				</div>
				<div class="input-group3" v-show="nowIndex===1">
					<div class="input-group1 clearfix">
						<div class="input-group1-left fl">手机</div>
						<select class="input-group1-mid fl">
							<option>+86</option>
							<option>+87</option>
							<option>+89</option>
							<option>+90</option>
						</select>
						<input class="input-group1-right fr" type="text" placeholder="请输入您的手机号" />
					</div>
					<div class="input-group2 clearfix">
						<div class="input-group1-left fl">密码</div>
						<input class="input-group3-right fr" type="text" placeholder="请输入您的密码" />
					</div>
					<p class="find-pass" @click="findPass()">忘记密码？</p>
					<div class="submit-btn submit-btn2">登录</div>
				</div>
					

			</div>
			
		</div>
		<div class="dialog absolute-center" v-show="dialogShow">
			<img @click="baoming()" class="close" src="../../static/img/close.png" />
			<p class="dialog-title">报名信息确认</p>
			<div class="dialog-input clearfix">
				<a class="dialog-input-left inline-block">姓名：</a>
				<input type="text" class="dialog-input-right inline-block" />
			</div>
			<div class="dialog-input clearfix">
				<a class="dialog-input-left inline-block">组织机构名称：</a>
				<input type="text" class="dialog-input-right inline-block" />
			</div>
			<div class="dialog-input clearfix">
				<a class="dialog-input-left inline-block">职务：</a>
				<input type="text" class="dialog-input-right inline-block" />
			</div>
			<div class="dialog-input clearfix">
				<a class="dialog-input-left inline-block">联系邮箱：</a>
				<input type="text" class="dialog-input-right inline-block" />
			</div>
			<div class="dialog-input clearfix">
				<a class="dialog-input-left inline-block">联系电话：</a>
				<input type="text" class="dialog-input-right inline-block" />
			</div>
			<div class="dialog-input clearfix">
				<a class="dialog-input-left inline-block"></a>
				<div type="text" class="dialog-input-right2 inline-block">确认报名</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return{
				dialogShow:false,
				dialog2Show:true,
				nowIndex:1,
				tabsParam:["短信快捷登录","账户登录"],
				checked:false
			}
		},
		methods:{
			baoming:function(){
				this.dialogShow = !this.dialogShow;
			},
			baoming2:function(){
				this.dialog2Show = !this.dialog2Show;
			},
			checkThis:function(){
				this.checked = !this.checked;
			},
			tabItem:function(index){
				this.nowIndex = index
			},
			findPass:function(){
				this.$router.push({path:'find-pass'})
			}
		}
	}
</script>

<style scoped>

	.detail{width: 1024px;margin: 0 auto;}
	.detail-nav{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: left;font-family: Roboto;cursor: pointer;margin-top: 20px;}
	.detail-head{width: 998px;padding:12px;border: 1px solid #BBBBBB;margin-top: 26px;}
	.detail-head-left{width: 240px;height: 180px;background-color: gainsboro;position: relative;}
	.detail-head-right{width: 740px;}
	.detail-p1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-weight: bold;font-family: Roboto;}
	.detail-p2{height: 24px;line-height: 24px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;margin-top: 10px;}
	.detail-btn{cursor: pointer;width: 86px;height: 30px;line-height: 30px;border-radius: 4px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;}
	.detail-text{height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;vertical-align: bottom;}
	.detail-icon{width: 24px;height: 24px;vertical-align: bottom;}
	.detail-head-bottom{margin-top: 24px;}
	.detail-btn2{margin-left: 20px;}
	.detail-main{width: 1024px;margin-top: 10px;}
	.detail-main-left{width: 760px;padding: 10px;margin: 0 auto;border: 1px solid gainsboro;}
	.detail-left-texts{position: absolute;bottom: 0;width: 100%;height: 40px;line-height: 40px;background-color: rgba(0,0,0,0.3);text-align: center;color: rgba(255, 255, 255, 1);font-size: 14px;font-family: Roboto;}
	.detail-main-right{width: 220px;padding: 0 5px;border: 1px solid gainsboro;padding-bottom: 10px;}
	.detail-main-section{margin:10px auto;padding-bottom: 20px;border-bottom: 1px solid gainsboro;margin-bottom: 14px;}
	.detail-main-section-title{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;padding: 0 10px;border-left: 3px solid darkgray;}
	.detail-main-section-desc{line-height: 18px;color: rgba(140, 140, 140, 1);font-size: 12px;text-align: left;font-family: Roboto;margin-top: 14px;}
	.detail-main-section2{border-bottom: none;}
	.detail-main-desc{line-height: 15px;color: rgba(140, 140, 140, 1);font-size: 12px;text-align: center;font-family: Roboto;}
	.person-img{width: 80px;height: 80px;border-radius: 50%;}
	.detail-person{text-align: center;margin-top: 20px;}
	.person-name{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;font-weight: bold;margin-top: 20px;}
	.person-desc{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 12px;text-align: center;font-family: Roboto;margin-top: 10px}
	.project{line-height: 18px;color: rgba(140, 140, 140, 1);font-size: 12px;text-align: left;font-family: Roboto;margin-top: 28px;}
	.detailsss{line-height: 15px;color: rgba(140, 140, 140, 1);font-size: 12px;text-align: left;font-family: Roboto;}
	.map{width:280px;height: 170px;margin-top: 20px;}
	.finish{display: block;margin-top: 88px;width: 86px;height: 30px;line-height: 30px;border-radius: 4px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}
	.baoming{padding-top: 10px;width: 210px;margin: 0 auto;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;}
	.detail-right-section{width: 210px;height: 170px;margin: 0 auto;position: relative;background-color: gainsboro;margin-top: 15px;}
	.detail-right-section-desc{position: absolute;bottom: 0;width:200px;background-color: rgba(0,0,0,0.5);padding: 10px 5px;color: rgba(255, 255, 255, 1);font-size: 12px;text-align: left;font-family: Roboto;}
	.shadow{width: 100%;height: 100%;position: fixed;top: 0;background-color: rgba(0,0,0,0.6);z-index: 13;}
	.dialog{width: 600px;height: 510px;position: fixed;background-color: #FFFFFF;z-index: 14;border-radius: 10px;}
	.close{position: absolute;right: 10px;top: 10px;width: 24px;height: 24px;cursor: pointer;}
	.dialog-title{padding-top: 30px;width: 560px;text-align: center;border-bottom: 1px solid rgba(187, 187, 187, 1);left: 659px;margin: 0 auto;height: 50px;line-height: 50px;color: rgba(16, 16, 16, 1);font-size: 20px;text-align: center;font-family: Roboto;}
	.dialog-input{font-size: 0;margin-top: 20px;}
	.dialog-input-left{vertical-align: middle;width: 180px;text-align: right;padding-right: 10px;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
	.dialog-input-right{font-family: Roboto;font-size: 14px;width: 324px;height: 40px;border: 1px solid #BBBBBB;padding-left: 10px;border-radius: 5px;}
	.dialog-input-right2{width: 200px;height: 60px;line-height: 60px;border-radius: 5px;background-color: rgba(77, 150, 235, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);}
	.dialog2{position: fixed;z-index:14 ;width: 510px;height: 360px;background-color: #FFFFFF;}
	.tab-btn{height: 46px;line-height: 46px;font-size: 24px;color: #C8C8C8;text-align: center;font-family: Roboto;width: 50%;cursor: pointer;}
	.tab{padding-top: 44px;}
	.tab-active{color: rgba(50, 50, 50, 1);}
	.dialog2-content{width: 90%;margin: 0 auto;}
	.input-group1-left{width: 80px;height: 40px;line-height:40px;color: rgba(50, 50, 50, 1);font-size: 16px;text-align: left;font-family: Roboto;}
	.input-group1-mid{height: 40px;line-height:40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);width: 100px;border-radius: 5px;}
	.input-group1-right{width: 260px;padding-left: 10px;height: 40px;line-height: 40px;color: rgba(136, 136, 136, 1);font-size: 14px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);}
	.input-group1{margin-top: 46px;}
	.input-group2{margin-top:18px ;}
	.input-group2-mid{height: 40px;color: rgba(136, 136, 136, 1);font-size: 14px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);width: 280px;padding-left: 10px;}
	.input-group2-right{width: 87px;height: 42px;line-height: 42px;cursor: pointer;background-color: rgba(136, 136, 136, 1);color: rgba(255, 255, 255, 1);font-size: 12px;text-align: center;font-family: Microsoft Yahei;}
	.agree{font-size: 0;text-align: center;}
	.agree-left{width: 20px;height: 20px;border: 1px solid #BBBBBB;cursor: pointer;vertical-align: middle;margin-right: 6px;}
	.agree-circle{width: 14px;height: 14px;margin: 0 auto;border-radius: 50%;background-color: #383838;margin-top: 3px;}
	.agree-right1{height: 30px;color: rgba(50, 50, 50, 1);font-size: 12px;font-family: Roboto;}
	.agree-right2{height: 30px;color: rgba(50, 50, 50, 1);font-size: 12px;text-align: center;font-family: Roboto;}
	.agree-right,.agree{vertical-align: middle;}
	.agree{margin-top: 24px;}
	.submit-btn{cursor: pointer;margin-top: 20px;width: 100%;height: 40px;line-height: 40px;border-radius: 4px;background-color: rgba(136, 136, 136, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}
	.input-group3-right{border-radius: 5px;width: 360px;height: 40px;line-height: 40px;color: rgba(136, 136, 136, 1);font-size: 14px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);padding-left: 17px;}
	.find-pass{height:60px;line-height:60px;color: rgba(50, 50, 50, 1);font-size: 12px;font-family: Roboto;text-align: right;font-weight: bold;cursor: pointer;}
	.submit-btn2{margin-top: 6px;}
	.activity-detail-img{width: 240px;height: 180px;}
	.right-img{width: 210px;height: 170px;}
</style>