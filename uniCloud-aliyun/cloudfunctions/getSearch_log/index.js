'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	return db.collection(event.myname).limit(10).get().then(res=>{
		return res;
	})
};







