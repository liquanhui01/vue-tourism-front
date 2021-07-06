<template>
	<div class="container">
		<div class="button">
			<el-button type="primary" size="small" style="margin-right: 20px;" @click="dialog" @pushData="receiveData">新增</el-button>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" stripe>
				<el-table-column prop="name" label="分类名" width="350">
				</el-table-column>
				<el-table-column prop="date" label="创建时间" width="350">
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
				<el-input v-model="input" placeholder="请输入分类名称"></el-input>
				<el-button type="primary" style="margin-top: 20px; margin-left: 45%;" @click="submit">提交</el-button>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShopAdd",
		components: {
		},
		methods: {
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
			dialog() {
				this.dialogFormVisible = true;
			},
			submit() {
				this.dialogFormVisible = false;
			}
		},
		data() {
			return {
				dialogFormVisible: false,
				tableData: [{
						date: '2016-05-02',
						name: '旅游',
					}, {
						date: '2016-05-04',
						name: '土特产'
					}, {
						date: '2016-05-01',
						name: '住宿',
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
</style>
