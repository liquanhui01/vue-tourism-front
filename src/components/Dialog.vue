<template>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="公司全称" required>
			<el-input v-model="form.name" placeholder="请输入公司全称"></el-input>
		</el-form-item>
		<el-form-item label="商户名" required>
			<el-input v-model="form.name" placeholder="请输入商户名,该名称用于管理系统和在小程序端展示"></el-input>
		</el-form-item>
		<el-form-item label="商户号" required>
			<el-input v-model="form.name" placeholder="微信商户号用于支付业务"></el-input>
		</el-form-item>
		<el-form-item label="AppId">
			<el-input v-model="form.name" placeholder="非必填, 未入驻商家必填,该项未其他平台小程序AppId"></el-input>
		</el-form-item>
		<el-form-item label="跳转路径">
			<el-input v-model="form.name" placeholder="非必填, 未入驻商家必填, 该项未商户在其他平台的路径"></el-input>
		</el-form-item>
		<el-form-item label="商户地址" required>
			<el-input v-model="form.name" placeholder="请输入商户地址,地址具体到门牌号,用于导航"></el-input>
		</el-form-item>
		<el-form-item label="营业时间" required>
			<el-input v-model="form.name" placeholder="请输入营业时间"></el-input>
		</el-form-item>
		<el-form-item label="商户头像" required>
			<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
				:on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
				<el-button size="small" type="primary">点击上传</el-button>
				<template #tip>
					<div class="el-upload__tip">
						只能上传 jpg/png 文件，且不超过 500kb
					</div>
				</template>
			</el-upload>
		</el-form-item>
		<el-form-item label="背景图" required>
			<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
				:on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
				<el-button size="small" type="primary">点击上传</el-button>
				<template #tip>
					<div class="el-upload__tip">
						只能上传 jpg/png 文件，且不超过 500kb
					</div>
				</template>
			</el-upload>
		</el-form-item>
		<el-form-item label="角色" required>
			<el-radio-group v-model="form.resource">
				<el-radio label="普通商户" checked></el-radio>
				<el-radio label="管理人员"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="授权登录">
			<el-switch v-model="value"></el-switch>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				value: false,
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			}
		}
	}
</script>

<style>

</style>
