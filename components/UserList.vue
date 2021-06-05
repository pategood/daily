<template>
	<view>
		<button type="default" @click="onAddUser()"></button>
		
	</view>
</template>

<script>
	export default {
		name:"UserList",
		data() {
			return {
				
			};
		},methods:{
			onAddUser(){
				let db =uniCloud.database();
				let user = db.collection('users')
				user.add({
					'username': 'pategood',
					'password': '123456',
					'nickname': 'znq',
					'gender': 1,
					'mobile': '13026640798',
					'email': 'zxc2283879877@outlook.com'
				}).then(res=>{
					console.log(res);
				}).catch(e=>{
					console.log(e);
				})
			},
		}
		
	}
</script>

<style lang="scss">

</style>
