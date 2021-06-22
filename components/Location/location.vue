<template>
	<view class="search-view">
		<view class="img iconfont icon-wodedizhi"></view>
		<!-- 		<view class="img2">
			<image src="../../static/img/icons/tabar/location.png"></image>
		</view> -->
		<p class="search-p"> 广东省深圳市龙华区大浪街道</p>
		<button type="default" @click="getLocation">获取定位</button>
	</view>
</template>

<script>
	export default {
		name: "Location",
		data() {
			return {

			};
		},
		methods: {
			getLocation() {
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
					},
					fail() {
						console.log("获取定位失败")
					}
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../styles/iconfont.css");

	.search-view {
		margin: 20rpx 0;
		width: 100%;
		display: flex;
		padding: 0 10rpx;
	}

	// .search-view image {
	// 	flex: 0 auto;
	// 	width: 10%;
	// 	// height: 100%;
	// 	font-size: 30rpx;
	// 	font-weight: bold;
	// }

	.search-p {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		// width: 100px;
		word-break: keep-all;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.img {
		font-size: 60rpx;
	}

	// .img2 {
	// 	font-size: 30rpx;
	// }
</style>
