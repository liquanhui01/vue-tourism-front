<template>
	<el-menu :default-active="$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
		:collapse="isCollapse" style="min-height: calc(90vh - 50px);">
		<el-menu-item index="/home/dash">
			<i class="el-icon-s-platform"></i>
			<template #title>仪表盘</template>
		</el-menu-item>
		<el-submenu index="/shop">
			<template #title>
				<i class="el-icon-s-shop"></i>
				<span>商户管理</span>
			</template>
			<el-menu-item index="/home/shop">商户管理</el-menu-item>
			<el-menu-item index="/home/category">商户分类</el-menu-item>
		</el-submenu>
		<el-submenu index="/products">
			<template #title>
				<i class="el-icon-s-goods"></i>
				<span>商品管理</span>
			</template>
			<el-menu-item index="/home/products">商品列表</el-menu-item>
			<el-menu-item index="/home/product_add">商品主体</el-menu-item>
		</el-submenu>
		<el-submenu index="/order">
			<template #title>
				<i class="el-icon-s-flag"></i>
				<span>订单管理</span>
			</template>
			<el-menu-item index="/home/order">订单中心</el-menu-item>
			<el-menu-item index="/home/check">订单核销</el-menu-item>
		</el-submenu>
		<el-menu-item index="/home/permission">
			<i class="el-icon-s-check"></i>
			<template #title>权限管理</template>
		</el-menu-item>
		<el-submenu index="/home/settings">
			<template #title>
				<i class="el-icon-s-tools"></i>
				<span>设置</span>
			</template>
			<el-menu-item index="/home/settings/message">个人信息</el-menu-item>
			<el-menu-item index="/home/settings/password">修改密码</el-menu-item>
		</el-submenu>
	</el-menu>
	<!-- <el-affix :offset="9"> -->
	<el-radio-group v-model="isCollapse" style="position: absolute; top: 7px; left: 220px;">
		<el-radio-button :label="false">开启</el-radio-button>
		<el-radio-button :label="true">收起</el-radio-button>
	</el-radio-group>
	<!-- </el-affix> -->
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		}
	}
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
</style>
