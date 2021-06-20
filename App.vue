<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url("styles/css/animate.min.css");
	@import url("styles/iconfont.css");
	// @import "cl-uni/index.scss";
	page {
		width: 100%;
		height: 100%;
	}

	body {
		padding: 0;
		margin: 0;
	}

	ul,
	p {
		margin: 0;
	}

	// * {
	// 	box-sizing: border-box;
	// }

	//去除滚动条效果
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}

	/*每个页面公共css */
</style>
