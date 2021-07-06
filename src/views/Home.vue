<template>
	<div class="total">
		<!-- 头部 -->
		<el-affix :offset="0">
			<Header></Header>
		</el-affix>
		<!-- 主体 -->
		<div style="display: flex;">
			<!-- 侧边栏 -->
			<el-affix :offset="50">
				<Aside></Aside>
			</el-affix>
			<!-- 内容区域 -->
			<div class="content">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Aside from "@/components/Aside.vue";
	export default {
		name: "Home",
		components: {
			Header,
			Aside,
		}
	}
</script>

<style scoped>
	body,
	html,
	.total {
		width: 100%;
		min-height: 90vh;
	}

	.content {
		width: 98%;
		min-height: calc(90vh - 50px);
		background-color: #f8f8f9;
		border: 1px solid #f8f8f9;
		padding: 20px;
		/* margin-top: 19px;
		margin-left: 15px;
		margin-right: 15px; */
		margin: 10px;
		border-radius: 15px;
	}
</style>
