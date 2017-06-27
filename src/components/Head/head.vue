/**
* Created by Guanyunjie on 2017/6/26.
*/
<template>
	<div>
		<div class="head">
			<div class="m-top">
				<div class="wrap">
					<h1 class="logo">
						<i class="iconfont icon-logo"></i>
						网易云音乐
					</h1>
					<ul class="nav">
						<li class="nav-item">
							<span class="on">
								<router-link to="/">
									<a href="javascript:;">
										<em>发现音乐</em>
										<sub class="cor">&nbsp;</sub>
									</a>
								</router-link>
								<div class="line"></div>
							</span>
						</li>
						<li class="nav-item">
							<span>
								<router-link to="/my/m/music">
									<a href="javascript:;">
										<em>我的音乐</em>
										<sub class="cor">&nbsp;</sub>
									</a>
								</router-link>
								<div class="line"></div>
							</span>
						</li>
						<li class="nav-item">
							<span>
								<router-link to="/friend">
									<a href="javascript:;">
										<em>朋友</em>
										<sub class="cor">&nbsp;</sub>
									</a>
								</router-link>
								<div class="line"></div>
							</span>
						</li>
					</ul>
					<div class="login">
						<a class="btn-log" href="javascript:;">登录</a>
						<div class="l-list" style="display: none">
							<div class="cor"></div>
							<ul class="f-cb">
								<li class="l-item">
									<a class="l-type" href="javascript:;">
										<i class="iconfont icon-phone"></i>
										<em>手机号登录</em>
									</a>
								</li>
								<li class="l-item">
									<a class="l-type" href="javascript:;">
										<i class="iconfont icon-wx"></i>
										<em>微信登录</em>
									</a>
								</li>
								<li class="l-item">
									<a class="l-type" href="javascript:;">
										<i class="iconfont icon-qq"></i>
										<em>QQ登录</em>
									</a>
								</li>
								<li class="l-item">
									<a class="l-type" href="javascript:;">
										<i class="iconfont icon-xl"></i>
										<em>新浪微博登录</em>
									</a>
								</li>
								<li class="l-item">
									<a class="l-type" href="javascript:;">
										<i class="iconfont icon-wy"></i>
										<em>网易邮箱账号登录</em>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="search">
						<div class="s-wrap">
							<i class="iconfont icon-search"></i>
							<input class="s-input" type="text" placeholder="单曲/歌手/专辑/歌单/用户">
						</div>
						<div class="m-sch-list" style="display: none">
							<p class="note">
								<a href="javascript:;">搜索“g”的相关用户></a>
							</p>
							<div class="lst-wrap">
								<div class="lst-item">
									<h3 class="hb">
										<i class="iconfont icon-music"></i>
										<em>单曲</em>
									</h3>
									<ul class="f-cb">
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
									</ul>
								</div>
								<div class="lst-item">
									<h3 class="hb">
										<i class="iconfont icon-singer"></i>
										<em>歌手</em>
									</h3>
									<ul class="f-cb odd">
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
									</ul>
								</div>
								<div class="lst-item">
									<h3 class="hb">
										<i class="iconfont icon-zj"></i>
										<em>专辑</em>
									</h3>
									<ul class="f-cb">
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
									</ul>
								</div>
								<div class="lst-item">
									<h3 class="hb">
										<i class="iconfont icon-mv"></i>
										<em>MV</em>
									</h3>
									<ul class="f-cb odd">
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
									</ul>
								</div>
								<div class="lst-item">
									<h3 class="hb">
										<i class="iconfont icon-gd"></i>
										<em>歌单</em>
									</h3>
									<ul class="f-cb last">
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
										<li class="item">
											<a class="content" href="javascript:;">童话镇-陈一发儿</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="m-line">

			</div>
			<div class="m-nav"></div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">

	export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
em
	font-style normal
