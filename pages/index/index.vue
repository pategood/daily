<template>
	<view class="container">

		<Search></Search>
		<Tabs :tabs='Tabs' />
		<Swiper></Swiper>


		<!-- 		<view class="index_cate">
			<navigator hover-stay-time="200" url="../playlist/index" v-for="item in catesList" class="cates"
				:key="item.name">
				<image :src="item.image_src" mode="widthFix"></image>
			</navigator>
		</view> -->



		<view class="menu_content">
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/menu.png" mode="widthFix"></image>
				<p>找人</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/xuexi.png" mode="widthFix"></image>
				<p>学习</p>
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
				<image src="../../static/img/icons/hot.png" mode="widthFix"></image>
				<p>热门</p>
			</navigator>
			<navigator class="menu_item" hover-stay-time="200" url="../playlist/index">
				<image src="../../static/img/icons/eley.png" mode="widthFix"></image>
				<p>电影</p>
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
					<p>#拯救世界</p>
				</view>
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#震惊亲妈一百年</p>
				</view>
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#锐雯大杀四方</p>
				</view>
				<view class="hot_item">
					<image src="../../static/img/icons/lm.png" mode=""></image>
					<p>#钢铁侠出世</p>
				</view>
			</view>
		</view>


		<!-- 学习之夜 栏目 -->
		<!-- <view class="theme_box">
			<view class="theme_title">
				<p class="titleMain">学习狂欢</p>
				<p class="title">学习打卡 call</p>
			</view>

			滚动组
			<view class="thteme_content">
				<view class="groupItem">
					<image src="../../static/img/video/gaoxiao.png" mode="aspectFill	"></image>
					<p>如何高效学习?教你7招提高记忆力</p>
				</view>
				<view class="groupItem">
					<image src="../../static/img/video/video1.png" mode="aspectFill	"></image>
					<p>北大心理学硕士来教你</p>
				</view>
				<view class="groupItem">
					<image src="../../static/img/group/rmd.png" mode="aspectFill	"></image>
					<p>一起狂欢</p>
				</view>
				<view class="groupItem">
					<image src="../../static/img/group/rmd.png" mode="aspectFill	"></image>
					<p>一起狂欢</p>
				</view>
			</view>
		</view> -->
		<Scroll></Scroll>

		<!-- 轮播图 -->
		<!-- <swiper2></swiper2> -->

		<!-- 休息一下 -->
		<Movies></Movies>
		<backTop :scrollTop="backTop.scrollTop" :isbottom="isbottom"></backTop>

		<!-- <button type="primary" @click="tapscroll">回到顶部</button> -->

	</view>
</template>

<script>
	import Tabs from "../../components/Tabs/Tabs.vue"
	import Cates from "../../components/Cates/Cates.vue"
	import Search from "../../components/Search/Search.vue"
	import Swiper from "../../components/Swiper/Swiper.vue"
	// import Swiper2 from "../../components/Swiper2/Swiper2.vue"
	import Scroll from "../../components/Scroll/Scroll.vue"
	import Movies from "../../components/Movies/Movies.vue"
	import backTop from '@/components/common/back-top/back-top.vue';



	export default {
		data() {
			return {
				Tabs: ['精选', '电视剧', '综艺', '电影', '动漫'],
				catesList: [],
				backTop: {
					scrollTop: 0
				},
				scrollTop: 0,
				isbottom:false
			}
		},
		components: {
			Tabs,
			Search,
			Cates,
			Swiper,
			Scroll,
			Movies,
			backTop
			// Swiper2
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
			},

			tapscroll: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 150
				})
			}
		},
		onPageScroll(e) {
			this.backTop.scrollTop = e.scrollTop;
		},
		
		onReachBottom(e) {
			this.isbottom=true
		},
		onReachTop(e){
			this.isbottom=false
		}
	}
</script>

<style lang="scss">
	// @import url("../../styles/iconfonts1.css");
	// @import url("../../styles/iconfonts.css");

	.container {
		// padding-bottom: var(--window-bottom);
		padding-bottom: calc(var(--window-bottom) + 20px);
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
			width: 18%;
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
		// background-color: yellow;
		border-top: 2rpx solid #dddddd;
		padding: 0 5rpx;
	}

	.hot_item {
		padding: 15rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 50%;
		border-bottom: 2rpx solid #dddddd;

		image {
			margin: 10rpx;
			width: 30rpx;
			height: 30rpx;
		}

		p {
			flex: 1;
			margin-left: 10rpx;
			border-right: 2rpx solid #dddddd;
			;
		}
	}

	//去除偶数位的右边线条
	.hot_box .hot_item:nth-child(even) p {
		border-right: none;
	}

	.hot_box .hot_item:nth-child(3),
	.hot_box .hot_item:nth-child(4) {
		border-bottom: none;
	}

	.theme_box {
		// margin-top: 20rpx;
		// padding: 10rpx;
		display: flex;
		flex-direction: column;
		font-size: 42rpx;
		border-top: 18rpx solid #f2f2f2;
	}

	.theme_title {
		display: flex;
		justify-content: space-between;
		padding: 8rpx 15rpx;
		margin-left: 0;
		margin-right: 0;
		border-left: 6rpx solid #ff8201;
		margin: 0;
	}

	.titleMain {
		color: #636363;
		font-size: 17px;
	}

	.title {
		color: #939393;
		font-size: 14px;
		margin-right: 20rpx;
	}

	.thteme_content {
		display: flex;
		padding: 20rpx;
		flex-wrap: nowrap;
		padding: 20rpx;
		//设置x轴超出显示，超出部分用滚动条查看
		// width: 100%;
		overflow-x: auto;
		// margin-top: 15rpx;
	}

	.groupItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 20rpx;
		width: 90%;
		height: 90%;

		//flex不拉伸图片
		// flex-shrink: 0;

		image {
			border-radius: 25rpx;
		}

		p {
			width: 100%;
			border: 2rpx solid #dddddd;
			border-top: none;
			padding: 20rpx;
			font-size: 14px;
		}
	}
</style>
