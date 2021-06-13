<template>
	<view class="release">
		<view class="movie_title">
			<!-- <image src="" mode=""></image> -->
			<text class="iconfont icon-release"></text>
			<view>休息一下</view>
		</view>


		<view class="movie_content">
			<view class="movie_item" v-for="(item,index) in movieList" :key="index">
				<image :src="item.img" mode=""></image>
				<view class="movie_desc">
					<view class="movie-title">
						{{item.title}}
					</view>
					<!-- <TrailerStars></TrailerStars> -->
					<view class="movie-info">
						{{item.info}}
					</view>
					<view class="movie-info">
						{{item.producer}}
					</view>
				</view>

				<view class="ani" @click="praiseMe(index)">
					<view class="iconfont animated" hover-class="tada"
						:class="(isRaise[index]?'icon-dianzan-s':'icon-dianzan')"></view>
					<view class="praise-me">
						点赞!
					</view>
					<!-- 点赞动画 -->
					<!-- <view :animation="animationData" class="praise-me animation-opacity ">
						+1
					</view> -->
					<view :animation="animationDataArr[index]" class="praise-me animation-opacity ">
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
				isRaise: [false, false, false, false, false, false, false],
				// isRaise:false,
				animationData: {},
				animationDataArr:[{},{},{},{},{},{}],
				movieList: [{
					img: '../../static/img/movie/哥斯拉.jpg',
					title: "王猿大战精钢",
					info: "2021 / 美国 /异世界 爱情",
					producer: "本·哈登 /亨利·乔布斯 / 悠米 / 嘉文四世"
				}, {
					img: '../../static/img/movie/movie4.png',
					title: "超越",
					info: "2021 / 中国 /异世界 爱情",
					producer: "郑凯"
				}, {
					img: '../../static/img/movie/movie3.png',
					title: "天堂电影院",
					info: "2021 / 中国 /异世界 爱情",
					producer: "本·哈登 /诺克萨斯 / 悠米 / 嘉文四世"
				}, {
					img: '../../static/img/movie/movie5.jpg',
					title: "小人物",
					info: "2021 / 美国 /玄幻 爱情",
					producer: "鲍勃·奥登科克 / 阿列克谢·谢列布里亚科夫"
				}, {
					img: '../../static/img/movie/movie6.png',
					title: "地球改变之年",
					info: "2021 / 美国 /异世界 爱情",
					producer: "大卫·爱登堡 / 英国 / 汤姆·比尔德"
				}]
			};
		},
		methods: {
			//实现点赞
			praiseMe(index) {
				//法一:
				// this.isRaise[index]= !this.isRaise[index];
				// this.$forceUpdate();
				//法二:
				this.$set(this.isRaise, index, !this.isRaise[index])
				// this.isRaise=!this.isRaise;



				// #ifdef APP-PLUS || MP-WEIXIN
				//构建动画数据,并且通过step来表示这组动画的完成
				this.animation.translateY(-90).opacity(1).step({
					duration: 400
				});
				//导出动画数据到view组件,实现组件的动画效果
				// this.animationData = this.animation.export();
				this.animationData = this.animation;
				this.animationDataArr[index]= this.animationData.export();

				// 还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					// this.animationData = this.animation.export();
					this.animationData = this.animation;
					this.animationDataArr[index]= this.animationData.export();
				}.bind(this), 500)
				
				// #endif
			}
		},
		onLoad() {
			// #ifdef APP-PLUS || MP-WEIXIN
			//页面加载之初,创建一个临时的动画
			this.animation = uni.createAnimation();
			// #endif
		},
		onUnload() {
			this.animationData = {},
			this.animationDataArr=[{},{},{},{},{}]
			// 页面关闭后清空数据
		},

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

	.movie_content {
		margin-left: 8rpx;
		margin-right: 8rpx;
	}

	.movie_item {
		padding: 10rpx;
		display: flex;
		//无效,  bug
		// ​border-left: 20rpx dashed #dfdedf;

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
		flex: 1;
	}




	.praise-me {
		font-size: 14px;
		align-self: center;
		// color: #feab2a;
	}

	.animation-opacity {
		font-weight: bold;
		opacity: 0;
	}
</style>
