<template>
	<div class="banner-content absolute-center">
		<p class="title">汇集全球技术，助力企业发展</p>
		<div class="input-group">
			<input class="search1 box-sizing" type="text" placeholder="请输入你要找的技术或行业的关键字" />
			<button class="search2 box-sizing">搜索</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.input-group{font-size: 0;}
	.banner-content{z-index: 11;bottom: 130px;}
	.title{margin-bottom: 74px;height: 60px;line-height: 60px;color: rgba(16, 16, 16, 1);font-size: 40px;text-align: center;font-family: Roboto;}
	.search1{font-size: 14px;vertical-align: middle;width: 526px;height: 50px;line-height: 50px;border-top-left-radius: 50px;border-bottom-left-radius: 50px;text-align: center;border: 1px solid rgba(187, 187, 187, 1);font-family: Roboto;border-right: none;}
	.search2{outline:none ;cursor: pointer;vertical-align: middle;width: 80px;height: 50px;background-color: rgba(229, 229, 229, 1);color: rgba(16, 16, 16, 1);line-height: 50px;font-size: 14px;text-align: center;font-family: Microsoft Yahei;border: 1px solid rgba(187, 187, 187, 1);border-bottom-right-radius: 50px;border-top-right-radius: 50px;}

</style>