<template>
	<view class="content">

		<view class="header"  v-if="userLogin">
			<view class="left">
				<image class="img" src="/static/img/my/tou.png" mode="widthFix"></image>
				<text>znq</text>
			</view>
			<view class="right">
				<span>空间</span>
				<view class="span_right"></view>
			</view>
		</view>
		
		<view class="header"  v-else  >
			<view class="left" @click="toRL">
				<image class="img" src="/static/img/my/b.png" mode="widthFix"></image>
				<text  class="">注册/登录</text>
			</view>
			<view class="right">
				<text class="iconfont  icon-erweima"></text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "UserInfo",
		data() {
			return {
				userLogin: false
			};
		},
		methods: {
			toRL(){
				uni.navigateTo({
					url: "/pages/my/children/registLogin/registLogin" 
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		//前提是禁用了原生导航栏
		// 小程序
		// /* #ifdef MP */
		// padding: 0upx 30upx 40upx 30upx;
		// /* #endif */

		// // 非小程序
		// /* #ifndef MP */
		// padding: 120upx 30upx 40upx 30upx;
		// /* #endif */
		// l
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		padding: 15upx 20upx 15upx 20upx;
		background-color: #ffd655;
		// background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_10AYFAIAAAzO_Q1tPg693.png) repeat;
	}



	.left {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.img {
		border-radius: 50%;
		flex-shrink: 0;
		width: 150upx;
		height: 150upx;
	}

	.nickname {
		flood-color: #6a5018;
		font-size: 18px;
		font-weight: bold;
	}
	
	.rigist-login{
		margin-left: 60upx;
		margin-top: 30upx;
	}

	.right {
		width: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}










	.span_right {
		font-size: 0.8px;
		/*大小*/
		padding: 0.4em;
		width: 10px;
		height: 10px;
		border-top: 3px solid #b9b9b9;
		/*上面的线条*/
		border-right: 3px solid #b9b9b9;
		/*右边线条*/
		transform: rotate(45deg);
		/*主要是这个旋转45度*/
	}
	
	
	
	.icon-erweima{
		font-size: 100upx;
	}
</style>
