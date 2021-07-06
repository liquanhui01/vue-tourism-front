<template>
	<div class="container">
		<div class="button">
			<el-button type="primary" size="small" style="margin-right: 20px;" @click="dialog"
				@pushData="receiveData">新增</el-button>
			<div class="search">
			</div>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" stripe>
				<el-table-column prop="date" label="创建时间" width="350">
				</el-table-column>
				<el-table-column prop="name" label="权限分组" width="350">
				</el-table-column>
				<el-table-column prop="address" label="操作">
					<el-button type="warning" size="small" plain @click="dialog">编辑</el-button>
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
				<el-form status-icon label-width="100px">
					<el-checkbox-group v-model="checkList">
						<el-checkbox label="复选框 A"></el-checkbox>
						<el-checkbox label="复选框 B"></el-checkbox>
						<el-checkbox label="复选框 C"></el-checkbox>
						<el-checkbox label="复选框 A"></el-checkbox>
						<el-checkbox label="复选框 B"></el-checkbox>
						<el-checkbox label="复选框 C"></el-checkbox>
						<el-checkbox label="复选框 A"></el-checkbox>
						<el-checkbox label="复选框 B"></el-checkbox>
						<el-checkbox label="复选框 C"></el-checkbox>
						<el-checkbox label="复选框 A"></el-checkbox>
						<el-checkbox label="复选框 B"></el-checkbox>
						<el-checkbox label="复选框 C"></el-checkbox>
						<el-checkbox label="复选框 A"></el-checkbox>
						<el-checkbox label="复选框 B"></el-checkbox>
						<el-checkbox label="复选框 C"></el-checkbox>
					</el-checkbox-group>
				</el-form>
				<el-button type="primary" size="small" @click="dialog" style="margin-top: 30px; margin-left: 45%;">提交</el-button>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShopAdd",
		components: {},
		methods: {
			dialog() {
				this.dialogFormVisible = true;
			},
			// tableRowClassName({
			// 	row,
			// 	rowIndex
			// }) {
			// 	if (rowIndex === 1) {
			// 		return 'warning-row';
			// 	} else if (rowIndex === 3) {
			// 		return 'success-row';
			// 	}
			// 	return '';
			// },
			submitForm(formName) {
				// this.$refs[formName].validate((valid) => {
				// 	if (valid) {
				// 		alert('submit!');
				// 	} else {
				// 		console.log('error submit!!');
				// 		return false;
				// 	}
				// });
				this.dialogFormVisible = false;
			},
			resetForm(formName) {
				// this.$refs[formName].resetFields();
			}
		},
		data() {
			return {
				checkList: ['选中且禁用','复选框 A'],
				dialogFormVisible: false,
				tableData: [{
					date: '2016-05-02',
					name: '普通商户',
				}, {
					date: '2016-05-04',
					name: '管理人员',
				}]
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
