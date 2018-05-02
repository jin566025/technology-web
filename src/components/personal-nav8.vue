<template>
	<div class="tech-content">
		<p class="good">
			<img src="../../static/img/good2.png" class="good-icon" />
			<a class="good-text">我的订阅</a>
		</p>
		<div class="section-content">
			<div class="content-tops">
				<div class="content-top clearfix">
					<div class="content-top-left fl">设置订阅邮箱：</div>
					<input class="content-top-right fl" type="text" placeholder="请输入邮箱地址" />
				</div>
				<div class="content-top clearfix">
					<div class="content-top-left fl">选择订阅刊目：</div>
					<div class="content-top-right2 fl clearfix"  >
						<div class="right-btn fl" v-for="(item,index) in btnList" @click="changeBtnIndex(index)" :class="index==btnIndex ? 'right-btn-active':''">{{ item }}</div>
						
					</div>
				</div>
				
				<div class="content-top clearfix">
					<div class="content-top-left fl"></div>
					<div class="content-top-right3 fl"  >保存</div>
				</div>
			</div>
			<div class="content-bottom">
				<p class="newest">最新样刊</p>
				<div class="newest-pic">
					<img src="../../static/image/active4.jpeg" />
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>

	export default{
		data(){
			return {
		        tab:true,
		        btnList:["技术简报","专题"],
		        btnIndex:"0"
			}
		},

		methods:{
			changeBtnIndex:function(index){
				this.btnIndex = index
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
	.content-top-left{height: 40px;line-height:40px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: left;font-family: Roboto;width: 120px;}
	.content-top-right{height: 40px;line-height: 40px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);width: 276px;}
	.right-btn{cursor: pointer;margin-right: 20px;width: 116px;height: 40px;line-height:40px;border-radius: 5px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);}
	.right-btn-active{background-color: #FF9800;color: #FFFFFF;border: none;}
	.content-top{margin-top: 44px;}
	.content-tops{padding-bottom: 40px;border-bottom: 1px solid gainsboro;}
	.content-top-right3{width: 160px;height: 50px;line-height: 50px;border-radius: 4px;color:#FFFFFF;font-size: 14px;text-align: center;font-family: Microsoft Yahei;background-color: #1F93FF;}
	.newest{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;padding: 34px 0 20px 0;}
	.newest-pic{width: 300px;height: 400px;background-color: gainsboro;}
	.newest-pic img{width: 300px;height: 400px;}
</style>