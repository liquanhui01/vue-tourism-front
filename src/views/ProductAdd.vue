<template>
	<el-scrollbar height="680px">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="所属商品" required>
				<el-select v-model="value1" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="标题">
				<el-input v-model="form.title"></el-input>
			</el-form-item>
			<el-form-item label="标题颜色">
				<el-color-picker v-model="color"></el-color-picker>
			</el-form-item>
			<el-form-item label="标题居中">
				<el-switch v-model="value"></el-switch>
			</el-form-item>
			<el-form-item label="标题粗体">
				<el-select v-model="value1" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="标题大小">
				<el-select v-model="value2" placeholder="请选择">
					<el-option v-for="item in options01" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="内容介绍">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item label="商品图片" required>
				<el-upload class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove" drag
					action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList">
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<template #tip>
						<div class="el-upload__tip">
							只能上传 jpg/png 文件，且不超过 500kb
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">提交</el-button>
			</el-form-item>
		</el-form>
	</el-scrollbar>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '400',
					label: '400'
				}, {
					value: '500',
					label: '500'
				}, {
					value: '600',
					label: '600'
				}, {
					value: '700',
					label: '700'
				}, {
					value: '800',
					label: '800'
				}],
				options01: [{
					value: '16',
					label: '16'
				}, {
					value: '17',
					label: '17'
				}, {
					value: '18',
					label: '18'
				}, {
					value: '19',
					label: '19'
				},
				{
					value: '20',
					label: '20'
				},
				{
					value: '21',
					label: '21'}],
				value: false,
				value1: "600",
				value2: "17",
				color: '#409EFF',
				fileList: [{
					name: 'food.jpeg',
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}],
				form: {
					title: '',
					desc: '',
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
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style>

</style>
