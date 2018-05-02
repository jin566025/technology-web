<template>
	<div class="content">
		
		<div class="navs">
			<a class="nav" onclick="history.go(-1)">咨询</a>
			<a class="nav">></a>
			<a class="nav">专家列表</a>
		</div>
		<div class="main2 clearfix">
			<div class="main-left fl">
				<div class="main-section clearfix">
					<div class="main-section-left fl">
						<img src="../../static/img/test.jpg" class="heads" />
					</div>
					<div class="main-section-right fr">
						<div class="section-p clearfix">
							<p class="section-p1 fl">
								<a class="name">刘向阳</a>
								<a class="level">教授</a>
								<a class="split"> | </a>
								<a class="school">厦门大学</a>
							</p>
							<p class="section-p2 fr">咨询专家</p>
						</div>
						<div class="skills clearfix">
							<div class="skill inline-block">数据库专家</div>
							<div class="skill inline-block">网络编程</div>
						</div>
						<p class="desc-text">简介</p>
						<p class="desc-text2">概况刘向阳教授现为中组部“千人计划”专家，教育部长江学者讲座教授，博士生导师。 刘向阳教授毕业于山东大学化学系,获得理学学士学位；并于山</p>
						<div class="desc3 clearfix">
							<a class="desc-circle inline-block">专</a>
							<a class="desc-text3 inline-block">专利：无人监控管理系统;</a>
						</div>
						<div class="desc3 clearfix">
							<a class="desc-circle inline-block">论</a>
							<a class="desc-text3 inline-block">论文：论数据库对系统不可代替的作用;</a>
						</div>
						<p class="read-more" @click="readMore()">更多 >></p>
					</div>
				</div>
				<div class="main-section clearfix">
					<div class="main-section-left fl">
						<img src="../../static/img/test.jpg" class="heads" />
					</div>
					<div class="main-section-right fr">
						<div class="section-p clearfix">
							<p class="section-p1 fl">
								<a class="name">刘向阳</a>
								<a class="level">教授</a>
								<a class="split"> | </a>
								<a class="school">厦门大学</a>
							</p>
							<p class="section-p2 fr">咨询专家</p>
						</div>
						<div class="skills clearfix">
							<div class="skill inline-block">数据库专家</div>
							<div class="skill inline-block">网络编程</div>
						</div>
						<p class="desc-text">简介</p>
						<p class="desc-text2">概况刘向阳教授现为中组部“千人计划”专家，教育部长江学者讲座教授，博士生导师。 刘向阳教授毕业于山东大学化学系,获得理学学士学位；并于山</p>
						<div class="desc3 clearfix">
							<a class="desc-circle inline-block">专</a>
							<a class="desc-text3 inline-block">专利：无人监控管理系统;</a>
						</div>
						<div class="desc3 clearfix">
							<a class="desc-circle inline-block">论</a>
							<a class="desc-text3 inline-block">论文：论数据库对系统不可代替的作用;</a>
						</div>
						<p class="read-more">更多 >></p>
					</div>
				</div>
				<div class="main-section clearfix">
					<div class="main-section-left fl">
						<img src="../../static/img/test.jpg" class="heads" />
					</div>
					<div class="main-section-right fr">
						<div class="section-p clearfix">
							<p class="section-p1 fl">
								<a class="name">刘向阳</a>
								<a class="level">教授</a>
								<a class="split"> | </a>
								<a class="school">厦门大学</a>
							</p>
							<p class="section-p2 fr">咨询专家</p>
						</div>
						<div class="skills clearfix">
							<div class="skill inline-block">数据库专家</div>
							<div class="skill inline-block">网络编程</div>
						</div>
						<p class="desc-text">简介</p>
						<p class="desc-text2">概况刘向阳教授现为中组部“千人计划”专家，教育部长江学者讲座教授，博士生导师。 刘向阳教授毕业于山东大学化学系,获得理学学士学位；并于山</p>
						<div class="desc3 clearfix">
							<a class="desc-circle inline-block">专</a>
							<a class="desc-text3 inline-block">专利：无人监控管理系统;</a>
						</div>
						<div class="desc3 clearfix">
							<a class="desc-circle inline-block">论</a>
							<a class="desc-text3 inline-block">论文：论数据库对系统不可代替的作用;</a>
						</div>
						<p class="read-more">更多 >></p>
					</div>
				</div>
				<div class="pagination-content">
					<page :total="total" :current-page='current' @pagechange="pagechange"></page>
				</div>
			</div>
			<div class="main-right fr">
				<p class="main-right-p1">专家推荐服务</p>
				<p class="main-right-p2">10000+深度合作专家  提供专业咨询</p>
				<input class="name-input box-sizing" type="text" placeholder="您的姓名" />
				<div class="tels clearfix">
					<select class="tel-select inline-block fl">
						<option>+86</option>
						<option>+87</option>
						<option>+88</option>
						<option>+89</option>
					</select>
					<input class="tel-input inline-block fr" placeholder="请输入您的手机号" type="text" />
				</div>
				<div class="yzm clearfix">
					<input type="text" placeholder="请输入您的验证码" class="yzm-input inline-block box-sizing" />
					<button class="yzm-btn box-sizing inline-block">发送验证码</button>
				</div>
				<textarea class="texts" placeholder="请提供您的需求，我们将为您推荐合适的专家，提供专业的咨询服务"></textarea>
				<button class="contract">帮我联系</button>
				<p class="main-right-p1">推荐机构</p>
				
				<div class="recommend">
					<div class="recommend-img">
						<img class="consult-img" src="../../static/image/consult4.png" />
					</div>
					<div class="recommend-text">北京大学</div>
				</div>
				<div class="recommend">
					<div class="recommend-img">
						<img class="consult-img" src="../../static/image/consult3.png" />
					</div>
					<div class="recommend-text">杭州电子科技大学</div>
				</div>
				<div class="recommend">
					<div class="recommend-img">
						<img class="consult-img" src="../../static/image/consult6.png" />
					</div>
					<div class="recommend-text">百度</div>
				</div>
				<div class="recommend">
					<div class="recommend-img">
						<img class="consult-img" src="../../static/image/consult5.png" />
					</div>
					<div class="recommend-text">宁波大学</div>
				</div>
				
			</div>
			
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
			}
		},
		methods:{
			readMore:function(){

				this.$router.push({path:'consult-list1-detail?navid='+2});
			},
			pagechange:function(currentPage){
		       console.log(currentPage);
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		
		  	},
		},
		components:{
			Page
		}
	}
