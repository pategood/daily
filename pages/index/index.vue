<template>
	<view class="container">
		<Search></Search>
		<Tabs :tabs='Tabs' />

		<swiper :indicator-dots="indicatorDots" :autoplay="true">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>

		<!-- 		<view class="index_cate">
			<navigator hover-stay-time="200" url="../playlist/index" v-for="item in catesList" class="cates"
				:key="item.name">
				<image :src="item.image_src" mode="widthFix"></image>
			</navigator>
		</view> -->

		<!-- <Cates></Cates> -->


		<view class="menu_content">
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/menu.png" mode="widthFix"></image>
				<p>找人</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/game.png" mode="widthFix"></image>
				<p>游戏</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/menu.png" mode="widthFix"></image>
				<p>找人</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/game.png" mode="widthFix"></image>
				<p>游戏</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/video.png" mode="widthFix"></image>
				<p>视频</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/menu.png" mode="widthFix"></image>
				<p>找人</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/eley.png" mode="widthFix"></image>
				<p>找人</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/live.png" mode="widthFix"></image>
				<p>直播</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/menu.png" mode="widthFix"></image>
				<p>找人</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/more.png" mode="widthFix"></image>
				<p>更多</p>
			</navigator>
		</view>

		<!-- 热门 -->
		<view class="hot_content">
			<view class="hot_box">
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#拯救世界的英雄居然是...</p>
				</view>
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#拯救世界的英雄居然是...</p>
				</view>
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#拯救世界的英雄居然是...</p>
				</view>
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#拯救世界的英雄居然是...</p>
				</view>
			</view>
		</view>







	</view>
</template>

<script>
	import Tabs from "../../components/Tabs.vue"
	import Cates from "../../components/Cates.vue"
	import Search from "../../components/Search.vue"
	export default {
		data() {
			return {
				Tabs: ['精选', '电视剧', '综艺', '电影', '动漫'],
				indicatorDots: "true",
				bannerList: [
					"/static/img/banner/3.jpg",
					"/static/img/banner/4.jpeg"
				],
				catesList: []
			}
		},
		components: {
			Tabs,
			Search,
			Cates
		},

		onLoad() {
			this.getCateList();
		},
		methods: {
			async getCateList() {
				await this.$request({
					url: "/home/catitems"
					// data:{}
				}).then(res => {
					this.catesList = res;
				});
			}
		}
	}
</script>

<style lang="scss">
	@import url("../../styles/iconfonts.css");

	* {
		box-sizing: border-box;
	}

	.container {
		margin: 0 10rpx 0 10rpx;
	}

	swiper {
		padding: 0 10rpx 0 10rpx;
		height: calc(100vw * 300 /960);

		image {
			width: 100vw;
			height: 100vh;
		}
	}

	//cates
	.index_cate {
		display: flex;
		justify-content: center;
		align-items: center;

		navigator {
			flex: 1;

			image {
				padding: 6rpx;
				width: 100%;
			}
		}
	}

	//menu
	.menu_content {
		padding: 10rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.menu_item {
			width: 18.99%;

			display: flex;
			flex: 1;
			// flex-direction: column;
			flex-wrap: wrap;
			align-items: center;
			padding: 20rpx;
			justify-content: center;
		}
	}

	//hot
	.hot_box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: yellow;

		image {
			width: 30rpx;
			height: 30rpx;
		}
	}
	.hot_item{
		padding: 15rpx;
		display: flex;
		
		width: 50%;
	}
</style>