.head
	.m-top
		position relative
		z-index 100
		height 64px
		border none
		margin 0px
		padding 0px
		width 100%
		background linear-gradient(#343434,#1c1b1b)
		.wrap
			margin 0 auto
			width 1015px
			.logo
				float left
				line-height 64px
				color #eee
				font-size 22px
				font-family Consolas
				margin-right 15px
				.iconfont
					font-size 24px
					position relative
					top 2px
			.nav
				overflow hidden
				float left
				display inline-block
				.nav-item
					position relative
					float left
					cursor pointer
					span
						display inline-block
						height 100%
						line-height 62px
						&.on
							background linear-gradient(#222121, #333);
							box-shadow inset 0 -5px 14px 0 #211f1f
							border-left 1px solid #333
							border-right 1px solid #444
							a
								display inline-block
								border-left 1px solid #000
								border-right 1px solid #000
							em
								display inline-block
							.line
								display none
						a
							width 100%
							border-bottom none
							em
								color #ccc
								font-size 13px
								margin 0 21px 0 19px
							.cor
								position absolute
								left 48%
								bottom 0px
								z-index 101
								width: 0;
								height: 0;
								border-left: 7px solid transparent;
								border-right: 7px solid transparent;
								border-bottom: 6px solid #c7250c;
						.line
							position absolute
							right 0px
							top 50%
							margin-top -6px
							z-index 100
							height 12px
							border-right 1px solid #000
							box-shadow 1px 0 0 0 #585656



			.login
				float right
				margin-left 20px
				position relative
				.btn-log
					display block
					line-height 64px
					width 100%
					font-size 14px
				.l-list
					position absolute
					background #2a2a2a
					border-radius 3px
					border 1px solid #000
					width 160px
					left -60px
					top 55px
					z-index 998
					box-shadow inset 0 0 1px 0 #9e9e9e
					.cor
						position absolute
						left 46%
						top -6px
						z-index 101
						width: 0;
						height: 0;
						border-left: 8px solid transparent
						border-right: 8px solid transparent
						border-bottom 7px solid #2a2a2a
						box-shadow 0 0 0 0 #000
					.f-cb
						.l-item
							text-align left
							.l-type
								display block
								width 132px
								height 34px
								overflow hidden
								padding-left 18px
								color #ccc
								line-height 39px
								font-size 10px
								&:hover
									background #353535
									text-decoration none
									color #fff
								.iconfont
									color #ccc
									font-size 14px
								em
									padding-left 6px

			.search
				float right
				position relative
				.s-wrap
					margin 17px 0
					height 30px
					background #fff
					padding 0 10px
					border-radius 99px
					box-shadow inset 0 0 8px 1px #8e8e8e
					.iconfont
						line-height 30px
					.s-input
						font-size 12px
						outline none
				.m-sch-list
					width 238px
					position absolute
					left 0px
					top 55px
					background #fff
					z-index 9999
					border 1px solid #ccc
					border-radius 4px
					box-shadow 0 1px 5px 0 #7d7a7a
					.note
						padding 11px 10px
						border-bottom 1px solid #e2e2e2
						font-size 10px
						text-align left
						a
							&:hover
								background #ccc
					.lst-wrap
						.lst-item
							position relative
							.hb
								width 62px
								position absolute
								top 6px
								left -2px
								font-size 12px
								color #666
								.iconfont
									font-size 14px
								em
									color #ccc
							.f-cb
								margin-left 62px
								font-size 12px
								border-left 1px solid #ccc
								border-bottom 1px solid #ccc
								.item
									text-align left
									padding-left 10px
									&:hover
										background #ccc
									.content
										display block
										line-height 20px
										color #333
										font-size 10px
										width 100%
										text-indent 12px
							.odd
								background-color #f9f8f8 !important
							.last
								border-bottom none !important
	.m-line
		height 2px
		width 100%
		background linear-gradient(#c70c0c, #9a0909)
		border-top 1px solid #ea1717
		position relative
		box-shadow 0 1px 4px 0px #000;
</style>

