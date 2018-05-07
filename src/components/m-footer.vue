<template>
	<div class="footer-content clearfix" :class="footerHide==true ? 'footer-hide':''">
		<div class="footer clearfix">
			<div class="footer-nav footer-nav1 fl">
				<p class="title">关于我们</p>
				<p class="navs">公司简介</p>
				<p class="navs">优势与服务</p>
				<p class="navs">发展中心</p>
			</div>
			<div class="footer-nav footer-nav2 fl">
				<p class="title">联系我们</p>
				<p class="navs">
					<a>联系我们：</a>
					<a class="tel">400—1234567</a>
				</p>
				<p class="navs">
					<a>邮箱：41236987@163.com</a>
				</p>
				<p class="navs">
					<a>地址：浙江省宁波市海曙区宁波国际会展中心18号馆</a>
				</p>
			</div>
			<div class="footer-nav footer-nav3 fl">
				<p>微信公众号</p>
				<img class="ewm" src="../../static/image/erweima.jpeg" />
			</div>
		</div>
		<div class="footer2 clearfix">
			<div class="footer2-left fl">友情链接：</div>
			<div class="footer2-right fl clearfix">
				<div class="link fl">中国科技网</div>
				<div class="link fl">迈科技</div>
				<div class="link fl">飞天众智</div>
				<div class="link fl">国家知识产权局</div>
				<div class="link fl">中国科学技术网</div>
				<div class="link fl">迈科技</div>
				<div class="link fl">飞天众智</div>
				<div class="link fl">国家知识产权局</div>
				<div class="link fl">中国科技网</div>
				<div class="link fl">迈科技</div>
				<div class="link fl">飞天众智</div>
				<div class="link fl">国家知识产权局</div>
				<div class="link fl">中国科学技术网</div>

			</div>
		</div>
		<div class="footer-copyright">Copyright © 沪ICP备15000929号-1 | 上海迈坦信息科技有限公司 | 021-54336693 注册条款</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				footerHide:false
			}
			
		},
		methods:{
			
		},
		created(){
			var hrefs = window.location.href.split("=");
	    	if(hrefs[1]=="a"){
	    		this.footerHide = true
	    	}else{
	    		this.footerHide = false
	    	}
		},
		watch:{
			$route(){
		    	var hrefs = window.location.href.split("=");
		    	if(hrefs[1]=="a"){
		    		this.footerHide = true
		    	}else{
		    		this.footerHide = false
		    	}
		    	
		    }
		}
	}
</script>

<style scoped>
	.footer-content{width: 100%;background-color: #383838;height:342px;margin-top: 100px;}
	.footer{width: 1024px;margin: 0 auto;padding-bottom: 20px;border-bottom: 2px solid #969696;}
	.footer-hide{display: none;}
	.footer-nav{margin-top: 32px;}
	.footer-nav1{text-align: center;width: 20%;}
	.ewm{width: 140px;height: 140px;text-align: center;}
	.footer-nav3 p{height: 24px;line-height: 24px;color: rgba(255, 255, 255, 1);font-size: 16px;text-align: center;font-family: Roboto;margin-bottom: 12px;}
	.footer-nav3{text-align: center;width: 16%;}
	.footer-nav2{text-align: left;width: 50%;margin-left: 10%;}
	.title{height: 24px;line-height: 24px;color: rgba(255, 255, 255, 1);font-size: 18px;font-family: Roboto;margin-bottom:10px;}
	.navs{color: rgba(222, 222, 222, 1);font-size: 14px;font-family: Roboto;height: 41px;line-height: 41px;}
	.tel{height: 41px;line-height: 41px;color: rgba(43, 153, 255, 1);font-size: 28px;font-family: Roboto;}
	.footer2{width: 1024px;margin: 0 auto;margin-top: 15px;}
	.footer2-left{width: 104px;color: rgba(255, 255, 255, 1);font-size: 18px;text-align: center;font-family: Roboto;}
	.footer2-right{width: 920px;}
	.link{height: 24px;line-height: 24px;color: #FFFFFF;font-size: 14px;font-family: Roboto;margin-right: 60px;margin-bottom: 20px;cursor: pointer;}
	.footer-copyright{width: 100%;background-color: #2B2B2B ;color: #FFFFFF;text-align: center;height: 40px;line-height: 40px;font-family: Roboto;font-size: 12px;}
</style>