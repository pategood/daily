<template>
	<view class="scroll_content">
		<view class="groupTitle">
			学习狂欢
		</view>
		<scroll-view scroll-y="false" class="scroll" scroll-with-animation="true" scroll-x="true" >
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
						img: '/static/img/video/gaoxiao.png',
						title: "如何高效学习?",
						lable: "有效学习"
					},{
						img: '/static/img/video/video1.png',
						title: "北大硕士来教你",
						lable: "记忆学习"
					},
					{
						img: '/static/img/video/video3.png',
						title: "考研书单",
						lable: "学习书单"
					},
					{
						img: '/static/img/video/video2.png',
						title: "考研",
						lable: "有效学习"
					},
					{
						img: '/static/img/group/rmd.png',
						title: "一起狂欢",
						lable: "有效学习"
					}

				]
			};
		},
		methods:{
			
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
		padding-left: 8rpx;
		margin-left: 10upx;
		margin-top: 10upx;
		margin-bottom: 10upx;
	}
	.scroll{
		//横向滚动生效
		white-space: nowrap;
		width: 100%;
	}
	.groupContent{
		display: flex;
		justify-content: space-between;
	}
	.groupItem{
		// display: inline-block;
		height: 300upx;
		width: 310upx;
		padding: 0 12upx;
	}
	.groupItem image{
		// display: inline-block;
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
	.groupItem text:nth-child(2){
		font-size:30upx;
	}
	.groupItem text:nth-child(3){
		font-size: 27upx;
		color: #9c9c9c;
	}
	.groupItem image:last-child{
		padding-right: 200upx;
	}
	// .groupContent view:nth-child(2){
	// 	padding: 0 15upx !important; 
	// }
</style>
