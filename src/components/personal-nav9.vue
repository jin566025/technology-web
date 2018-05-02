<template>
	<div class="tech-content">
		<div class="tech-content-head clearfix">
			<div class="tech-navs fl" v-for="(item,index) in navList" :class="navIndex==index ? 'tech-navs-active':''" @click="changeNav(index)">{{ item }}</div>
		</div>
		<div class="nav-content">
			<div class="nav-container1" v-if="navFlag">
				<p class="nav-title">亲爱的用户，填写真实的资料，可以获得更好的服务和精准的推送</p>
				<p class="nav-title2">您的资料将会被严格保密</p>
				<div class="nav-input-group">
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">当前头像：</div>
						<div class="nav-input-right fl">
							<img class="nav-head-img" src="../../static/image/head.jpeg" />
						</div>
					</div>
					
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">姓名：</div>
						<input type="text" class="nav-input-right2 fl" />
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">组织结构名称：</div>
						<input type="text" class="nav-input-right3 fl" />
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">职务：</div>
						<input type="text" class="nav-input-right3 fl" />
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">所在地：</div>
						<select class="nav-input-right4 fl">
							<option style="display: none;">选择省份</option>
							<option>浙江省</option>
							<option>江苏省</option>
							<option>四川省</option>
							<option>福建省</option>
						</select>
						<select class="nav-input-right4 fl">
							<option style="display: none;">选择市</option>
							<option>宁波市</option>
							<option>杭州市</option>
							<option>绍兴市</option>
						</select>
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">联系电话：</div>
						<input type="text" class="nav-input-right2 fl" />
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">联系邮箱：</div>
						<input type="text" class="nav-input-right2 fl" />
					</div>
					
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">资源涉及行业：</div>
						
						<div class="types types clearfix fl">
							<div class="type">移动端APP</div>
							<div class="type">移动端公众号</div>
							<div class="type">HTML网页搭建</div>
							<div class="type">数据库</div>
							<div class="type">服务器</div>
						</div>
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl">关注技术领域：</div>
						
						<div class="types types clearfix fl">
							<div class="type">移动端APP</div>
							<div class="type">移动端公众号</div>
							<div class="type">HTML网页搭建</div>
							<div class="type">数据库</div>
							<div class="type">服务器</div>
						</div>
					</div>
					<div class="nav-input clearfix">
						<div class="nav-input-left fl"></div>
						<div class="fl save-btn">保存</div>
					</div>
				</div>
			</div>
			<div class="nav-container2" v-else>
				<p class="nav-container2-title">请选择修改方式</p>
				<div class="ways clearfix">
					<div class="way" @click="changeFlags1()">
						<img class="way-icon" src="../../static/img/way1.png" />
						<p class="way-text">通过旧密码修改</p>
					</div>
					<div class="way" @click="changeFlags2()">
						<img class="way-icon" src="../../static/img/way2.png" />
						<p class="way-text">通过验证修改</p>
					</div>
				</div>
			</div>
		</div>
		<div class="change-pass-content" v-show="changeFlag1">
			<p class="change-pass-text">请填以下表单用来更换密码</p>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl">旧密码：</div>
				<input class="change-pass-right fl" type="text" />
			</div>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl">新密码：</div>
				<input class="change-pass-right fl" type="text" />
			</div>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl">请确认密码：</div>
				<input class="change-pass-right fl" type="text" />
			</div>
			<div class="change-pass2 clearfix">
				<div class="change-pass-left fl"></div>
				<p class="fl tips">密码由英文字母、数字或符号组成，最少6位</p>
			</div>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl"></div>
				<div class="finish-btn fl">确定</div>
			</div>
		</div>
		<div class="change-pass-content" v-show="changeFlag2">
			<p class="change-pass-text">请填以下表单用来更换密码</p>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl">注册电话：</div>
				<p class="change-pass-right4 fl">132653248888</p>
			</div>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl">验证码：</div>
				<input class="change-pass-right5 fl" type="text" />
				<div class="change-pass-right6 fl">获取验证码</div>
			</div>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl">请输入新密码：</div>
				<input class="change-pass-right fl" type="text" />
			</div>
			<div class="change-pass2 clearfix">
				<div class="change-pass-left fl"></div>
				<p class="fl tips">密码由英文字母、数字或符号组成，最少6位</p>
			</div>
			<div class="change-pass clearfix">
				<div class="change-pass-left fl"></div>
				<div class="finish-btn fl">确定</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default{
		data(){
			return {
		        tab:true,
		        navList:["个人资料","修改密码"],
		        navIndex:"0",
		        navFlag:true,
		        changeFlag1:false,
		        changeFlag2:false
			}
		},

		methods:{
			changeNav:function(index){
				this.navIndex = index;
				this.changeFlag1 = false;
				this.changeFlag2 = false
				if(index==1){
					this.navFlag = false
				}else{
					this.navFlag = true
				}
			},
			changeFlags1:function(){
				this.changeFlag1 = true
			},
			changeFlags2:function(){
				this.changeFlag2 = true
			}
		}
	}
