<template>
	<view >
		<Tabs :tabs='Tabs' />
		<!-- <text>22</text> -->
		
		
		
		<swiper :indicator-dots="indicatorDots" :autoplay="true">
			<swiper-item>
				<view class="swiper-item">
					
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Tabs from "../../components/Tabs.vue"
	export default {
		data() {
			return {
				Tabs:['精选','电视剧','综艺','电影', '动漫'],
				indicatorDots: "true"
			}
		},
		components:{
			Tabs
		},
		
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
</style>
