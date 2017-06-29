/**
* Created by Guanyunjie on 2017/6/26.
*/
<template>
	<div class="music-l">
		<div class="music-wrap">
			<div class="nav">
				<h2 class="tit">
					<router-link to="/my/m/music/artist">我的歌手（6）</router-link>
				</h2>
				<h2 class="tit">
					<router-link to="/my/m/music/mv">我的MV（4）</router-link>
				</h2>
				<h2 class="tit">
					<router-link to="/my/m/music/radio">我的电台（3）</router-link>
				</h2>
				<div class="create-gd">
					<a href="javascript:;" @click="isCreatedOpen = !isCreatedOpen">
						<i class="iconfont" :class="isCreatedOpen ? 'icon-s-open' : 'icon-s-close'"></i>
						创建的歌单（9）
					</a>
					<button class="new" type="button"><i class="iconfont icon-plus"></i>新建</button>
					<ul class="f-cb" v-show="isCreatedOpen">
						<router-link tag="li" activeClass="active" to="/my/m/music/playlist/767475042">
							<a style="display: inline;">
								<div class="pl-wrap">
									<div class="pic">
										<img src="/static/img/18957779486268444.jpg" width="40" height="40" alt="">
									</div>
									<p class="title">我喜欢的音乐</p>
									<p class="num">56首</p>
									<span class="oper">
										<a class="edi" href="javascript:;"><i class="iconfont icon-edit"></i></a>
										<a class="del" href="javascript:;"><i class="iconfont icon-delete"></i></a>
									</span>
								</div>
							</a>
						</router-link>
						<router-link tag="li" activeClass="active" to="/my/m/music/playlist/468523178">
							<a style="display: inline;">
								<div class="pl-wrap">
									<div class="pic">
										<img src="/static/img/2946691234868155.jpg" width="40" height="40" alt="">
									</div>
									<p class="title">无法长大</p>
									<p class="num">26首</p>
									<span class="oper">
										<a class="edi" href="javascript:;"><i class="iconfont icon-edit"></i></a>
										<a class="del" href="javascript:;"><i class="iconfont icon-delete"></i></a>
									</span>
								</div>
							</a>
						</router-link>
					</ul>
				</div>
				<div class="collect-gd">
					<a href="javascript:;" @click="isColOpen = !isColOpen">
						<i class="iconfont" :class="isColOpen ? 'icon-s-open' :  'icon-s-close'"></i>
						收藏的歌单（2）
					</a>
					<ul class="f-cb" v-show="isColOpen">
						<router-link tag="li" activeClass="active" to="/my/m/music/playlist/902367246">
							<a style="display: inline;">
								<div class="pl-wrap">
									<div class="pic">
										<img src="/static/img/11111.png" width="40" height="40" alt="">
									</div>
									<p class="title">设计师没有灵感了听这个</p>
									<p class="num">12首</p>
									<span class="oper">
										<a class="edi" href="javascript:;"><i class="iconfont icon-edit"></i></a>
										<a class="del" href="javascript:;"><i class="iconfont icon-delete"></i></a>
									</span>
								</div>
							</a>
						</router-link>
						<router-link tag="li" activeClass="active" to="/my/m/music/playlist/653478346">
							<a style="display: inline;">
								<div class="pl-wrap">
									<div class="pic">
										<img src="/static/img/3412884129074161.jpg" width="40" height="40" alt="">
									</div>
									<p class="title">学霸进行曲</p>
									<p class="num">31首</p>
									<span class="oper">
										<a class="edi" href="javascript:;"><i class="iconfont icon-edit"></i></a>
										<a class="del" href="javascript:;"><i class="iconfont icon-delete"></i></a>
									</span>
								</div>
							</a>
						</router-link>
					</ul>
				</div>
			</div>
			<div class="detail">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">

	export default {
	    data() {
	      	return {
				isCreatedOpen: false,
				isColOpen: false
			}
		},
		methods() {

		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
	.active
		background #ccc
		&:hover
			background #ccc !important
	.music-l
		background #f5f5f5
		.music-wrap
			width 982px
			margin 0 auto
			background #fff
			min-height 600px
			overflow hidden
			border 1px solid #ccc
			.nav
				width 240px
				height 600px
				float left
				background #f9f9f9
				padding-top 50px
				border-right 1px solid #ccc
				.tit
					line-height 35px
					text-align left
					&:hover
						background #eee
					a
						color #000
						font-size 14px
						font-weight bold
						display block
						padding-left 30px
				.create-gd,.collect-gd
					position relative
					text-align left
					padding-left 11px
					a
						font-size 14px
						font-weight bold
						line-height 35px
						cursor pointer
						display inline-block
						color #333
						.iconfont
							color #333
					.new
						border-radius 3px
						border 1px solid #aaa
						background #f9f9f9
						height 22px
						outline none
						cursor pointer
						padding 0 10px
						margin-left 20px
						font-size 12px
						color #333
						.iconfont
							font-size 12px
							font-weight bold
							color #b71616
							margin-right 3px
					.f-cb
						li,.pl-item
							line-height 54px
							padding 6px 0 6px 20px
							overflow hidden
							position relative
							cursor pointer
							&:hover
								background #eee
							.pl-wrap
								height 40px
								overflow hidden
								.pic
									width 42px
									display inline-block
									float left
								.title
									position absolute
									top -4px
									left 70px
									font-size 12px
								.num
									font-size 10px
									position absolute
									top 22px
									left 70px
								.oper
									position absolute
									right 18px
									bottom -2px
									.edi
										.iconfont
											font-size 11px
											color #999
									.del
										.iconfont
											font-size 16px
											color #999
			.detail
				width 740px
				height 100%
				float right
</style>
