<template>
	<div class="float-navs">
		<div class="float-nav" @click="publishTech()">
			<img class="float-icon" src="../../static/img/float-icon1.png"  />
			<p>发布技术</p>
		</div>
		<div class="float-nav" @click="publishNeed()">
			<img class="float-icon" src="../../static/img/float-icon2.png" />
			<p>发布需求</p>
		</div>
		<div class="float-nav"  id='goTop' @click='goTop()'>
			<img class="float-icon" src="../../static/img/float-icon3.png" />
			<p>返回顶部</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				stop:false,
				timer:null
			}
		},
		methods:{
			publishNeed:function(){
				this.$router.push({path:'/publish1'})
			},
			publishTech:function(){
				this.$router.push({path:'/publish2'})
			},
			goTop: function() { 
				var time = this.timer;
				var stop = this.stop;
		        clearInterval(time);  
		        time = setInterval(function() {
		            let curHeight = document.documentElement.scrollTop || document.body.scrollTop; 
		            var now = curHeight;  
		           
		            var speed = (0 - now) / 7;                 
		            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		            if (curHeight === 0) {                        
		              clearInterval(time);                             
		            }  
		            document.documentElement.scrollTop = curHeight + speed;
		            document.body.scrollTop = curHeight + speed;  
		            stop = false;

		       }, 30);  
		    }, 
		}
	}
</script>

<style scoped>
	.float-navs{z-index: 999;right: 0;position: fixed;bottom: 50px;}
	.float-nav{text-align: center;width: 80px;height: 60px;background-color: #1F93FF;margin-top: 13px;cursor: pointer;}
	.float-nav .float-icon{width: 21px;height: 21px;margin-top: 7px;}
	.float-nav p{height: 20px;line-height: 20px;color: rgba(255, 255, 255, 1);font-size: 14px;text-align: center;font-family: Roboto;}
</style>