<template>
	<view>
		<view class="menu_content">
			<navigator url="../playlist/index" class="menu_item" hover-stay-time="200"
				v-for="item in menuList" :key="item.id"
			>
				<image :src="item.img" mode="widthFix"></image>
				<p>{{item.title}}</p>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Menu",
		data() {
			return {
				menuList: [{
					id: 1,
					title: "找人",
					img: "/static/img/icons/menu.png",
				}, {
					id: 2,
					title: "学习",
					img: "/static/img/icons/xuexi.png"
				}, {
					id: 3,
					title: "找人",
					img: "/static/img/icons/menu.png",
				}, {
					id: 4,
					title: "游戏",
					img: "/static/img/icons/game.png"
				}, {
					id: 5,
					title: "视频",
					img: "/static/img/icons/video.png"
				}, {
					id: 6,
					title: "热门",
					img: "/static/img/icons/hot.png"
				}, {
					id: 7,
					title: "电影",
					img: "/static/img/icons/eley.png"
				}, {
					id: 8,
					title: "直播",
					img: "/static/img/icons/live.png"
				}, {
					id: 9,
					title: "找人",
					img: "/static/img/icons/menu.png",
				}, {
					id: 10,
					title: "更多",
					img: "/static/img/icons/more.png"
				}]
			};
		}
	}
</script>

<style lang="scss">
	//menu
	.menu_content {
		padding: 20upx;
		display: flex;
		// flex-direction: row;
		flex-wrap: wrap;
	
		.menu_item {
			width: calc(100% / 5);
			display: flex;
			// flex: 1;
			box-sizing: border-box;
			// flex-direction: column;
			flex-wrap: wrap;
			align-items: center;
			padding: 20upx;
			justify-content: center;
		}
	}
</style>
