'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
	return db.collection(event.myname).get().then(res=>{
		return res;
	})
};
