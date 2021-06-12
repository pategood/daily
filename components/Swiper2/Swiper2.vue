<template>
	<view>
		333
	</view>
</template>

<script>
	export default {
		name:"Swiper2",
		data() {
			return {
				swiperList:[]
			};
		},
		onLoad(){
			console.log("2333")
			this.getCarouselList();
		},
		methods:{
			getCarouselList(){
				console.log("2")
				uni.request({
					url:"http://www.imovetrailer.com/superhero/index/carousel/list",
					method: "post",
					success: (res)=>{
						console.log(res.data);
						if(res.data.status==200){
							this.swiperList=res.data.data;
							// var carouselList=res.data.data;
						}
					},
					
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
