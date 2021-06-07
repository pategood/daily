<template>
	<view class="scroll_content">
		<view class="groupTitle">
			学习狂欢
		</view>
		<scroll-view scroll-y="true" class="scroll" scroll-with-animation="true">
			<view class="groupContent">
				<block v-for="(item,index) in picture" :key="index">
					<view class="groupItem">
						<image :src="item.img" mode="aspectFill	"></image>
						<text>{{item.title}}</text>
						<text>{{item.lable}}</text>
					</view>

				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "Scroll",
		data() {
			return {
				picture: [{
						img: '../../static/img/video/gaoxiao.png',
						title: "如何高效学习?教你7招提高记忆力",
						lable: "有效学习"
					},{
						img: '../../static/img/video/video1.png',
						title: "北大心理学硕士来教你",
						lable: "有效学习"
					},
					{
						img: '../../static/img/group/rmd.png',
						title: "北大心理学硕士来教你",
						lable: "有效学习"
					},
					{
						img: '../../static/img/group/rmd.png',
						title: "一起狂欢",
						lable: "有效学习"
					}

				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.scroll_content{
		margin: 20upx 0;
		border-top: 20rpx solid #f2f2f2;
	}
	.groupTitle{
		font-size: 35upx;
		height: 50upx;
		line-height: 50upx;
		margin-left: 10upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
	}
	.scroll{
		//横向滚动生效
		white-space: nowrap;
		width: 100%;
		height: 300upx;
	}
	.groupContent{
		display: flex;
		justify-content: space-between;
	}
	.groupItem{
		height: 300upx;
		width: 300upx;
		padding: 0 8upx;
	}
	.groupItem image{
		width: 300upx;
		height: 200upx;
		border-radius: 25rpx;
	}
	
	.groupItem text{
		height: 45upx;
		line-height: 45upx;
		//超出一行隐藏
		display: -webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
</style>
