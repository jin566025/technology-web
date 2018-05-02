<template>
	<div class="publish">
		<p class="pubish-title">需求发布</p>
		<div class="publish-main">
			<div class="publish-title2">
				<div class="publish-title2-text">基本信息</div>
			</div>
			<div class="publish-name">
				<p class="publish-name-text">需求名称</p>
				<input class="publish-name-input" placeholder="请输入需求名称" type="text" />
			</div>
			<div class="publish-name">
				<p class="publish-name-text">需求详述 (目前主要的技术问题、需求场景等）:</p>
				<textarea class="publish-name-input2"></textarea>
			</div>
			<div class="publish-section">
				<p class="publish-name-text">研发经费</p>
				<div class="publish-types clearfix">
					<div class="publish-type fl" v-for="(item,index) in typeList" :class="typeIndex==index ? 'type-active':''" @click="changeType(index)">{{ item }}</div>
				</div>
			</div>
			<div class="publish-section">
				<p class="publish-name-text">研发周期</p>
				<div class="publish-types clearfix">
					<input type="text" placeholder="10月" class="time inline-block" />
					<div class="line inline-block"></div>
					<input type="text" placeholder="18月" class="time inline-block" />
				</div>
			</div>
			
			<div class="publish-name">
				<p class="publish-name-text">所属机构名称</p>
				<input class="publish-name-input" placeholder="请输入所属机构名称" type="text" />
			</div>
			<div class="publish-section">
				<p class="publish-name-text">需求领域</p>
				<div class="publish-types clearfix">
					<div class="publish-type fl" v-for="(item,index) in typeList2" :class="typeIndex2==index ? 'type-active':''" @click="changeType2(index)">{{ item }}</div>
				</div>
			</div>
			
			<div class="publish-title2">
				<div class="publish-title2-text publish-title2-text2">以下信息不会公开，只给技术方看</div>
			</div>
			<div class="publish-name">
				<p class="publish-name-text">企业名称</p>
				<input class="publish-name-input" placeholder="请输入企业名称" type="text" />
			</div>
			<div class="publish-name">
				<p class="publish-name-text">所在省份</p>
				<select class="publish-select">
					<option>选择省份</option>
					<option>浙江省</option>
					<option>江苏省</option>
					<option>山东省</option>
					<option>河南省</option>
				</select>
				<select class="publish-select">
					<option>选择市</option>
					<option>宁波市</option>
					<option>绍兴市</option>
					<option>杭州市</option>
					<option>湖州市</option>
				</select>
			</div>
			<div class="publish-section">
				<p class="publish-name-text">企业规模</p>
				<div class="publish-types clearfix">
					<div class="publish-type fl" v-for="(item,index) in typeList3" :class="typeIndex3==index ? 'type-active':''" @click="changeType3(index)">{{ item }}</div>
				</div>
			</div>
			<div class="publish-name">
				<p class="publish-name-text">主营业务:</p>
				<textarea class="publish-name-input2"></textarea>
			</div>
			
			<div class="publish-bottom clearfix">
				<div class="publish-bottom-left fl">联系电话：18869999988</div>
				<div class="publish-bottom-right fr clearfix">
					<div class="checked-text inline-block">向咨询者公开</div>
					<div class="checked-circle inline-block" :class="checked1==true ? 'checked-color':''" @click="changeChecked1()">
						<div class="checked" :class="checked1==true ? 'circle-to-right':'circle-to-left'"></div>
					</div>
				</div>
			</div>
			<div class="publish-bottom clearfix">
				<div class="publish-bottom-left fl">联系邮箱：18869999@qq.com</div>
				<div class="publish-bottom-right fr">
					<div class="checked-text inline-block">向咨询者公开</div>
					<div class="checked-circle inline-block" :class="checked2==true ? 'checked-color':''" @click="changeChecked2()">
						<div class="checked" :class="checked2==true ? 'circle-to-right':'circle-to-left'"></div>
					</div>
				</div>
			</div>
			<p class="publish-p1">完善的信息能大大缩短您技术上线推广的审核时间</p>
			<div class="finish-btn">确认发布</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				typeList:["公开","面议"],
				typeList2:["HTML","css","数据库","服务器"],
				typeList3:["50人以下","50-100人","100-200人","200人以上"],
				typeIndex:0,
				typeIndex2:0,
				typeIndex3:0,
				checked1:false,
				checked2:false
			}
			
		},
		methods:{
			changeType:function(index){
				this.typeIndex = index;
			},
			changeType2:function(index){
				this.typeIndex2 = index;
			},
			changeType3:function(index){
				this.typeIndex3 = index;
			},
			changeChecked1:function(){
				this.checked1 = !this.checked1
			},
			changeChecked2:function(){
				this.checked2 = !this.checked2
			}
		}
	}
