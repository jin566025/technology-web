<template>
	<div class="tech-content">
		<p class="good">
			<img src="../../static/img/good.png" class="good-icon" />
			<a class="good-text">发布的技术</a>
		</p>
		<div>
			<div class="tech-section">
				<div class="tech-container clearfix">
					<div class="tech-left fl">
						<img src="../../static/image/service4.jpeg" class="service-img" />
					</div>
					<div class="tech-right fr">
						<p class="tech-title">智能家用服务机器人</p>
						<p class="tech-desc">智能、环保的智能家用机器人，是一款环境友好型产品</p>
						<div class="tips clearfix">
							<div class="tip">智能家用</div>
							<div class="tip">大数据平台</div>
							<div class="tip">服务机器人</div>
						</div>
						<div class="tech-btn">联系技术方</div>
					</div>
				</div>
				<div class="terms clearfix">
					<div class="term fl">有无试点：有</div>
					<div class="term fl">有无专利：有</div>
					<div class="term fl">交付方式：xxx</div>
					<div class="term fl">合作方式：xxxxx</div>
					<div class="term fl">行业方向：xxxxx</div>
					<div class="term fl">地址：IT行业</div>
					<div class="term fl">所属机构名称：xxxxxxxxxxxxxxx</div>
				</div>
			</div>
			<div class="tech-section">
				<div class="tech-container clearfix">
					<div class="tech-left fl">
						<img src="../../static/image/service5.jpeg" class="service-img" />
					</div>
					<div class="tech-right fr">
						<p class="tech-title">智能家用服务机器人</p>
						<p class="tech-desc">智能、环保的智能家用机器人，是一款环境友好型产品</p>
						<div class="tips clearfix">
							<div class="tip">智能家用</div>
							<div class="tip">大数据平台</div>
							<div class="tip">服务机器人</div>
						</div>
						<div class="tech-btn">联系技术方</div>
					</div>
				</div>
				<div class="terms clearfix">
					<div class="term fl">有无试点：有</div>
					<div class="term fl">有无专利：有</div>
					<div class="term fl">交付方式：xxx</div>
					<div class="term fl">合作方式：xxxxx</div>
					<div class="term fl">行业方向：xxxxx</div>
					<div class="term fl">地址：IT行业</div>
					<div class="term fl">所属机构名称：xxxxxxxxxxxxxxx</div>
				</div>
			</div>
		</div>
		<div class="pagination-content">
			<page :total="total" :current-page='current' @pagechange="pagechange"></page>
		</div>
	</div>
</template>

<script>
	import Page from './page'
	export default{
		data(){
			return {
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
		        tab:true
			}
		},
		components:{
			Page
		},
		methods:{
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  },
		  lookDetail:function(){
		  	this.tab = !this.tab
		  }
		}
	}
</script>

<style scoped>
	.good{height: 70px;line-height:70px;border-bottom: 1px solid gainsboro;}
	.good-icon{width: 30px;height: 30px;vertical-align: middle;margin:  0 20px 0 30px;}
	.good-text{color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;vertical-align: middle;font-weight: bold;}
	.tech-container{width: 840px;padding: 10px;}
	.tech-left{width: 340px;height: 300px;background-color: gainsboro;}
	.tech-right{width: 480px;}
	.tech-title{height: 26px;line-height: 26px;color: rgba(16, 16, 16, 1);font-size: 18px;font-family: Roboto;}
	.tech-desc{height: 24px;line-height: 24px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;margin: 60px 0;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
	.tip{display: inline-block;margin-right: 16px;height: 30px;line-height: 30px;padding: 0 5px;border-radius: 4px;color:#FFFFFF;font-size: 14px;text-align: center;font-family: Microsoft Yahei;background-color: #FF9800;}
	.tech-btn{margin-top: 46px;width: 172px;height: 50px;line-height: 50px;border-radius: 4px;background-color: #1F93FF;color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}
	.terms{width: 820px;padding: 10px;background-color: #D7F4FA ;margin: 0 auto;margin-top: 30px;}
	.term{margin-right: 50px;height: 40px;line-height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;}
	.tech-section{padding-bottom: 30px;border-bottom: 1px solid gainsboro;padding-top: 10px;}
	.pagination-content{padding: 20px 0;}
	.service-img{width: 340px;height: 300px;}
</style>