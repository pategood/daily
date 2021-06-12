<template>
	<view class="release">
		<view class="movie_title">
			<!-- <image src="" mode=""></image> -->
			<text class="iconfont icon-release"></text>
			<view>休息一下</view>
		</view>


		<view class="movie_content">
			<view class="movie_item">
				<image src="../../static/img/movie/哥斯拉.jpg" mode=""></image>
				<view class="movie_desc">
					<view class="movie-title">
						王猿大战精钢
					</view>
					<!-- <TrailerStars></TrailerStars> -->
					<view class="movie-info">
						2021 / 美国 /异世界 爱情
					</view>
					<view class="movie-info">
						本·哈登 /亨利·乔布斯 / 悠米 / 嘉文四世
					</view>
				</view>

				<view class="ani" @click="praiseMe">
					<view class="iconfont icon-dianzan" ></view>
					<view class="praise-me">
						点赞!
					</view>
					<!-- 点赞动画 -->
					<view :animation="animationData" class="praise-me animation-opacity">
						+1
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Movies",
		data() {
			return {
				movieList: [{
						img: '../../static/img/movie/哥斯拉.jpg',
						title: "王猿大战精钢",
						info: "2021 / 美国 /异世界 爱情",
						producer: "本·哈登 /亨利·乔布斯 / 悠米 / 嘉文四世"
					}, {
						img: '../../static/img/movie/哥斯拉.jpg',
						title: "历史又TM在召唤",
						info: "2021 / 中国 /异世界 爱情",
						producer: "本·哈登 /诺克萨斯 / 悠米 / 嘉文四世"
					}, {
						img: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2654767767.webp',
						title: "了不起的老爸",
						info: "2021 / 中国 /异世界 爱情",
						producer: "本·哈登 /诺克萨斯 / 悠米 / 嘉文四世"
					}
				],
				animationData: {}
			};
		},
		methods: {
			//实现点赞
			praiseMe() {
				console.log("1");
				//构建动画数据,并且通过step来表示这组动画的完成
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				})
				console.log("1")
				//导出动画数据到view组件,实现组件的动画效果
				this.animationData = this.animation.export();
				
				// 还原动画
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
						duration:0
					});
					this.animationData=this.animation.export();
				}.bind(this),500)
			}
		},
		onLoad() {
			//页面加载之初,创建一个临时的动画
			this.animation = uni.createAnimation();
		},
		onUnload() {
			// 页面卸载的时候,清除动画数据
			this.animationData = {};
		}
	}
</script>

<style lang="scss">
	.release {
		border-top: 20rpx solid #f2f2f2;
	}

	.movie_title {
		font-size: 35upx;
		height: 50upx;
		line-height: 50upx;
		padding-left: 4rpx;
		margin-left: 8upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
		display: flex;
	}

	.icon-release {
		font-size: 46rpx;
		// margin-left: 8rpx;
	}

	.movie_content{
		margin-left: 8rpx;
		margin-right: 8rpx;
	}
	.movie_item {
		padding: 10rpx;
		display: flex;
		// justify-content: space-between;
		image {
			width: 180upx;
			height: 240upx;
			border-radius: 3%;
		}
	}

	.movie_desc {
		width: 340upx;
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
		// flex-wrap: wrap;
	}

	.movie-title {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.ani {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex:1;
	}




	.praise-me {
		font-size: 28rpx;
		align-self: center;
	}

	.animation-opacity {
		font-weight:bold;
		opacity: 0;
	}
</style>
