<template>
	<div class="container">
		<div class="button">
			<el-button type="primary" size="small" style="margin-right: 20px;" @click="dialog()"
				@pushData="receiveData">新增</el-button>
			<div class="search">
				<Date></Date>
				<el-button icon="el-icon-search" type="success" size="medium" style="margin-left: 10px;"></el-button>
			</div>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" stripe>
				<el-table-column prop="date" label="注册时间" width="350">
				</el-table-column>
				<el-table-column prop="name" label="商户名" width="350">
				</el-table-column>
				<el-table-column prop="address" label="操作">
					<el-button type="danger" size="small" plain>删除</el-button>
				</el-table-column>
			</el-table>
		</div>
		<div class="pagination">
			<div class="block">
				<el-pagination layout="prev, pager, next" background :total="10" hide-on-single-page="true">
				</el-pagination>
			</div>
		</div>
		<div class="dialog">
			<el-dialog v-model="dialogFormVisible">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
					class="demo-ruleForm">
					<el-form-item label="用户名" prop="name">
						<el-input v-model.number="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import Date from "@/components/Date.vue";
	export default {
		name: "ShopAdd",
		components: {
			Date,
		},
		methods: {
			dialog() {
				this.dialogFormVisible = true;
			},
			tableRowClassName({
				row,
				rowIndex
			}) {
				if (rowIndex === 1) {
					return 'warning-row';
				} else if (rowIndex === 3) {
					return 'success-row';
				}
				return '';
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				this.dialogFormVisible = false;
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		data() {
			var checkName = (rule, value, callback) => {
				if (len(value) < 2 || len(value) > 10) {
					return callback(new Error('用户名格式不正确'));
				}
				
				// setTimeout(() => {
				// 	if (!Number.isInteger(value)) {
				// 		callback(new Error('请输入数字值'));
				// 	} else {
				// 		if (value < 18) {
				// 			callback(new Error('必须年满18岁'));
				// 		} else {
				// 			callback();
				// 		}
				// 	}
				// }, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					pass: '',
					checkPass: '',
					name: ''
				},
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					name: [{
						validator: checkName,
						trigger: 'blur'
					}]
				},
				dialogFormVisible: false,
				tableData: [{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
					}, {
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}, {
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
					}, {
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}, {
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
					}, {
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄'
					}, {
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
					}
				]
			}
		}
	}
</script>

<style>
	.button {
		padding-left: 20px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.table {
		margin-top: 15px;
	}

	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #f0f9eb;
	}

	.pagination {
		width: 50%;
		margin-top: 10px;
		margin-left: 25%;
	}

	.search {
		width: 250px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
</style>