</script>

<style scoped>
	.publish{width: 1024px;margin: 0 auto;border: 1px solid gainsboro;}
	.publish-main{width: 862px;margin: 0 auto;padding-bottom: 110px;}
	.pubish-title{height:30px;line-height: 30px;color: rgba(16, 16, 16, 1);font-size: 20px;text-align: center;font-family: Roboto;border-bottom: 1px solid gainsboro;padding: 26px 0;font-weight: bold;}
	.publish-title2{position: relative;width: 100%;margin: 0 auto;margin-top: 20px;}
	.publish-title2-text{margin: 0 auto;width: 160px;height: 50px;line-height: 50px;border-radius: 100px;background-color: rgba(217, 239, 255, 1);color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(31, 147, 255, 1);}
	.publish-title2:before,.publish-title2:after{position: absolute;height: 1px;background-color: #BBBBBB;top: 25px;width:280px;content: "";}
	.publish-title2:before{left: 0;}
	.publish-title2:after{right: 0;}
	.publish-name{margin-top: 40px;}
	.publish-name-text{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;}
	.publish-name-input{width: 857px;padding-left: 5px;height: 40px;line-height: 40px;border-radius: 5px;border: 1px solid #BBBBBB;margin-top: 16px;font-size: 14px;font-family: Roboto;}
	.publish-name-input2{width: 842px;padding: 10px;height: 158px;font-size: 14px;font-family: Roboto;border: 1px solid #BBBBBB;resize: none;margin-top: 20px;border-radius: 5px;}
	.publish-type{cursor: pointer;margin-right: 20px;width: 100px;height: 40px;line-height: 40px;border-radius: 5px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);}
	.publish-section{margin-top: 36px;}
	.publish-types{margin-top: 20px;}
	.type-active{background-color: #FF9800;border:1px solid #FF9800;color: #FFFFFF;}
	.time{width: 100px;height: 40px;line-height: 40px;border-radius: 5px;color: rgba(16, 16, 16, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(187, 187, 187, 1);text-align: center;}
	.line{width: 60px;height: 1px;background-color: #BBBBBB;margin: 0 20px;}
	.publish-title2-text2{width: 246px;}
	.publish-select{width: 120px;height: 40px;line-height: 40px;color: rgba(0, 0, 0, 1);font-size: 14px;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);border-radius: 5px;margin-right: 20px;}
	.publish-bottom-left,.publish-bottom-right{width: 430px;color: #8C8C8C;font-family: Roboto;font-size: 14px;height: 24px;line-height: 24px;vertical-align: middle;}
	.publish-bottom-right{text-align: right;}
	.publish-bottom{margin-top: 20px;}
	.publish-p1{font-family: Roboto;font-size: 14px;color: #B3B3B3 ;text-align: center;margin-top: 66px;}
	.finish-btn{margin: 0 auto;margin-top: 20px;width: 200px;height: 60px;line-height: 60px;border-radius: 4px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Microsoft Yahei;}
	.checked-circle{width: 40px;height: 20px;border-radius: 24px;border: 1px solid #8C8C8C;vertical-align: middle;margin-left: 10px;cursor: pointer;position: relative;}
	.checked{position: absolute;width: 14px;height: 14px;border: 2px solid #8C8C8C;left: 0;top: 1px;border-radius: 50%;}
	.checked-color{background-color:  #1F93FF;border: none;}
	.publish-select{margin-top: 20px;}
	@keyframes circleRight{
		from{
			left: 0;
		}
		to{
			left: 21px;
		}
	}
	@keyframes circleLeft{
		from{
			left: 21px;
		}
		to{
			left: 0;
		}
	}
	.circle-to-right{
		animation:circleRight 0.5s forwards ;background-color: #FFFFFF;border: 2px solid #FFFFFF;
	}
	.circle-to-left{
		animation:circleLeft 0.5s forwards ;
	}
</style>