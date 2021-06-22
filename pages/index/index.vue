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

		<Menu></Menu>

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
		<Scroll></Scroll>

		<!-- 休息一下 -->
		<Movies></Movies>

		<backTop :scrollTop="backTop.scrollTop" :isbottom="isbottom"></backTop>



	</view>
</template>

<script>
	import Tabs from "../../components/Home/Tabs/Tabs.vue"
	import Cates from "../../components/Home/Cates/Cates.vue"
	import Search from "../../components/Home/Search/Search.vue"
	import Swiper from "../../components/Home/Swiper/Swiper.vue"
	// import Swiper2 from "../../components/Swiper2/Swiper2.vue"
	import Scroll from "../../components/Home/Scroll/Scroll.vue"
	import Movies from "../../components/Home/Movies/Movies.vue"
	import Menu from "../../components/Home/Menu/Menu.vue"
	import backTop from '@/components/common/back-top/back-top.vue';


	export default {
		data() {
			return {
				Tabs: ['精选', '电视剧', '美食', '电影', '动漫','综艺'],
				// Tabs: ['精选', '电视剧', '美食', '电影', '动漫','综艺','直播'],
				catesList: [],
				backTop: {
					scrollTop: 0
				},
				scrollTop: 0,
				isbottom: false,
			}
		},
		components: {
			Tabs,
			Search,
			Cates,
			Swiper,
			Scroll,
			Movies,
			Menu,
			backTop,
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
			this.isbottom = true
		},
		onReachTop(e) {
			this.isbottom = false
		},
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
		box-sizing: border-box;
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
