<template>
	<view v-show="isbottom&&scrollTop>42" class="backTop" :class="{'mescroll-fade-in':isShowToTop}" @click="toTopClick">
		<image src="../../../static/back-top/top.png" mode="widthFix" />
	</view>
</template>

<script>
	export default {
		name: "backTop",
		props: {
			isbottom:{
				type:Boolean,
				default:false
			},
			id: {
				type: String,
				default: ''
			},
			scrollTop: {
				type: Number,
				default: 0
			},
			tab: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				isShowToTop: true
			}
		},
		methods: {
			toTopClick() {
				this.isShowToTop = false; // 回到顶部按钮需要先隐藏,再执行回到顶部,避免闪动
				if (this.tab) {
					this.$emit('setScrollTop');
				} else {
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 150
					});
				}
			}
		},

	}
</script>

<style>
	.mescroll-lazy-in,
	.mescroll-fade-in {
		-webkit-animation: mescrollFadeIn .3s linear forwards;
		animation: mescrollFadeIn .3s linear forwards;
	}

	.backTop {
		z-index: 9;
		position: fixed;
		right: 20upx;
		bottom: 120upx;
		/* #ifdef H5 */
		bottom: 220upx;
		/* #endif */
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
	}

	.backTop image {
		width: 100%;
		height: 100%;
	}
</style>
