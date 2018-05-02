<template>
	<div>
	
		<div  class="login-container">
			<div class="login-content clearfix">
				<div class="login-content-left fl clearfix">
					<div class="login-section1 box-sizing fl">
						<div class="login-section-content clearfix">
							<div class="login-section-content-left fl" ></div>
							<div class="login-section-content-right fr" >
								<p>xxxxxxxx</p>
								<p>xxxxxxxx</p>
							</div>
						</div>
					</div>
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section1 box-sizing fl">
						<div class="login-section-content clearfix">
							<div class="login-section-content-right fr" >
								<p>xxxxxxxx</p>
								<p>xxxxxxxx</p>
							</div>
							<div class="login-section-content-left fl" ></div>
							
						</div>
					</div>
					
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section2 box-sizing fl"></div>
					<div class="login-section2 box-sizing fl"></div>
				</div>
			
				<div class="login-content-right fr">
					<p class="login-content-title">短信快捷登录</p>
					<div class="input-group-content">
						<div class="input-group clearfix">
							<div class="input-group-left fl">手机</div>
							<select class="input-group-mid fl">
								<option>+86</option>
								<option>+87</option>
								<option>+88</option>
								<option>+89</option>
							</select>
							<input class="input-group-right fr" type="text" placeholder="请输入您的手机号" />
						</div>
						<div class="input-group input-group2 clearfix">
							<div class="input-group-left fl">验证码</div>
							<input type="text" class="input-group-mid2 fl" placeholder="请输入您的验证码" />
							<div class="input-group-right2 fr" >发送验证码</div>
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
						<p class="submit-btn2" @click="toAccountLogin()">账户登录</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				checked:true
			}
		},
		methods:{
			toAccountLogin:function(){
				var param = "a";
				this.$router.push({'path':'account-login?id='+param})
			}
		}
	}
</script>

<style scoped>
	.login-content{width: 1024px;margin: 0 auto;}
	.login-content-left,.login-content-right{width: 500px;height: 560px;border: 1px solid #BBBBBB;background-color: #FFFFFF;}

	.login-container{width: 100%;background-color:gainsboro ;padding-top: 156px;padding-bottom: 204px;}
	.login-section1{width: 333.333px;height: 140px;border: 1px solid gainsboro;}
	.login-section2{width: 166.666px;height: 140px;border: 1px solid gainsboro;}
	
	.login-section-content{width: 280px;margin: 0 auto;height: 90px;margin-top: 25px;}
	.login-section-content-left{width: 160px;height: 90px;background-color: gainsboro;}
	.login-section-content-right{width: 120px;text-align: center;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
	
	.login-content-title{height: 52px;line-height: 52px;color: rgba(50, 50, 50, 1);font-size: 36px;text-align: center;font-family: Roboto;margin-top: 30px;margin-bottom: 50px;}
	.input-group-left{height:60px;line-height: 60px;color: rgba(50, 50, 50, 1);font-size: 24px;text-align: left;font-family: Roboto;width:100px;}
	.input-group-mid{height: 60px;line-height: 60px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);width: 80px;border-radius: 5px;}
	.input-group-content{width: 440px;margin: 0 auto;}
	.input-group-right{height: 60px;line-height: 60px;color: rgba(136, 136, 136, 1);font-size: 16px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);width: 240px;padding-left: 10px;}
	.input-group-mid2{padding-left: 10px;width: 246px;height: 60px;line-height: 60px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);}
	.input-group-right2{width: 82px;height: 62px;line-height: 62px;background-color: rgba(136, 136, 136, 1);color: rgba(255, 255, 255, 1);font-size: 12px;text-align: center;font-family: Microsoft Yahei;}
	.input-group2{margin-top: 40px;}
	.agree{font-size: 0;text-align: center;}
	.agree-left{width: 20px;height: 20px;border: 1px solid #BBBBBB;cursor: pointer;vertical-align: middle;margin-right: 6px;}
	.agree-circle{width: 14px;height: 14px;margin: 0 auto;border-radius: 50%;background-color: #383838;margin-top: 3px;}
	.agree-right1{height: 30px;color: rgba(50, 50, 50, 1);font-size: 12px;font-family: Roboto;}
	.agree-right2{height: 30px;color: rgba(50, 50, 50, 1);font-size: 12px;text-align: center;font-family: Roboto;}
	.agree-right,.agree{vertical-align: middle;}
	.agree{margin-top: 40px;margin-bottom: 30px;height: 22px;}
	.submit-btn{cursor: pointer;margin-top: 20px;width: 100%;height: 60px;line-height: 60px;border-radius: 4px;background-color: rgba(136, 136, 136, 1);color: rgba(255, 255, 255, 1);font-size: 24px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}
	.submit-btn2{cursor: pointer;height: 60px;line-height: 60px;color: rgba(200, 200, 200, 1);font-size: 16px;text-align: right;font-family: Roboto;}
</style>