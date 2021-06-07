let ajaxTimes=0;

export const request=(options)=>{
	
	ajaxTimes++;
	// 显示加载中 效果
	uni.showLoading({
		title: "加载中",
		mask: true,
	});
	const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1";
	const baseUrl1="https://api-hmugo-web.itheima.net/api/public/v1";
	return new Promise((resolve,reject)=>{
		uni.request({
			...options,
			url:baseUrl+options.url,
			// url:(baseUrl+options.url) || (baseUrl1),
			// method: options.method || 'post',
			// data: options.data || {},
			success: (res)=>{
				resolve(res.data.message);
			},
			fail: (err)=>{
				reject(err)
			},
			complete:()=>{
				ajaxTimes--;
				if(ajaxTimes===0){
					//  关闭正在等待的图标
					uni.hideLoading();
				}
			}
		});
	})
}