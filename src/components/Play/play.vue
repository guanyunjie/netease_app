/**
* Created by Guanyunjie on 2017/6/20.
*/
<template>
  	<div class="music-play">
		<div class="white-line"></div>
		<div class="play-wrap">
			<div class="btns">
				<a class="btns-item" href="javascript:;"><i class="iconfont icon-prev"></i></a>
				<a class="btns-item" href="javascript:;" @click="addTextTrack()"><i :class="paused ? 'icon-pause' : 'icon-play'" class="icon-pp iconfont" ></i></a>
				<a class="btns-item" href="javascript:;"><i class="iconfont icon-next"></i></a>
			</div>
			<div class="head">
				<a class="head-pic" href="javascript:;"></a>
			</div>
			<div class="play">
				<div class="words">
					<a class="title" href="javascript:;" title="Graduation Day - Album Version (Explicit)">
						<span v-text="song.name"></span>
					</a>
					<a class="author" href="javascript:;" title="Kanye West">
						<span v-text="song.author"></span>
					</a>
				</div>
				<div class="play-bar">
					<div class="bar-bg">
						<div class="bar-cur" :style="{width: playWidth}">
							<span class="dot"></span>
						</div>
					</div>
				</div>
				<div class="time">
					<span v-text="currentTime"></span>&nbsp;/&nbsp;
					<span v-text="duration"></span>
				</div>
			</div>
			<div class="operate">
				<a href="javascript:;" title="收藏">
					<i class="iconfont top1 icon-add-list"></i>
				</a>
				<a href="javascript:;" title="分享">
					<i class="iconfont icon-share"></i>
				</a>
			</div>
			<div class="ctrl">
				<div class="m-vol">
					<div class="bg">
						<div class="vol-bg">
							<div class="cur-bg" :style="{height: voice}"></div>
							<span class="dot" :style="{bottom: voiceDot}"></span>
						</div>
					</div>
				</div>
				<a class="voi" href="javascript:;">
					<i class="iconfont icon-voice"></i>
				</a>
				<a class="cyc" href="javascript:;">
					<i class="iconfont icon-single-cycle"></i>
				</a>
				<span class="song-list">
					<a class="sli" href="javasript:;">
						<i class="iconfont icon-song-list"></i>
					</a>
					<span class="num">12</span>
				</span>
			</div>
		</div>
		<div class="m-list">
			<div class="list-hd">
				<div class="list-hdc">
					<h4><span>播放列表（<span>30</span>）</span></h4>
					<a href="javascript:;">
						<i></i>
						<span>收藏全部</span>
					</a>
					<a href="javascript:;">
						<i></i>
						<span>清除</span>
					</a>
					<div class="line"></div>
					<p class="lytit">Heroe - Album Version (SPANISH)</p>
					<span>&times;</span>
				</div>
			</div>
			<div class="list-bd">
				<img class="bg-img" src="./pic.jpg" />
				<div class="m-info">
					<ul class="m-all">
						<li class="m-item">
							<div class="icon"><i class="iconfont icon-play-in"></i></div>
							<div class="title">Heroe - Album Version (SPANISH)</div>
							<div class="opers">
								<i class="iconfont icon-add-list"></i>
								<i class="iconfont icon-share"></i>
								<i class="iconfont icon-load"></i>
								<i class="iconfont icon-delete"></i>
							</div>
							<div class="author">周杰伦</div>
							<div class="duration">04:12</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<audio id="audio" style="position: fixed;left: 0;top: 0;"  controls="controls"
			@canplay="canplay()"
			@durationchange="durationchange()"
			@loadedmetadata="loadedmetadata()"
			@timeupdate="timeupdate()"
			@volumechange="volumechange()">
			<source :src="song.src"/>
		</audio>
  	</div>
</template>

