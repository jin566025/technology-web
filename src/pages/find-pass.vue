<template>
	<div>
		<div class="zanwei"></div>
		<p class="title">忘记密码</p>
		<div class="input-group">
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
			<div class="input-group2 clearfix">
				<div class="input-group1-left fl">新密码</div>
				<input class="input-group3-right fr" type="text" placeholder="请输入您的新密码" />
			</div>
			<div class="input-group2 clearfix">
				<div class="input-group1-left fl">新密码</div>
				<input class="input-group3-right fr" type="text" placeholder="请再次输入您的新密码" />
			</div>
			<p class="find-pass">返回上一页</p>
			<div class="submit-btn">确认修改</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.zanwei{height: 100px;width: 100%;}
	.title{height: 90px;line-height:90px;color: rgba(50, 50, 50, 1);font-size: 50px;text-align: center;font-family: Roboto;margin-top: 56px;}
	.input-group1-left{width: 80px;height: 40px;line-height:40px;color: rgba(50, 50, 50, 1);font-size: 16px;text-align: left;font-family: Roboto;}
	.input-group1-mid{height: 40px;line-height:40px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);width: 100px;border-radius: 5px;}
	.input-group1-right{width: 260px;padding-left: 10px;height: 40px;line-height: 40px;color: rgba(136, 136, 136, 1);font-size: 14px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);}
	.input-group1{margin-top: 46px;}
	.input-group2{margin-top:18px ;}
	.input-group2-mid{height: 40px;color: rgba(136, 136, 136, 1);font-size: 14px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);width: 280px;padding-left: 10px;}
	.input-group2-right{width: 87px;height: 42px;line-height: 42px;cursor: pointer;background-color: rgba(136, 136, 136, 1);color: rgba(255, 255, 255, 1);font-size: 12px;text-align: center;font-family: Microsoft Yahei;}
	.agree{font-size: 0;text-align: center;}
	.input-group{width: 460px;margin: 0 auto;}
	.input-group3-right{border-radius: 5px;width: 360px;height: 40px;line-height: 40px;color: rgba(136, 136, 136, 1);font-size: 14px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);padding-left: 17px;}
	.find-pass{height:60px;line-height:60px;color: rgba(50, 50, 50, 1);font-size: 12px;font-family: Roboto;text-align: right;font-weight: bold;cursor: pointer;}
	.submit-btn{cursor: pointer;width: 100%;height: 40px;line-height: 40px;border-radius: 4px;background-color: rgba(136, 136, 136, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}

</style>