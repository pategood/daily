<template>
	<view class="category_content">

		<scroll-view scroll-y="true" class="left_menu ">
			<!-- {{index===currentIndex?'active':''}} -->
			
			<view class="menu_item" :class="navIndex==index?'active':'' " v-for="(item,index) in leftMenuList" :key="index" 
			@tap="handleItemTap"  :data-id="item.id"    :data-index="index">
				{{item.title}}
			</view>
		</scroll-view>

		<scroll-view scroll-y="true" class="right_content" :scroll-into-view="toView" scroll-with-animation="true">
			<view class="right_item" v-for="(item1,index1) in rightContent" :key="item1.id"  :id="item1._id" >


			
				<view class="right_title">
					<text class="title">{{item1.cate_title}}</text>
				</view>

				<view class="right_c">
					<navigator class="cate_item" v-for="(item2,index2) in (item1.children)" :key="index2" hover-stay-time="200">
						<image :src="item2.img" mode="" class="right_img"></image>
						<view class="right_name">
							{{item2.cate_name}}
						</view>
					</navigator>
				</view>
			
			
			</view>
		</scroll-view>



	</view>
</template>

<script>
	export default {
		name: "category",
		data() {
			return {
				leftMenuList: [],
				rightContent: [],
				toView:'',
				navIndex: 0
			}
		},
		onLoad() {
			this.getCates();
		},
		methods: {
			getCates() {
				uni.showLoading({
					mask: true
				})
				uniCloud.callFunction({
					name: 'getIndexData',
					data: {
						myname: 'categorys'
					},
					success: res => {
						this.leftMenuList = res.result.data[0].arr.map(v => ({title:v.cate_title,id:v._id}));
						this.rightContent = res.result.data[0].arr;
						// console.log(this.leftMenuList);
						// console.log(this.rightContent);
					},
					complete: () => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				});
			},
			toDeatil(e) {
				var mId = e.currentTarget.dataset.trailerid
				uni.navigator({
					url: "" + mId
				})
			},
			handleItemTap(e) {
				var id = event.currentTarget.dataset.id;
				var index =event.currentTarget.dataset.index;
				this.toView = id;
				this.navIndex=index;
			}
		},
	}
</script>

<style lang="scss">
	.category_content {
		height: 100%;
		display: flex;
		font-size: 30rpx;
	}

	.left_menu {
		flex: 2;
	}

	.menu_item {
		height: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
	}

	.active {
		color: red;
		border-left: 5rpx solid currentColor;
	}

	.right_content {
		flex: 5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.right_item {
		display: flex;
		flex-direction: column;
	}

	.right_title {
		font-size: 40rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.right_c {
		width: 100%;
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;
	}

	// 图片拉伸问题
	/* 
	 给图片设置flex-shrink: 0;
	 在给图片设置宽高
	 */

	.cate_item {
		width: 33.33%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.right_img {
			// width: 50%;
			width: 120upx;
			height: 120upx;
			flex-shrink: 0;
		}

		.right_name {
			width: 120upx;
			word-break: break-all;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

	}
</style>
