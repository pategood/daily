<template>
	<view class="search">
		<view class="search_index">
			<view class="search_top">
				<i class="iconfont icon-search" style="color: #333333;"></i>
				<input id="inp" type="text" placeholder="搜索" v-model="inpValue" maxlength="12" @input="onInput"
					@blur="offInput">
			</view>
			<button v-show="isFocus" class="btn" type="default" @click="restInput">取消</button>
			<!-- <Sbtn v-show="isFocus" class="btn" ></Sbtn> -->
			<!-- <Sinput :placeholder="搜索" ></Sinput> -->
		</view>
		<view class="search_title">大家都在搜</view>
		<view class="search_keywords">
			<text v-for="(item, index) in logArr" :key="index">{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logArr: [],
				searchValue: [],
				isFocus: false,
				//
				inpValue: ''
			};
		},
		components: {
		},
		onPullDownRefresh() {
			this.getLog();
		},
		created() {
			// let _this = this;
			// 调用云函数
			this.getLog();
		},
		methods: {
			// uni.showToast({
			// 	title: "请输入正确的车牌号码",
			// 	icon: "none",
			// 	duration: 2000,
			// 	mask: true
			// });
			getLog() {
				uni.showLoading({
					mask: true
				})
				uniCloud.callFunction({
					name: 'getIndexData',
					data: {
						myname: 'keywords'
					},
					success: res => {
						this.logArr = res.result.data[0].arr;
						// console.log("1");
						// console.log(this);
						// console.log(_this);
					},
					complete: () => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				});
			},
			onInput(e) {
				this.isFocus = true;
				this.inpValue = e.target.value;
			},

			offInput(e) {
				if (!e.target.value) {
					this.isFocus = false;
				}
			},
			restInput() {			
				this.$set(this, 'inpValue', '')
				this.isFocus = false;
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../styles/iconfonts1.css");

	.search {
		padding: 20rpx;

		.search_top {
			width: 100%;
			background: #efefef;
			height: 60rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 10rpx;
			overflow: hidden;

			.iconfont {
				height: 80rpx;
				line-height: 80rpx;
				margin-top: 5rpx;
				width: 60rpx;
				display: block;
				// display:flex;

				text-align: center;
				color: #999;
			}

			input {
				flex: 1;
				height: 60rpx;
			}
		}

		.search_index {
			display: flex;
			justify-content: center;
			align-items: center;
			;
		}

		.btn {
			width: 110rpx;
			padding: 0;
			margin: 0 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26rpx;
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
