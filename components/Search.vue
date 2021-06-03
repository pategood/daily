<template>
	<view>
		<view >
			<view class="searchCnt">
				<navigator url="../pages/search/index" class="search_box">
					<image src="../static/img/icons/search.png" mode="widthFix"></image>
					<p>深圳出现特大暴雨</p>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Search",
		data() {
			return {
				 
			};
		}
		
	}
</script>

<style lang="scss">
	.searchCnt{
		padding: 12rpx;
		background-color: #ffffff;
	}
	.search_box{
		// padding: 10rpx;
		background-color: #cecece;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60rpx;
		image{
			width:7%;
			// height:7%;
		}
		p{
			margin-top: -7.5rpx;
			margin-left: 12rpx;
		}
	}
</style>
