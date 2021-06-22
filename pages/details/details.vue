<template>
	<view>

		<text>视频详情页</text>

		<view class="player">
			<video src="" controls class="movie" id="myMovie">


			</video>

		</view>

		<!-- 视频基本信息 -->
		<view class="movie-info">
		<navigator url="">
			<image src="https://i.loli.net/2021/06/22/h3uCNyP2f8EH7Fk.jpg" mode=""></image>
		</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		// 页面初次渲染完成,货地视频上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext("myMovie");
		},
		onHide() {
			// 页面被隐藏的时候暂停播放
			this.videoContext.pause();
		},
		onShow() {
			// 页面显示时播放视频
			if (this.videoContext) {
				this.videoContext.play();
			}
		},
		onLoad(params) {

			// 在这里获取分类页传过来u的数据id
			// console.log(params)
		},
		//小程序分享
		onShareAppMessage(res) {
			return {
				title: '分享(非朋友圈)',
				path: '/pages/index/index'
			}
		},
		// 监听导航栏目的按钮
		onNavigationBarButtonTap() {
			var index = e.index;
			var that = this;
			var name = "znq"
			if (index == 0) {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://dummyimage.com/120x120/50B347/FFF&text=测试",
					title: "视频分享:<<" + name + ">>",
					summary: "我正在使用hb",
					imageUrl: "http://dummyimage.com/120x120/50B347/FFF&text=测试",
					success: function(res) {
						console.log("success:" + JSON.stringify(res))
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				})
			}



		}

	}
</script>

<style lang="scss">

</style>
