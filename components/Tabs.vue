<template>
	<view class="tabs">
		<view class="tabs_title" :class="currentIndex== index?'active':''"  v-for="(item,index) in tabs" :key="index"
			@click="changeTab(index) ">
				<view class='tab_item'>{{item}}</view>
				<view class="tab_line"></view>
		</view>
		<view class="tabs_content">
			<!-- <image src="../static/img`/1.jpg" mode="widthFix"></image> -->

		</view>
		
	</view>
</template>

<script>
	export default {
		name: "Tabs",
		data() {
			return {
				 currentIndex:0
				// ces:{zna:"ss"}
			};
		},
		props:{
			tabs:{
				type:Array,
				// default: function () { return []}
				default: ()=>[]
			}
		},
		methods: {
			changeTab(index) {
				this.currentIndex=index;
			},
			
		}
		
	}	
</script>

<style lang="scss">
	.tabs{
		color: #fd7103;;
		height: 100%;
		line-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 10rpx 0 10rpx;
		// background-color: red;
	}
	.tabs_title{
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #e8e8e8;

	}
	.tab_item{
		width: fit-content;
		margin: 23rpx auto;
		cursor:pointer;
		position: relative;
	}
	.tab_item:after {
		content: '';
    position: absolute;
		display: block;
    left: 5%;
    right: 0;
    bottom: -14rpx;
    width: 90%;
    height: 8rpx;
    border-radius: 6rpx;
    border-bottom: 8rpx solid currentColor;
    box-sizing: border-box;
	}

	
	.active{
		// ;    
		// border-bottom: 5rpx solid currentColor;
		// text-decoration:underline;
	}
	
	
	
	// .tab_line{
	// 	height: 20rpx;
	// 	width: 20rpx;
	// 	border-radius:1rpx ;
	// 	background-color:red;
	// 	// border-bottom: 5rpx solid currentColor;
	// }
	
	
	
	
	
</style>
