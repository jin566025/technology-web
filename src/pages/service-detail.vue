<template>

	<div class="content">
		
		<p class="navs">
			<router-link tag="a" to="/service">技术</router-link>
			<a class="nav-tag">></a>
			<a>详情</a>
		</p>
		<div class="content-main">
			<div class="content-main2 clearfix">
				<div class="main-left fl">
				
				</div>
				<div class="main-right fr">
					<p class="main-text1">智能家用服务机器人</p>
					<p class="main-text2">智能、环保的智能家用机器人，是一款环境友好型产品</p>
					<div class="desc-content clearfix">
						<a class="desc-section">智能家用</a>
						<a class="desc-section">大数据平台</a>
						<a class="desc-section">服务机器人</a>
					</div>
					<div class="main-text3">联系技术方</div>
				</div>
			</div>
			
			<div class="main-bottom clearfix">
				<div class="detail-section fl">有无试点：有</div>
				<div class="detail-section fl">有无专利：有</div>
				<div class="detail-section fl">交付方式：xxx</div>
				<div class="detail-section fl">合作方式：xxxxx</div>
				<div class="detail-section fl">行业方向：xxxxx</div>
				<div class="detail-section fl">地址：IT行业</div>
				<div class="detail-section fl">所属机构名称：xxxxxxxxxxxxxxx</div>
			</div>
		</div>
		
		<div class="detail-btn">方案详述</div>
		<div class="detail-content">
			<div class="detail-section2 clearfix">
				<div class="detail-left fl">
					<div class="number">技术详述</div>
				</div>
				<div class="detail-right fl">
					<p>
一、技术背景

服务机器人是机器人家族中的一个年轻成员，可以分为专业领域服务机器人和个人/家庭服务机器人，服务机器人的应用范围很广，主要从事维护保养、修理、运输、清洗、保安、救援、监护等工作。数据显示，目前，世界上至少有48个国家在发展机器人，其中25个国家已涉足服务型机器人开发。在日本、北美和欧洲，迄今已有7种类型计40余款服务型机器人进入实验和半商业化应用。近年来，全球服务机器人市场保持较快的增长速度，根据国际机器人联盟的数据，2010年全球专业领域服务机器人销量达13741台，同比增长4%，销售额为320亿美元，同比增长15%；个人/家庭服务机器人销量为220万台，同比增长35%，销售额为5.38亿美元，同比增长39%。另外一个方面，全球人口的老龄化带来大量的问题，例如对于老龄人的看护，以及医疗的问题，这些问题的解决带来大量的财政负担。由于服务机器人所具有的特点使之能够显著的降低财政负担。因而服务机器人能够被大量的应用。我国在服务机器人领域的研发与日本、美国等国家相比起步较晚。在国家863计划的支持下，我国在服务机器人研究和产品研发方面已开展了大量工作，并取得了一定的成绩，如哈尔滨工业大学研制的导游机器人、迎宾机器人、清扫机器人等；华南理工大学研制的机器人护理床;中国科学院自动化研究所研制的智能轮椅等。
</p><p>
二、技术介绍

本项目所研发的基于大数据平台的智能家用服务机器人具有以下功能：

环境参数(温湿度、光线强度、CO和CO2浓度、空气质量)控制；
能识别语音指令、人工智能模式匹配和自学习；
有VIP模式、 孕妇模式、亲子模式等不同的应用模式；
定制化的个人服务云平台。 
关键技术主要是传感技术、控制技术、人机交互技术、物联网技术、大数据存储和分析技术、人机界面硬件和软件设计技术、移动端应用软件开发技术。其中的创新点在于传感技术、控制技术、人机交互技术、大数据存储和分析技术。

目前本项目中所涉及的关键技术均在实验室里得到了验证，并已经取得相关专利。本产品无生产废水和废渣，无医疗垃圾产生，为环境友好型产品。
</p><p>
三、项目阶段

目前产品已经进入产业化阶段，希望在本地能够找到产业化合作伙伴（生产或者投资，主要关注投资），并落地合适的产业园区。

					</p>
				</div>
			</div>
			<div class="detail-section2 clearfix">
				<div class="detail-left fl">
					<div class="number">产品优势</div>

				</div>
				<div class="detail-right fl">
					<p>该项目的技术优势在于：</p>
					<p>不生产废水和废渣</p>
					<p>无医疗垃圾定制化的云服务平台</p>
					<p>无医疗垃圾定制化的云服务平台</p>
				</div>
			</div>
			<div class="detail-section2 clearfix">
				<div class="detail-left fl">
					<div class="number">适用对象</div>

				</div>
				<div class="detail-right fl">
					<p>维护保养、运输、清洗、保安、救援、监护等</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		}
		
	}
</script>

<style scoped>
	.content{width: 1024px;margin: 0 auto;}
	.zanwei{height: 100px;width: 100%;}
	.navs{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;padding: 20px 0;}
	.navs a{color: rgba(16, 16, 16, 1);}
	.content-main{width: 1000px;padding: 12px;border: 1px solid gainsboro;padding-bottom: 30px;}
	.main-left{width: 400px;height: 300px;background-color: gainsboro;}
	.main-right{width: 580px;}
	.main-text1{height: 26px;line-height: 26px;color: rgba(16, 16, 16, 1);font-size: 18px;font-family: Roboto;}
	.main-text2{height: 24px;line-height: 24px;color: rgba(140, 140, 140, 1);font-size: 14px;font-family: Roboto;margin: 60px 0;}
	.desc-section{display: inline-block;padding: 0 5px;margin-right: 20px;height: 30px;line-height: 30px;border-radius: 4px;color: #FFFFFF;font-size: 14px;text-align: center;font-family: Microsoft Yahei;background-color: #FF9800 ;}
	.main-text3{height: 50px;line-height: 50px;width: 200px;margin-top: 46px;border-radius: 4px;background-color:#1F93FF;color:#FFFFFF;font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(255, 255, 255, 1);}
	.detail-section{color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;width: 240px;padding-left: 10px;margin-top: 16px;}
	.main-bottom{background-color: #D7F4FA;height: 100px;margin-top: 40px;}
	.detail-btn{width:200px;height:60px;line-height: 60px;background-color: #D9EFFF;color: rgba(16, 16, 16, 1);font-size: 20px;text-align: center;font-family: Roboto;border: 1px solid #1F93FF;font-weight: bold;margin-top: 30px;border-radius: 60px;margin-bottom: 20px;}
	.detail-content{width: 1024px;border: 1px solid #BBBBBB ;}
	.detail-left{width:140px;}
	.number{width: 100px;height: 100px;line-height: 100px;text-align: center;font-size: 14px;font-family: Roboto;font-weight: bold;margin: 0 auto;border: 1px solid #1F93FF;border-radius:50% ;background-color: #D9EFFF;}
	.detail-title{text-align: center;margin-top: 18px;height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
	.detail-right{width: 870px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;padding-bottom: 20px;border-bottom: 1px solid gainsboro;}
	.detail-section2{padding-top: 20px;padding-bottom: 20px;}
</style>