<template>
	<div>
		<el-steps :active=active>
			<el-step title="基本信息" icon="el-icon-edit"></el-step>
			<el-step title="图片上传" icon="el-icon-picture"></el-step>
			<el-step title="身份及权限" icon="el-icon-upload"></el-step>
		</el-steps>
		<el-form ref="form" class="form" :model="form" label-width="80px">
			<div class="first" v-if="active == 1">
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
			</div>
			<div class="second" v-if="active == 2">
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
			</div>
			<div class="third" v-if="active == 3">
				<el-form-item label="角色" required>
					<el-radio-group v-model="form.resource">
						<el-radio label="普通商户" checked></el-radio>
						<el-radio label="管理人员"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="授权登录">
					<el-switch v-model="value"></el-switch>
				</el-form-item>
			</div>
		</el-form>
		<div class="page">
			<el-button :disabled=prewStatus @click="prew">上一步</el-button>
			<el-button :disabled=nextStatus @click="next">下一步</el-button>
		</div>
		<div class="button">
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button @click="cancle">取消</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: false,
				active: 1,
				nextStatus: false,
				prewStatus: true,
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
			},
			cancle() {
				this.dialogFormVisible = false;
			},
			onSubmit() {
				this.dialogFormVisible = false;
				console.log('submit!');
			},
			prew() {
				if (this.active <=3 && this.active > 1) {
					this.active -= 1;
					this.prewStatus = false;
				} else {
					this.prewStatus = true;
				}
			},
			next() {
				if(this.active < 3 && this.active >= 1) {
					this.active += 1;
					this.nextStatus = false;
				} else {
					this.nextStatus = true;
				}
			}
		},
	}
</script>

<style>
	.firsrt,
	.second,
	.third {
		padding-top: 30px;
		margin-top: 30px;
	}

	.form {
		margin-top: 45px;
	}

	.page {
		width: 40%;
		margin-left: 40%;
		margin-top: 30px;
	}

	.button {
		margin-top: 20px;
	}
</style>
