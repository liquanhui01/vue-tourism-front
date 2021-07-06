<template>
	<div class="container">
		<div class="button">
			<div class="search">
				<el-button type="primary" size="small" style="margin-right: 20px;" @click="dialog()"
					@pushData="receiveData">新增</el-button>
				<Date></Date>
				<div>
					<el-input v-model="input" placeholder="请输入名称" style="width: 300px; margin-left: 20px;"></el-input>
				</div>
				<div>
					<el-input v-model="input" placeholder="请输入商品状态" style="width: 300px; margin-left: 20px;"></el-input>
				</div>
				<el-button icon="el-icon-search" type="success" size="medium" style="margin-left: 10px;"></el-button>
			</div>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column label="日期" width="250">
					<template #default="scope">
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="商品名称" width="400">
					<template #default="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column label="订单状态" width="150">
					<template #default="scope">
						<text v-if="scope.row.status==0" style="color: #67C23A">上线</text>
						<text v-if="scope.row.status==1" style="color: #409EFF">下线</text>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template #default="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="pagination">
			<div class="block">
				<el-pagination layout="prev, pager, next" background :total="100" hide-on-single-page="true">
				</el-pagination>
			</div>
		</div>
		<div class="dialog">
			<el-dialog v-model="dialogFormVisible">
				<el-scrollbar height="500px">
				  <!-- <p class="item" v-for="item in 20">{{ item }}</p> -->
				  <el-form ref="form" :model="form" label-width="80px">
				  	<el-form-item label="商品名称" required>
				  		<el-input v-model="form.name" placeholder="请输入公司全称"></el-input>
				  	</el-form-item>
				  	<el-form-item label="商品时限" required>
				  		<Date></Date>
				  	</el-form-item>
				  	<el-form-item label="商品状态" required>
				  		<el-switch v-model="form.delivery" active-text="上线" inactive-text="下线"></el-switch>
				  	</el-form-item>
				  	<el-form-item label="市场价格" required>
				  		<el-input v-model="form.price" placeholder="请输入市场价格"></el-input>
				  	</el-form-item>
				  	<el-form-item label="实际价格" required>
				  		<el-input v-model="form.shop_price" placeholder="请输入实际价格"></el-input>
				  	</el-form-item>
				  	<el-form-item label="是否分销" required>
				  		<el-switch v-model="form.is_distribution"></el-switch>
				  	</el-form-item>
				  	<el-form-item label="分销比例">
				  		<el-input v-model="form.rate" placeholder="请输入分销比例, 比例为%,例如:50%,输入为50"></el-input>
				  	</el-form-item>
				  	<el-form-item label="商品简介" required>
				  		<el-input type="textarea" v-model="form.desc" placeholder="请输入商品简介,字数控制在40个以内"></el-input>
				  	</el-form-item>
				  </el-form>
				</el-scrollbar>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import Date from "@/components/Date.vue";
	import {
		defineComponent,
		ref
	} from 'vue'
	export default defineComponent({
		name: "ShopAdd",
		components: {
			Date,
			// Dialog
		},
		setup() {
			return {
				input: ref('')
			}
		},
		methods: {
			handleEdit(index, row) {
				this.dialogFormVisible = true;
				console.log(index, row.number);
			},
			handleDelete(index, row) {
				console.log(index, row.number);
				this.$confirm('是否删除该订单记录', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			dialog() {
				this.dialogFormVisible = true;
			},
			onSubmit() {
				console.log('submit!');
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
			}
		},
		data() {
			return {
				dialogFormVisible: false,
				// input: ref(''),
				form: {
					date: '',
					name: '',
					price: "",
					shop_price: "",
					status: 2,
					is_distribution: "",
					rate: "",
					desc: ""
				},
				tableData: [{
						date: '2016-05-02',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 1
					}, {
						date: '2016-05-04',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 0
					}, {
						date: '2016-05-01',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 1
					}, {
						date: '2016-05-03',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 0
					},
					{
						date: '2016-05-04',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 1
					}, {
						date: '2016-05-01',
						number: '34098320483204340',
						name: '王屋山景区门票',
						status: 0
					}, {
						date: '2016-05-03',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 0
					},
					{
						date: '2016-05-04',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 0
					}, {
						date: '2016-05-01',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 0
					}
				]
			}
		}
	})
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
		margin-top: 15px;
		margin-left: 25%;
	}

	.search {
		width: 1000px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
</style>