</script>

<style scoped>
	.zanwei{width: 100%;height: 100px;}
	.content{width: 1024px;margin: 0 auto;}
	.navs{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;margin: 20px 0;cursor: pointer;}
	.pagination-content{margin-top: 34px;}
	.main-right{width: 200px;padding: 10px 5px;border: 1px solid gainsboro;}
	.heads{width: 140px;height: 140px;text-align: center;border-radius: 50%;}
	.main-section-left{width: 200px;}
	.main-section-right{width: 550px;}
	.section-p1{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;font-weight: bold;}
	.split{font-weight: 100;margin: 0 10px;}
	.name{margin-right: 50px;}
	.main-section{border: 1px solid gainsboro;width: 750px;padding: 20px;margin-bottom: 10px;}
	.section-p2{width: 84px;text-align: center;cursor: pointer;height: 30px;line-height: 30px;border-radius: 4px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;font-family: Microsoft Yahei;}
	.section-p{margin-top: 30px;}
	.skill{width:100px;height: 30px;line-height: 30px;margin-right: 24px;border-radius: 4px;background-color: rgba(255, 152, 0, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;}
	.skills{margin-top: 20px;}
	.desc-text{margin-top: 20px;margin-bottom: 10px;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;}
	.desc-text2{height: 60px;line-height: 20px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;overflow: hidden;text-overflow: ellipsis;padding-bottom: 5px;border-bottom: 1px dotted gainsboro;}
	.desc-circle{width: 24px;height: 24px;line-height: 24px;border-radius: 50%;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Roboto;}
	.desc3{margin-top:16px ;}
	.desc-text3{color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;}
	.read-more{text-align: right;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;cursor: pointer;}
	.main-right-p1{width: 190px;padding-left: 5px;border-left: 3px solid darkgray;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 16px;font-family: Roboto;}
	.main-right-p2{height: 24px;line-height: 24px;color: rgba(190, 194, 201, 1);font-size: 12px;font-family: Roboto;}
	.name-input{width: 200px;padding: 0 5px;height: 30px;line-height: 30px;color: rgba(136, 136, 136, 1);font-size: 10px;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);}
	.tel-select{vertical-align: middle;width: 60px;height: 30px;line-height: 30px;color: rgba(16, 16, 16, 1);font-size: 10px;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);border-radius: 5px;}
	.tel-input{vertical-align: middle;width: 110px;padding: 0 10px;height: 30px;line-height: 30px;color: rgba(136, 136, 136, 1);font-size: 10px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);}	
	.tels{margin-top: 10px;}
	.yzm{font-size: 0;margin-top: 10px;}
	.yzm-input{vertical-align: middle;width: 130px;padding: 0 5px;height: 30px;line-height: 30px;color: rgba(136, 136, 136, 1);font-size: 10px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);}
	.yzm-btn{vertical-align: middle;cursor: pointer;width: 70px;height: 30px;line-height: 30px;background-color:#E51C23;color: #FFFFFF;font-size: 10px;text-align: center;font-family: Microsoft Yahei;border: none;}
	.texts{resize: none;padding: 5px;width: 188px;margin-top: 10px;height: 100px;line-height: 17px;color: rgba(136, 136, 136, 1);font-size: 12px;text-align: left;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);}
	.contract{margin-bottom: 20px;width: 200px;height: 30px;line-height: 30px;background-color: #1F93FF;color: #FFFFFF;font-size: 10px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}
	.recommend-img{background: gainsboro;width: 200px;height: 150px;}
	.recommend-text{height:60px;line-height: 28px;color: rgba(16, 16, 16, 1);font-size: 15px;font-family: Roboto;padding: 0 5px;}
	.recommend{border: 1px solid gainsboro;margin-top: 10px;}
	.consult-img{width: 200px;height: 150px;}
</style>