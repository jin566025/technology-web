<template>
	<div class="content">
		<div class="first-page" v-if="firstPageShow">
			<div class="navs">
				<router-link tag="a" class="nav" to="/consult">专家</router-link>
				<a class="nav">></a>
				<a class="nav">合作机构列表</a>
			</div>
			<div class="main2 clearfix">
				<div class="section fl" @click="readDetail()">
					<div class="section-banner">
						<img src="../../static/image/consult7.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult6.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult5.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult4.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult3.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div><div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult7.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult6.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult4.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult3.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult2.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult7.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
				<div class="section fl">
					<div class="section-banner">
						<img src="../../static/image/consult6.png" class="consult-img" />
					</div>
					<div class="section-text">上海科技大学</div>
				</div>
			</div>
			<div class="pagination-content">
				<page :total="total" :current-page='current' @pagechange="pagechange"></page>
			</div>
		</div>
		<div class="second-page" v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Page from '../components/page'
	export default{
		data(){
			return {
				total: 150,     // 记录总条数
		        display: 10,   // 每页显示条数
		        current: 1,   // 当前的页数
		        firstPageShow:true
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
		  	readDetail:function(){
		  		this.firstPageShow=false;
		  		this.$router.push({path:'/consult/consult-list2/consult-list2-detail'});
		  	},

			watchHref:function(){
				var href = window.location.href;
				var match = /\b(detail)\b/
		    	if(match.test(href)){
					this.firstPageShow=false;
				}else{
					this.firstPageShow=true;
				}

			}
		},
		created(){
			this.watchHref()
		},
		watch:{
			$route(){
		    	this.watchHref()
		    }
		}
	}
</script>

<style scoped>
	.zanwei{width: 100%;height: 100px;}
	.content{width: 1024px;margin: 0 auto;}
	.navs{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;margin: 20px 0;cursor: pointer;}
	.section{width: 240px;border: 1px solid gainsboro;height: 260px;margin-right: 18px;margin-bottom: 20px;}
	.section:nth-child(4n+4){margin-right: 0;}
	.section-banner{width:240px;height: 180px;background-color: gainsboro;}
	.section-text{height: 70px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;text-align: left;font-family: Roboto;padding-top: 10px;width: 230px;padding-left: 5px;}
	.consult-img{width: 240px;height: 180px;}

</style>