<script type="text/ecmascript-6">
export default {
	data() {
		return {
			paused: true,
			song: {
			    id: '123',
				pic: '',
				name: 'fesfs',
				src: '/static/music/deguo.mp3',
				author: 'zjl'
			},
			currentTime: '',
			duration: '',
			playWidth: '0%',
			voice: '0%',
			voiceDot: '-8%'
		}
	},
	computed: {},
    methods: {
        addTextTrack() {
			let audio = document.getElementById('audio');
            if (audio.paused) {
                this.paused = false;
                audio.play();
            } else {
				this.paused = true;
                audio.pause();
            }
        },
		canplay() {
            let audio = document.getElementById('audio');
			this.currentTime = 0;
			this.duration = Math.round(audio.duration);
			this.voice = audio.volume * 100 + '%';
			this.voiceDot = (audio.volume * 100 - 8) + '%';
		},
		durationchange() {
			let audio = document.getElementById('audio');
			console.log(audio.duration);
		},
		loadedmetadata() {
            console.log('audio加载完成');
		},
		timeupdate() {
			let audio = document.getElementById('audio');
			this.currentTime = Math.round(audio.currentTime);
		},
		volumechange() {
			let audio = document.getElementById('audio');
			this.voice = audio.volume * 100 + '%';
			this.voiceDot = (audio.volume * 100 - 8) + '%';
		}
    },
	watch: {
	    currentTime() {
			let audio = document.getElementById('audio');
			this.playWidth = (audio.currentTime / audio.duration) * 100 + '%';
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>

	.music-play
		display block
		position fixed
		left 0
		bottom 0
		height 42px
		width 100%
		background linear-gradient(rgba(45, 45, 45, 0.96), #1f1f1f)
		margin 0
		padding 0
		box-shadow 0px 0px 1px 2px #333
		border-bottom none
		border-top 1px solid #000
		.white-line
			width 100%
			background #666
			height 1px
			border none
		.play-wrap
			position relative
			margin 0 auto
			padding 0
			width 900px
			height 100%
			.btns
				line-height 42px
				float left
				margin-right 20px
				.btns-item
					display inline-block
					line-height 34px
					height 34px
					vertical-align middle
					margin-right 5px
					.iconfont
						font-size 24px
						color #bbb
					.icon-pp
						font-size 30px
						color #fff

			.head
				float left
				margin-top 4px
				margin-right 15px
				.head-pic
					display inline-block
					width 31px
					height 31px
					border 1px solid #000
					border-radius 4px
					box-shadow 0 0 1px 1px #222
					background-image url("./pic.jpg")
					background-size 32px 32px
					background-repeat no-repeat
			.play
				width 530px
				height 100%
				float left
				position relative
				.words
					overflow hidden
					.title, .author
						font-size 10px
						display inline-block
						color #eee
						float left
						margin-top 6px
						margin-right 15px
						&:hover
							text-decoration underline
					.author
						color #9b9b9b
						display inline-block
						font-weight 200
				.play-bar
					width 440px
					margin-top 5px
					height 7px
					border-radius 99px
					background #111
					opacity 0.7
					border-top 1px solid #000
					border-bottom 1px solid #666
					.bar-bg
						display block
						.bar-cur
							background #c70c0c
							height 7px
							width 20%
							border-radius 99px
							border-top 1px solid #ff7878
							border-bottom 1px solid #2f0808
							position relative
							.dot
								display inline-block
								height 6px
								width 6px
								border 5px solid #fff
								border-radius 99px
								position absolute
								right -8px
								background #c70c0c
								bottom -4px
								cursor pointer
								&:hover
									box-shadow 0 0 1px 1px #737373
				.time
					position absolute
					right 14px
					bottom 11px
					font-size 10px
					color #666
					:first-child
						color #aaa

			.operate
				float left
				margin 10px 0 0 10px
				padding-right 12px
				border-right 1px solid #000
				box-shadow 1px 0 0 0 #666
				.iconfont
					font-size 18px
					color #aaa
					margin-right 6px
					&:hover
						color #eee
				.top1
					position relative
					top 1px

			.ctrl
				float left
				margin 10px 0 0 12px
				position relative
				.m-vol
					position absolute
					left 0
					top -116px
					height 103px
					width 30px
					border-top-left-radius 3px
					border-top-right-radius 3px
					border 1px solid #000
					.bg
						background #111
						opacity 0.94
						border 1px solid #333
						width 28px
						height 101px
						border-top-left-radius 3px
						border-top-right-radius 3px
						.vol-bg
							width 4px
							height 80px
							margin 10px auto
							background #000
							position relative
							border-radius 99px
							box-shadow 0 0 0 0 #fff
							.cur-bg
								position absolute
								width 4px
								height 30px
								background red
								bottom 0px
								left 0px
								border-radius 99px
							.dot
								display inline-block
								height 5px
								width 5px
								border 4px solid #fff
								border-radius 99px
								position absolute
								right -5px
								bottom 23px
								background #c70c0c
								cursor pointer
								&:hover
									box-shadow 0 0 1px 1px #737373
				.voi
					display inline-block
				.cyc
					display inline-block
				.song-list
					width 40px
					display inline-block
					position relative
					.sli
						position absolute
						left 0px
						top -2px
					.num
						margin-left 17px
						padding-left 3px
						font-size 10px
						background #2a2a2a
						display inline-block
						height 15px
						line-height 15px
						width 25px
						vertical-align middle
						color #676767
						border-top-right-radius 99px
						border-bottom-right-radius 99px
						text-align left
						border: 1px solid #000;
						border-left: none;
						box-shadow: inset 0 0 5px 0px #000;
				.iconfont
					font-size 18px
					color #aaa
					margin-right 6px
					&:hover
						color #eee
		.m-list
			position absolute
			bottom 43px
			left 50%
			margin-left -445px
			width 890px
			height 273px
			border 1px solid #000
			border-bottom none
			border-top-right-radius 5px
			border-top-left-radius 5px
			box-shadow 0 0 2px 0 #2b2b2b
			.list-hd
				height 40px
				background rgb(39, 36, 36)
				box-shadow 0 1px 0px 0 #403c3c
				.list-hdc
					position relative
					height 38px
					border 1px solid #000
					border-radius 5px
					overflow hidden
					h4
						float left
						margin 10px 230px 0 15px
						font-size 14px
						color #ccc
						span
							font-weight bold
					a
						float left
						margin 0 20px
						line-height 38px
						font-size 12px
					.line
						float left
						height 22px
						margin-top 7px
						border-left 1px solid #000
						border-right 1px solid #444
					>p
						float left
						line-height 38px
						width 350px
						font-size 14px
						color #ccc
					>span
						float right
						margin 10px
						cursor pointer
						color #ccc
			.list-bd
				padding 0px
				position relative
				height 233px
				width 100%
				overflow hidden
				.bg-img
					height 100%
					width 100%
					background-size 100% 100%
					background-repeat no-repeat
					filter blur(8px)
					z-index -1
				.m-info
					width 500px
					height 100%
					background #171717
					position absolute
					left 0
					top 0px
					opacity 0.91
					.m-all
						.m-item
							width 100%
							line-height 28px
							font-size 12px
							cursor pointer
							overflow hidden
							&:hover
								background #000
							>div
								color #555
								float left
							.icon
								color red
								width 20px
								text-align right
								.iconfont
									font-size 14px
							.title
								width 246px
								text-align left
								padding-left 5px
								&:hover
									color #ccc
							.opers
								width 88px
								.iconfont
									font-size 14px
									margin-right 3px
									&:hover
										color #ccc
							.author
								width 80px
								&:hover
									color #ccc
									text-decoration underline
							.duration
								width 60px
</style>
