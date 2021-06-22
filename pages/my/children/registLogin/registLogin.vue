<template>
	<view class="body">
		<form @submit="formSubmit">

			<view class="face-wapper">
				<text class="iconfont icon-morentouxiang "></text>
			</view>

			<view class="info-wrapper">
				<label class="world-lbl">账号</label>
				<input type="text" value="" class="input" name="username" placeholder="请输入用户名"
					placeholder-class="graywords" />
			</view>
			<view class="info-wrapper">
				<label class="world-lbl">密码</label>
				<input type="password" value="" name="password" class="input" password="true" placeholder="请输入用户名"
					placeholder-class="graywords" />
			</view>

			<button type="primary" style="margin-top: 60upx;width: 90%;" form-type="submit">注册/登录</button>


		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			formSubmit(e){
				var that=this;
				var username=e.detail.value.username;
				var password=e.detail.value.password;
				//发起注册登录请求
				console.log("登录注册")
			}
		}
	}
</script>

<style lang="scss">
	@import url("./registLogin.css");
	@import url("/styles/iconfonts1.css");

	.icon-morentouxiang {
		font-size: 150upx;
	}
</style>
