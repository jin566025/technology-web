<template>
	<div class="personal">
		
		<div class="personal-tab1" v-if="tab">
			<p class="personal-title">
				<img class="msg-icon" src="../../static/img/msg.png" />
				<a class="msg-text">我的消息</a>
			</p>
			<div class="personal1-content">
				<div class="personal1-part" @click="lookDetail()">
					<div class="personal-part-left inline-block">
						<div class="weidu"></div>
					</div>
					<a class="personal-part-mid">您已参加xxxxxxxxxx活动，请准时参加</a>
					<a class="personal-part-right inline-block fr ">2018-03-20</a>
				</div>
				<div class="personal1-part">
					<div class="personal-part-left inline-block">
						<div class="weidu"></div>
					</div>
					<a class="personal-part-mid">您已参加xxxxxxxxxx活动，请准时参加</a>
					<a class="personal-part-right inline-block fr ">2018-03-20</a>
				</div>
				<div class="personal1-part">
					<div class="personal-part-left inline-block">
						<div class="weidu"></div>
					</div>
					<a class="personal-part-mid">您已参加xxxxxxxxxx活动，请准时参加</a>
					<a class="personal-part-right inline-block fr ">2018-03-20</a>
				</div>
				<div class="personal1-part">
					<div class="personal-part-left inline-block">
						<div class="weidu"></div>
					</div>
					<a class="personal-part-mid">您已参加xxxxxxxxxx活动，请准时参加</a>
					<a class="personal-part-right inline-block fr ">2018-03-20</a>
				</div>
			</div>
			<div class="pagination-content">
				<page :total="total" :current-page='current' @pagechange="pagechange"></page>
			</div>
		</div>
		<div class="personal-tab2" v-else>
			<p class="personal-tab2-nav">
				<a @click="lookDetail()">消息中心</a>
				<a>></a>
				<a>详情</a>
			</p>
			<p class="personal-tab2-title">你成功报名了活动</p>
			<p class="msg-detail">您已成为迈科技普通会员。可以免费使用平台资源，并自主对接。升级企动力会员后，可享受专家推荐、政策申请等技术创新一站式服务。</p>
			<p class="msg-time">2018 - 03 -24</p>
			<div class="next-content clearfix">
				<div class="next fr">下一条</div>
			</div>
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
	.personal-title{width: 100%;height: 70px;line-height: 70px;}
	.msg-icon{width: 30px;height: 30px;vertical-align: middle;margin: 0 30px;}
	.msg-text{color: rgba(16, 16, 16, 1);font-size: 16px;text-align: center;font-family: Roboto;vertical-align: middle;}
	
	
	.personal1-part{width: 820px;height: 100px;border-top:1px solid gainsboro ;border-bottom:1px solid gainsboro ;vertical-align: middle;padding: 20px;}
	.personal-part-left{position: relative;background-image: url(../../static/img/msg2.png);background-repeat: no-repeat;background-position: center;background-size: 30px;border-radius: 8px;height: 100%;width: 100px;vertical-align: middle;border: 1px solid #1F93FF ;}
	.personal-part-mid{color: rgba(16, 16, 16, 1);font-size: 14px;text-align: left;font-family: Roboto;padding-left: 24px;vertical-align: middle;display: inline-block;width: 400px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
	.personal-part-right{color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;padding-top: 70px;}
	.pagination-content{padding: 20px 0;}
	.weidu{width: 16px;height: 16px;position: absolute;right: -6px;top: -6px;background-color: #E51C23;border-radius: 50%;}
	.personal-tab2-nav{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;cursor: pointer;}
	.personal-tab2{width: 824px;margin: 0 auto;padding-bottom: 20px;padding-top: 30px;}
	.personal-tab2-title{margin-top: 36px;height: 30px;line-height: 30px;color: rgba(16, 16, 16, 1);font-size: 18px;text-align: center;font-family: Roboto;margin-bottom: 40px;}
	.msg-detail{line-height: 20px;color: rgba(150, 150, 150, 1);font-size: 14px;text-align: left;font-family: Roboto;margin-bottom: 14px;}
	.msg-time{height: 24px;line-height: 24px;color: rgba(89, 89, 89, 1);font-size: 14px;text-align: right;font-family: Roboto;margin-bottom: 68px;}
	.next{cursor: pointer;width: 80px;height: 30px;line-height: 30px;border-radius: 4px;color: #1F93FF;font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid #1F93FF;}
	
</style>