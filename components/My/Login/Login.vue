<template>
	<view class="header">
		<UserInfo></UserInfo>

		<view class="nav-info">
			<view class="con">
				<view class="num">43</view>
				<span>动态</span>
			</view>
			<view class="con">
				<view class="num">114</view>
				<span>关注</span>
			</view>

			<view class="con">
				<view class="num">0</view>
				<span>粉丝</span>
			</view>
		</view>


		<view class="bg">
			<!-- <view class="round-box">
				<view class="left">
					<text>氪</text>
					<text>了解更多权益</text>
				</view>
				<view class="right">
					<view class="span_right"></view>
				</view>
			</view> -->
		</view>

		<scroll-view scroll-y="true" class="scr">
			<view class="hh">
				<view class="ic-my" v-for="(item,index) in AccList" :key="index">
					<!-- <image src="http://dummyimage.com/120x120/50B347/FFF&text=测试" mode=""></image> -->
					<text class="iconfont" :class="item.ic_img"></text>
					<view class="ic-title">
						{{item.ic_title}}
					</view>
				</view>
			</view>

			
			
		</scroll-view>





	</view>
</template>

<script>
	import UserInfo from '../UserInfo/UserInfo.vue'
	export default {
		name: "Login",
		data() {
			return {
				AccList: [{
						ic_img:"icon-huancun",
						ic_title: "离线缓存"
					},{
						ic_img:"icon-history",
						ic_title: "历史记录"
					}, {
						ic_img:"icon-wodeshoucang",
						ic_title: "我的收藏"
					}, {
						ic_img:"icon-wodeshoucang",
						ic_title: "稍后再看"
					}
				]
			};
		},
		components: {
			UserInfo
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		font-size: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		// padding: 10px;
		// align-items: center;
	}

	.nav-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// padding: 20upx;
		margin-top: 30rpx;

		span {
			color: #9c9c9c;
		}
	}


	.con {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-right: 6rpx solid #9f9f9f
	}

	.num {
		padding-bottom: 15rpx;
	}

	.con:nth-child(3) {
		// font-size: 27upx;
		border-right: 0;
	}


	/* ico */

	.scr {
		// flex-flow: row nowrap;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hh {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ic-my {
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(100%/4);
		flex-direction: column;
		flex-wrap: nowrap;

		image {
			width: 100upx;
			height: 100upx;
		}
	}














	.bg {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 10px;
		margin: 20px auto;

		overflow: hidden;
		background-color: #fee9ee;
		/* Safari、Chrome */
		background: -webkit-linear-gradient(bottom, rgba(254, 233, 238, 1)0%, rgba(254, 233, 238, 0.5)66%, rgba(0, 0, 0, 0)99%);

		/* 默认渐变位置从上往下 */
		background: linear-gradient(to bottom, rgba(254, 233, 238, 0), rgba(254, 233, 238, 1));


		// background: #fee9ee;
		// background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/bannerTop_new.png);
		// background-size: cover;
		background-position: 50%;
		padding: 40rpx;
	}


	.round-box {
		// box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		background-color: #fee9ee;
		// padding: 20px;
		width: 90%;
		height: 45px;
		box-sizing: border-box;

		position: absolute;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border: #c8909e solid 2rpx;
		border-bottom: 0;
		z-index: 2;
	}


	.left {
		display: flex;
		flex-direction: column;
		color: #fb7299;
	}


	// 图标修改
	.icon-huancun:before {
		content: "\e6ba";
		color: #669cfe;
		font-size: 80rpx;
	}

	.icon-history:before {
		content: "\e617";
		color: #669cfe;
		font-size: 80rpx;
	}

	.icon-wodeshoucang:before {
		content: "\e69e";
		color: #669cfe;
		font-size: 80rpx;
	}
</style>
