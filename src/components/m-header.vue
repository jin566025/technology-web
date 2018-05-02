<template>
	<div>
		<div class="zanwei"></div>
		<div class="head-content">
			
			<div class="header">
				
				<div class="clearfix head">
					<img class="logo inline-block" src="../../static/img/test.jpg" />
					<a class="inline-block name">项目名称</a>
					<div class="navs-container inline-block clearfix">
						<router-link  tag="div" class="navs inline-block" :to="item.path" :class="navIndex==index ? 'navs-active':''" v-for="(item,index) in navList">{{ item.name }}</router-link>
					</div>
					<div class="nav-search clearfix inline-block">
						<input class="search-input" type="text" placeholder="search" />
						<button class="search-btn">搜索</button>
					</div>
					<div class="login-content  inline-block">
						<div v-if="isLogin" class="inline-block login-content2 clearfix">
							<router-link tag="a"  class="inline-block head-text2" to="/personal">张</router-link>
							
							<img class="logout" src="../../static/img/logout.png" />
							<a class="inline-block head-text3">退出</a>
						</div>
						<div v-else class="inline-block login-content2" @click="login()">
							<a class="login">登录</a>
							<img class="login-icon" src="../../static/img/person-info.png" />
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				scroll:'',
				isTop:false,
				isLogin:true,
				navList:[
					{"name":"首页","path":"/index-content"},
					{"name":"服务","path":"/service"},
					{"name":"咨询","path":"/consult"},
					{"name":"活动","path":"/activity"},
					
				],
				navIndex:"-1",
				loginHide:false
			}
		},

		created(){
			var hrefs = window.location.href.split("=");
	    	if(hrefs[1]){
	    		
	    		if(hrefs[1]=="a"){
	    			this.loginHide = true
	    		}else{
	    			this.navIndex = hrefs[1];
	    			this.loginHide = false
	    		}
	    		
	    	}else{
	    		this.navIndex = "-1";
	    		this.loginHide = false
	    	}
		},
		methods:{
			
			login:function(){
				var param = "a"
				this.$router.push({path:'/account-login?id='+param})
			}
		},
		watch:{
		    $route(){
		    	var hrefs = window.location.href.split("=");
		    	if(hrefs[1]){
		    		
		    		if(hrefs[1]=="a"){
		    			this.loginHide = true
		    		}else{
		    			this.navIndex = hrefs[1];
		    			this.loginHide = false
		    		}
		    		
		    	}else{
		    		this.navIndex = "-1";
		    		this.loginHide = false
		    	}
		    	
		    }
		}
	}
</script>

<style scoped>
	.zanwei{width: 100%;height: 100px;}
	.head-content{top: 0;z-index: 12;width: 100%;position: fixed;height: 100px;background-color: rgba(0,0,0,0.6);}
	.head-bg{background-color: #FFFFFF;}
	.head{vertical-align: middle;width: 1024px;height: 100px;line-height: 100px;margin: 0 auto;}
	.logo{vertical-align: middle;width: 60px;height: 60px;border-radius: 50%;}
	.name{color: #FFFFFF;font-size: 20px;font-weight: bold;font-family: Roboto;margin: 0 10px;width: 100px;}
	.navs{color: #FFFFFF;font-size: 14px;font-family: Roboto;height: 40px;line-height: 40px;margin-right: 60px;cursor: pointer;}
	.navs-container{margin-left: 50px;width: 380px;}
	.logout{vertical-align: middle;width: 14px;height: 14px;cursor: pointer;}
	.head-text1{color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Roboto;margin-right: 24px;}
	.head-text2{background-color:#0AA3C4;margin-right: 24px;width:30px;height: 30px;line-height: 30px;border-radius:50%;color:#fff;font-size: 14px;text-align: center;font-family: Roboto;}
	.head-text3{color: #FFFFFF;font-size: 12px;font-family: Roboto;cursor: pointer;}
	.navs-active{color:#1F93FF;border-bottom:2px solid #1F93FF ;}
	
	.router-link-active{color:#1F93FF;border-bottom:2px solid #1F93FF ;}
	.login{height: 24px;line-height: 24px;color: rgba(16, 16, 16, 1);font-size: 12px;font-family: Roboto;vertical-align: middle;cursor: pointer;margin-right: 10px;}
	.login-icon{width: 22px;height: 22px;vertical-align: middle;;cursor: pointer;}
	.login-content{vertical-align: middle;width:140px;height: 60px;line-height: 60px;text-align: right;margin: 0 auto;}
	.nav-search{width: 250px;position: relative;}
	.search-input{width: 200px;padding-left: 5px;height: 28px;line-height: 28px;border-radius: 5px;background-color: rgba(255, 255, 255, 1);color: rgba(200, 200, 200, 1);font-size: 14px;text-align: left;font-family: Roboto;border: 1px solid rgba(31, 147, 255, 1);}

	.search-btn{cursor: pointer;top: 36px;position: absolute;right:0;width: 60px;height: 30px;line-height: 30px;border-radius: 5px;background-color: rgba(31, 147, 255, 1);color: rgba(255, 255, 255, 1);font-size: 12px;text-align: center;font-family: Roboto;border: 1px solid rgba(31, 147, 255, 1);}

	/*.header{width: 1440px;margin: 0 auto;position: fixed;z-index: 10;background-color: #FFFFFF;left: 50%;transform: translateX(-50%);-moz-transform:  translateX(-50%) ;-webkit-transform: translateX(-50%);-ms-transform: translateX(-50%);}
	@media  screen  and (max-width: 1440px) {
		.header{transform: translateX(0);-moz-transform:translateX(0);-webkit-transform: translateX(0);-ms-transform:translateX(0);left: 0;}
	}*/
</style>