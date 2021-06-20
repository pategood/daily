export default {
	data() {
		return {
			share: {
				title: '自定义分享标题',
				imageUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			}
		}
	},
	onShareAppMessage(res) {
		return {
			title: '分享(非朋友圈)',
			path: '/pages/index/index',
			imageUrl: this.share.imageUrl
		}
	},
	onShareTimeline(res) { //分享到朋友圈
		return {
			title: '分享到朋友圈',
			path: '/pages/index/index',
			imageUrl: this.share.imageUrl,
		}
	},
}
