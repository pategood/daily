<template>
	<view class="my_content">
		<Login></Login>
		<!-- <section class="account">
			<div class="account-item">
				<div class="number">
					<span class="balance">0.00</span>元
				</div>
				<div class="account-info">我的</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>个
				</div>
				<div class="account-info">我的优惠</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>分
				</div>
				<div class="account-info">我的积分</div>
			</div>
		</section> -->
	</view>
</template>

<script>
	import Login from '@/components/My/Login/Login.vue'
	export default {
		name: "my",
		data() {
			return {
				
			}
		},
		methods: {

		},
		components:{
			Login
		}
	}
</script>

<style lang="scss">

</style>
