/**
* Created by Guanyunjie on 2017/6/28.
*/
<template>
	<div class="pl">
		<div class="info">
			<div class="wrap">
				<div class="m-info">

					<div class="cover">
						<img src="static/img/18957779486268444.jpg" width="200" height="200" alt="">
						<div class="bor"></div>
					</div>
					<div class="cnt">
						<div class="hd">
							<i class="iconfont icon-music-wj"></i>
							<h2>代码资源</h2>
							<router-link to="/my/m/music/edit/2323123"><i class="iconfont icon-edit"></i>编辑</router-link>
						</div>
						<div class="user">
							<router-link to="/user">
								<img src="static/img/3265549600663283.jpg" width="35" height="35">
							</router-link>
							<router-link to="/user">官云杰</router-link>
							<span class="created">2017-03-05 创建</span>
						</div>
						<div class="btns">
							<button class="btn btn-1 btn-play" type="button">
								<i class="iconfont icon-pause"></i>
								<em>播放</em>
							</button>
							<button class="btn btn-1 btn-plus" type="button">+</button>
							<button class="btn btn-2 btn-coll" type="button">
								<i class="iconfont icon-add-list"></i>收藏
							</button>
							<button class="btn btn-2 btn-share" type="button">
								<i class="iconfont icon-share"></i>分享
							</button>
							<button class="btn btn-2 btn-load" type="button">
								<i class="iconfont icon-load"></i>下载
							</button>
							<button class="btn btn-2 btn-comment" type="button">
								<i class="iconfont icon-comment"></i>评论
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="pl-tit">
				<h3>歌曲列表</h3>
				<span class="song-num">6首歌</span>
				<span class="bf-num">播放：<em style="color: #c20c0c">2</em>次</span>
			</div>
		</div>
		<div class="list">
			<table style="width: 100%">
				<thead>
					<tr>
						<th>序号</th>
						<th>歌曲标题</th>
						<th>时长</th>
						<th>歌手</th>
						<th>专辑</th>
					</tr>
				</thead>
				<tbody>
					<tr class="even">
						<td>1 <i class="iconfont icon-pause"></i></td>
						<td>少年锦时</td>
						<td>03:56</td>
						<td>赵雷</td>
						<td>无法长大</td>
					</tr>
					<tr>
						<td>2 <i class="iconfont icon-pause"></i></td>
						<td>少年锦时</td>
						<td>03:56</td>
						<td>赵雷</td>
						<td>无法长大</td>
					</tr>
					<tr class="even">
						<td>3 <i class="iconfont icon-pause"></i></td>
						<td>少年锦时</td>
						<td>03:56</td>
						<td>赵雷</td>
						<td>无法长大</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="comment">
			<div class="c-tit">
				<h3>评论</h3>
				<span>共 <em>0</em>条评论</span>
			</div>
			<div class="area">
				<div class="pic">
					<img src="static/img/3265549600663283.jpg" width="50" height="50" alt="">
				</div>
				<div class="content">
					<textarea placeholder="评论" rows="4"></textarea>
					<div class="sub">
						<span><em>140</em>字</span>
						<button class="btn-submit" type="button">评论</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>

	table
		border-collapse collapse
		border-spacing 0
		th
			height 38px
			vertical-align middle
			text-align left
			font-weight normal
			color #666
			border 1px solid #ccc
			padding-left 10px
			font-size 14px
			background linear-gradient(#fff, #e6e6e6)
		td
			position relative
			padding 6px 10px
			font-size 12px
			line-height 18px
			text-align left
			color #666
			.iconfont
				position absolute
				right 10px
				top 8px
		.even
			background #f7f7f7

	.pl
		background #fff
		.info
			.wrap
				position relative
				padding 40px
				.m-info
					height 200px
					.cover
						float left
						width 200px
						position relative
						border none
						.bor
							width 208px
							height 208px
							position absolute
							top -5px
							left -5px
							border 1px solid #ccc
					.cnt
						margin-left 230px
						height 200px
						width 430px
						.hd
							line-height 24px
							margin-bottom 12px
							font-size 20px
							font-style normal
							font-weight 200
							overflow hidden
							*
								float left
							>.iconfont
								font-size 22px
								color #cc1616
								margin-right 10px
							a
								font-size 12px
								float right
								margin-right 10px
								.iconfont
									font-size 13px
									margin-right 5px



						.user
							overflow hidden
							line-height 35px
							font-size 12px
							margin-bottom 15px
							>*
								float left
								margin-right 13px
							.created
								color #aaa
						.btns
							overflow hidden
							.btn
								padding 0px
								outline none
								cursor pointer
								line-height 29px
								float left
							.btn-1
								border 1px solid #3984ce
								color #fff
								background linear-gradient(#59abf7, #3b78b5)
								box-shadow inset 0 0 1px 0px #d4cfcf
								&:hover
									background linear-gradient(#80b8ec, #5f9ad4)
							.btn-2
								border 1px solid #ccc
								margin-left 7px
								border-radius 3px
								padding 0 10px
								background linear-gradient(#fff, #e4e2e2)
								.iconfont
									color #7e8c8d
									margin-right 5px
							.btn-play
								width 66px
								border-right 1px solid #2d67a1
								border-top-left-radius 3px
								border-bottom-left-radius 3px
								margin-right 0px
							.btn-plus
								width 30px
								font-size 20px
								margin-left 0px
								border-left 1px solid #64aaeb
								border-top-right-radius 3px
								border-bottom-right-radius 3px




			.pl-tit
				line-height 28px
				width 100%
				overflow hidden
				font-size 12px
				color #666
				border-bottom 2px solid #c20c0c
				h3
					float left
					width 80px
					font-weight bold
					margin-left 20px
				.song-num
					float left
					margin-left 30px
				.bf-num
					float right
					margin-right 30px

		.comment
			margin-top 40px
			.c-tit
				line-height 30px
				overflow hidden
				border-bottom 2px solid #c20c0c
				>*
					float left
				h3
					margin-left 30px
					color #333
					font-size 20px
				span
					font-size 12px
					color #666
					margin-left 30px
					margin-top 3px

			.area
				width 676px
				height 98px
				margin 0px auto
				overflow hidden
				padding 30px 0 30px 0
				.pic
					position relative
					float left
					width 50px
					margin-right 20px
				.content
					float left
					position relative
					textarea
						width 570px
						border-radius 3px
						padding 5px 10px
						outline none
					.sub
						position absolute
						right 13px
						bottom -25px
						span
							color #666
							font-size 12px
							margin-right 10px
						.btn-submit
							border 1px solid #ccc
							border-radius 3px
							color #fff
							padding 3px 13px
							cursor pointer
							background linear-gradient(#59abf7, #3b78b5)
							outline none
							&:hover
								background linear-gradient(#80b8ec, #5f9ad4)

</style>

