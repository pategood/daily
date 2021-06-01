'use strict';
cont db = uniCloud.database();

exports.main = async (event, context) => {
	//找到一个 news的集合
	
	//返回数据给客户端
	// return event
	return db.collection('news').get().then(res=>{
		return res;
	})
};
