<template>
	<view class="tabs">
		<view class="tabs_title"  v-for="(item,index) in tabs" :key="index"
			bindtap="handleItemTap" >
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
			handleItemTap(e) {
				// 获取点击事件的索引
				const {index} = e.currentTarget.dataset;
				// 2 触发 父组件中的事件 自定义
				this.triggerEvent("tabsItemChange", {index});
			}
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
		background-color: red;
	}
	.tabs_title{
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: green;

	}
	.tabs_item{
		width: fit-content;
		margin: 20rpx auto;
	}
	
	
	
	
	
	
	
/* 	.tabs{  //爷
		// margin-left: ;
	}
	.tabs_title{  //父
		height: 100rpx;
		width:100rpx;
		float: left;
		background-color: red;
	}
	.tabs_item{  //子
		height:100rpx;
		line-height: 100rpx;
		// text-align: center;
	} */
</style>
