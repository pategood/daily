<template>
	<view>
		<view class="content">
			<view class="left">
				<image class="img" src="/static/img/my/tou.png" mode="widthFix"></image>
				<text>点击登录</text>
			</view>
			<view class="span_right"></view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "UserInfo",
		data() {
			return {

			};
		},
		methods: {

		},
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		padding: 20upx;
	}



	.left {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.img {
			border-radius: 100%;
			width: 200upx;
			height: 200upx;
		}
	}










	.span_right {
		font-size: 0.8em;
		/*大小*/
		padding: 0.4em;
		width: 30upx;
		height: 30upx;
		border-top: 3px solid #b9b9b9;
		/*上面的线条*/
		border-right: 3px solid #b9b9b9;
		/*右边线条*/
		transform: rotate(45deg);
		/*主要是这个旋转45度*/
	}
</style>