</script>

<style scoped>
	.good{height: 70px;line-height:70px;border-bottom: 1px solid gainsboro;}
	.good-icon{width: 30px;height: 30px;vertical-align: middle;margin:  0 20px 0 30px;}
	.good-text{color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;vertical-align: middle;font-weight: bold;}
	
	.pagination-content{padding: 20px 0;}
	
	.section-content{width: 830px;margin: 0 auto;padding: 15px;}
	.tech-content-head{height: 70px;line-height: 70px;border-bottom: 1px solid gainsboro;}
	.tech-navs{width: 200px;text-align: center;height: 40px;margin-top: 15px;border-left: 2px solid darkgray;line-height: 40px;font-family: Roboto;font-size: 16px;cursor: pointer}
	.tech-navs:first-child{border-left: none;}
	.tech-navs-active{color: #1F93FF;}
	.nav-content{width: 820px;margin: 0 auto;}
	.nav-title{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;padding-top: 40px;padding-bottom: 10px;}
	.nav-title2{height: 24px;line-height: 24px;color: rgba(179, 179, 179, 1);font-size: 14px;font-family: Roboto;margin-bottom: 40px;}
	.nav-head-img{width: 150px;height: 150px;}
	.nav-input-left{width: 120px;text-align: right;font-family: Roboto;font-size: 14px;height: 40px;line-height: 40px;margin-right: 10px;}
	.nav-input-right2{width: 300px;height: 40px;border: 1px solid #BBBBBB;padding-left: 5px;font-family: Roboto;font-size: 14px;}
	.nav-input-right3{width:500px;height: 40px;border: 1px solid #BBBBBB;padding-left: 5px;font-family: Roboto;font-size: 14px;}
	.nav-input{margin-bottom: 40px;}
	.nav-input-right4{height: 40px;font-family: Roboto;font-size: 14px;width: 120px;border-radius: 5px;margin-right: 20px;}
	.type{display: inline-block;width: 102px;height: 40px;line-height: 40px;border-radius: 5px;font-family: Roboto;font-size: 14px;text-align: center;border: 1px solid gainsboro;cursor: pointer;margin-right: 10px;}
	.save-btn{width: 160px;height: 60px;line-height: 60px;border-radius: 5px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;cursor: pointer;text-align: center;font-family: Roboto;}
	.nav-container2-title{text-align: center;font-family: Roboto;font-size: 20px;padding: 40px 0 80px 0;}
	.ways{text-align: center;}
	.way{display: inline-block;width: 120px;text-align: center;margin: 0 50px;cursor: pointer;}
	.way-icon{width: 52px;height: 52px;margin-bottom: 34px;}
	.way-text{font-family: Roboto;font-size: 14px;}
	.nav-container2{height: 506px;}
	.tech-content{position: relative;}
	.change-pass{margin-bottom: 40px;position: relative;}
	.change-pass-content{position: absolute;top: 71px;width: 860px;background-color: #FFFFFF;z-index: 10;height: 500px;}
	.change-pass-text{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: center;font-family: Roboto;padding: 48px 0 45px 0;}
	.change-pass-left{width: 300px;text-align: right;height: 40px;line-height:40px;font-family: Roboto;font-size: 14px;}
	.change-pass-right{width: 300px;height: 40px;line-height:40px;border-radius: 5px;text-align: center;border: 1px solid rgba(187, 187, 187, 1);margin-left: 18px;}
	.finish-btn{cursor: pointer;width: 160px;height: 60px;line-height: 60px;border-radius: 5px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Roboto;margin-left: 18px;}
	.tips{height: 30px;line-height: 30px;color: rgba(229, 28, 35, 1);font-size: 14px;font-family: Roboto;margin-left: 18px;}
	.change-pass-right4{height: 40px;line-height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;margin-left: 18px;}
	.change-pass-right5{height: 40px;line-height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;margin-left: 18px;width: 200px;border-radius: 5px;border: 1px solid rgba(187, 187, 187, 1);padding-left: 5px;}
	.change-pass-right6{position: absolute;left:520px;cursor: pointer ;width: 102px;line-height: 42px;height: 42px;border-radius: 4px;background-color: rgba(229, 28, 35, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;}
	
</style>