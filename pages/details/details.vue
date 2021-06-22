<template>
	<view>
		
		<text>分享页</text>
		
		<view class="player">
			<video src="" controls class="movie"></video>
			
		</view>
		
		<!-- 视频基本信息 -->
		<view class="movie-info">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(params){
			
			// 在这里获取分类页传过来u的数据id
			// console.log(params)
		},
		//小程序分享
		onShareAppMessage(res){
			return {
				title: '分享(非朋友圈)',
				path: '/pages/index/index'
			}
			
		}
		
	}
</script>

<style lang="scss">

</style>
