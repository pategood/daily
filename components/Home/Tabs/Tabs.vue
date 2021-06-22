<template>
	<view class="tabs">
		<!-- <scroll-view scroll-y="true" class="tabs"> -->

			<view class="tabs_title"  v-for="(item,index) in tabs" :key="index"
				@click="changeTab(index) ">
				<span class='tab_item' :class="{ active: index == currentIndex }">{{item}}</span>
			</view>
			
			<!-- <view class="tabs_content"></view> -->

		<!-- </scroll-view> -->
	</view>
</template>

<script>
	export default {
		name: "Tabs",
		data() {
			return {
				currentIndex: 0
				// ces:{zna:"ss"}
			};
		},
		props: {
			tabs: {
				type: Array,
				// default: function () { return []}
				default: () => []
			}
		},
		methods: {
			changeTab(index) {
				this.currentIndex = index;
				// console.log(index)

			},

		}

	}
</script>

<style lang="scss">
	.tabs {
		display: flex;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #fff;
		z-index: 2;
		border-bottom: 2rpx solid #dddddd;
		color: #fd7103;
		border-radius: 200rpx;
		// background-color: red;
	}

	.tabs_title {
		width: 60%;
		flex: 1;
		text-align: center;
		// display: flex;
		// justify-content: center;
		// align-items: center;
		// background-color: #f4f4f4;
	}
	
	
	.active {
		font-size: 35rpx;
		color:#fa7298;
		font-weight:bolder ;
		margin: 0 5px 0 5px;
		border-radius: 3%;
		border-bottom: 2px salmon solid;
	}

	.tab_item {
		// width: fit-content;
		// margin: 15rpx auto 21rpx;
		cursor: pointer;
		// position: relative;
	}




	// .tab_line {
		// position: relative;
		// height: 8rpx;
		// width: 90%;
	// }

	.tab_line:after {
		content: '';
		position: absolute;
		left: 5%;
		right: 0;
		bottom: -14rpx;
		width: 90%;
		height: 8rpx;
		border-radius: 6rpx;
		border-bottom: 8rpx solid currentColor;
		box-sizing: border-box;
	}




















	// .tab_item:after {
	// 	content: '';
	//    position: absolute;
	// 	// display:none;
	// 	// display:inline-block;
	//    left: 5%;
	//    right: 0;
	//    bottom: -14rpx;
	//    width: 90%;
	//    height: 8rpx;
	//    border-radius: 6rpx;
	//    border-bottom: 8rpx solid currentColor;
	//    box-sizing: border-box;
	// }


	.active {
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
