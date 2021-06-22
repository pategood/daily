<template>
	<view>
		<view class="menu_content">
			<navigator url="../playlist/index" class="menu_item" hover-stay-time="200"
				v-for="(item,index) in menuList" :key="item.id"     @click="toCategory" :data-id="item.id" :data-c_id="item.c_id"
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
					c_id:"one",
					id: 0,
					title: "通讯",
					img: "/static/img/icons/menu.png",
				}, {
					c_id:"two",
					id: 1,
					title: "学习",
					img: "/static/img/icons/xuexi.png"
				}, {
					c_id:"three",
					id: 2,
					title: "美食",
					img: "/static/img/icons/food.png",
				}, {
					c_id:"four",
					id: 3,
					title: "游戏",
					img: "/static/img/icons/game.png"
				}, {
					c_id:"five",
					id: 4,
					title: "视频",
					img: "/static/img/icons/video.png"
				}, {
					c_id:"six",
					id: 5,
					title: "热门",
					img: "/static/img/icons/hot.png"
				}, {
					c_id:"seven",
					id: 6,
					title: "电影",
					img: "/static/img/icons/eley.png"
				}, {
					c_id:"eight",
					id: 7,
					title: "直播",
					img: "/static/img/icons/live.png"
				}, {
					c_id:"nine",
					id: 8,
					title: "动漫",
					img: "/static/img/icons/menu.png",
				}, {
					c_id:"one",
					id: 9,
					title: "更多",
					img: "/static/img/icons/more.png"
				}]
			}
		},
		methods:{
			toCategory(e){
				var id =e.currentTarget.dataset.id;
				var cid =e.currentTarget.dataset.c_id;
				uni.reLaunch({
					url: "/pages/category/category?id=" + id +"&cid=" +cid
				})
			}
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
		.menu_item:hover{
			color: blue;
		}
	}
</style>
