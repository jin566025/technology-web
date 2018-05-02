<template>
	<div >
		<div class="right-banner"></div>
		<div class="section-content">
			<div class="section">
				<div class="section-title">公司新闻</div>
				<div class="section-content clearfix">
					<div class="section-part">
						<div class="section-part-content"></div>
						<p class="section-part-text">技术转移服务</p>
					</div>
					<div class="section-part">
						<div class="section-part-content"></div>
						<p class="section-part-text">科技成果转化培训嘉宾</p>
					</div>
					<div class="section-part">
						<div class="section-part-content"></div>
						<p class="section-part-text">共享模式对接平台</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="section-title">媒体评价</div>
				<div class="section-content clearfix">
					<div class="section-part">
						<div class="section-part-content"></div>
						<p class="section-part-text">技术转移服务</p>
					</div>
					<div class="section-part">
						<div class="section-part-content"></div>
						<p class="section-part-text">科技成果转化培训嘉宾</p>
					</div>
					<div class="section-part">
						<div class="section-part-content"></div>
						<p class="section-part-text">共享模式对接平台</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.right-banner{width: 800px;height: 250px;background-image:url(../../static/img/banner2.png);background-repeat: no-repeat;background-position: center;background-size: cover;}
	.section-title{height: 44px;line-height: 44px;color: rgba(16, 16, 16, 1);font-size: 30px;text-align: center;font-family: Roboto;position: relative;margin-bottom: 36px;}
	.section-title:before,.section-title:after{content: '';display: inline-block;background:darkgray;width: 70px;height: 1px;vertical-align: middle;}
	.section-title:before{margin-right: 20px;}
	.section-title:after{margin-left: 20px;}
	
	.section{margin-top: 50px;width: 798px;text-align: left;}
	.section-content{font-size: 0;}
	.section-part{width: 240px;height: 260px;display: inline-block;border: 1px solid gainsboro;margin-left: 18px;}
	.section-part-content{width: 240px;height: 180px;background-color: gainsboro;}
	.section-part-text{width: 200px;height:80px;line-height: 30px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;padding: 0 20px;}
</style>