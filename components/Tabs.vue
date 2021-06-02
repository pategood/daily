<template>
	<view class="tabs">
		<view class="tabs_title" :class="currentIndex== index?'active':''"  v-for="(item,index) in tabs" :key="index"
			@click="changeTab(index) ">
				<view class='tabs_item'>{{item}}</view>
				
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
	.tabs_item{
		width: fit-content;
		margin: 20rpx auto;
	}
	.active{
		background-color: red;
	}
	
	
	
	
	
</style>
