<template>
	<div class="conta">
		<div class="con">
			<el-input v-model="input" placeholder="请输入订单号"></el-input>
			<el-button type="primary" size="medium">核销</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
	}
</script>

<style>
	.conta {
		width: 50%;
		margin-left: 23%;
		margin-top: 15%;
	}
	.con {
		width: 80%;
		margin: 10%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>

