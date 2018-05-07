<template>
	<div class="swiper-container" id="swiper2">
	    <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="(item,index) in paths.imgList">
		        <div class="slide-content clearfix">
			      	<div class="slide-section fl" v-for="part in item">
			      		<img  :src="part" />
			      		<p>新型只能家电</p>
			      	</div>
		        </div>
		    </div>
		    
	    </div>
	    <router-link class="read-more" :to="paths.path" tag="p">查看更多</router-link>
    	<img class="prev" src="../../static/img/prev.png" />
    	<img class="next" src="../../static/img/next.png" />
  	</div>
</template>

<script>
  import Swiper from 'swiper';
  
  export default {
    props: ['paths'],
    mounted() {
      var swiper = new Swiper('#swiper2', {
        prevButton:'.prev',
		nextButton:'.next',

        speed: 600,
        autoplay:3000,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      });
    },
    created(){
    	console.log(this.paths.path)
    }
  }
</script>
<style scoped>
  @import url("../../static/css/swiper.min.css");
  .slide-section{width: 240px;height: 230px;margin-left:21px;background-color: #FFFFFF;}
  .slide-section:first-child{margin-left: 0;}
  .slide-section img{width: 240px;height: 180px;}
  .slide-section p{width: 240px;height:50px;line-height: 50px;font-family: Roboto;font-size: 16px;color: #101010;text-align: center;background-color: #FFFFFF;}
  .slide-content{width: 1024px;margin: 0 auto;margin-top: 60px;}
  .swiper-container {
    width: 1200px;
    height: 400px;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 1024px;
    height: 100%;
 
  }
  .swiper-slide img{
    width: 240px;
    height: 180px;
   
  }
  .prev,.next{position: absolute;width:60px;height: 60px;top: 170px;z-index: 12;cursor: pointer;}
  .prev{left: 0px;}
  .next{right: 0px;}
  .read-more{z-index: 20;cursor: pointer;position: absolute;left:530px ;bottom: 20px;width: 140px;height: 40px;line-height: 40px;margin: 0 auto;background-color: rgba(255, 255, 255, 1);color: rgba(77, 180, 255, 1);font-size: 14px;text-align: center;font-family: Roboto;border: 1px solid rgba(255, 255, 255, 1);}
</style>