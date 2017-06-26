/**
* Created by Guanyunjie on 2017/6/26.
*/
<template>
	<div>
		<div class="my">
			<div class="my-wrap">
				<div class="bg"></div>
				<button class="btn">立即登录</button>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
	.my
		height 100%
		width 100%
		background #f5f5f5
		.my-wrap
			width 900px
			border 1px solid #ccc
			position relative
			min-height 650px
			margin 0 auto
			background #fff
			.bg
				width 807px
				margin 70px auto
				height 278px
				background url("./mymusic.png")
				background-size 807px 278px
				background-repeat no-repeat
			.btn
				position absolute
				top 272px
				right 200px
				width 167px
				height 45px
				color #fff
				border none
				outline none
				font-size 16px
				cursor pointer
				background linear-gradient(#4a9bdf, #1f70c0)
				box-shadow inset 0 0 6px 0 #376fb1
				border-radius 5px



</style>

