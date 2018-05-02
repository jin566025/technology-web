<template>
	<div class="swiper-container" id="swiper1">
	    <div class="swiper-wrapper">
		    <div class="swiper-slide" >
		      <img src="../../static/img/banner1.jpeg">
		    </div>
		    <div class="swiper-slide" >
		      <img src="../../static/img/banner2.png">
		    </div>
		    <div class="swiper-slide" >
		      <img src="../../static/img/banner3.jpeg">
		    </div>
	    </div>
    	<div class="swiper-pagination"></div>
  	</div>
</template>

<script>
  import Swiper from 'swiper';

  
  export default {
//  props: ['listImg'],
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper

      });
    }
  }
</script>
<style scoped>
  @import url("../../static/css/swiper.min.css");
  .swiper-container {
    width: 100%;
    height: 550px;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
 
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
    max-height: 550px;
  }
  
 
</style>