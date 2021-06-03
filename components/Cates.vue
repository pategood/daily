<template>
	<view>
		<!-- 菜单栏 -->
		<view class="index_cate" >
			<navigator url="../pages/playlist/index" v-for="item in catesList" 
				class="cates" :key="item.name">
				<image :src="item.image_src" mode="widthFix"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Cates",
		data() {
			return {
				catesList:[]
			}
		},
		onLoad() {
			this.getCateList();
		},
		methods: {
		 async getCateList(){
			await this.$request({
				url:"/home/catitems" 
				// data:{}
				}).then(res=>{
					// console.log(res);
					this.catesList=res;		
					console.log(this.catesList)
				});
			}
		}
	}
</script>

<style lang="scss">
	.container{
		margin: 0 10rpx 0 10rpx;
	}
	//cates
	.index_cate{
		display: flex;
		justify-content: center;
		align-items: center;
		navigator{
			flex:1;
			image{
				padding: 6rpx;
				width: 100%;
			}
		}
	}
</style>
