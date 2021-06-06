<template>
	<view class="search">
		<view class="search_top">
			<i class="iconfont icon-search"></i>
			<input type="text" placeholder="搜索">
		</view>
		<view class="search_title">大家都在搜</view>
		<view class="search_keywords">
			<text v-for="(item, index) in arr" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: []
			};
		},
		created() {
			let _this = this;
			// 调用云函数
			this.getLog(_this);
		},
		methods: {
			getLog(_this) {
				uniCloud.callFunction({
						name: 'getIndexData',
						data: {
							myname: 'keywords'
						}
					})
					.then(res => {
						_this.arr = res.result.data[0].arr;
						console.log("1");
						// console.log(this);
						// console.log(_this);
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../styles/iconfonts.css");

	.search {
		padding: 20rpx;

		.search_top {
			background: #efefef;
			height: 60rpx;
			display: flex;
			justify-content: space-between;
			border-radius: 10rpx;
			overflow: hidden;

			.iconfont {
				height: 80rpx;
				line-height: 80rpx;
				width: 60rpx;
				display: block;
				text-align: center;
				color: #999;
			}

			input {
				flex: 1;
				height: 60rpx;
			}
		}

		.search_title {
			height: 120rpx;
			line-height: 120rpx;
			border-bottom: 1rpx solid #ccc;
		}

		.search_keywords {
			padding-top: 20rpx;

			text {
				float: left;
				width: 33.33%;
				line-height: 60rpx;
				font-size: 30rpx;
			}
		}
	}
</style>
