<template>
	<div class="container">
		<div class="button">
			<div class="search">
				<Date></Date>
				<div>
					<el-input v-model="input" placeholder="请输入订单状态" style="width: 300px; margin-left: 20px;"></el-input>
				</div>
				<div>
					<el-input v-model="input" placeholder="请输入订单号" style="width: 300px; margin-left: 20px;"></el-input>
				</div>
				<el-button icon="el-icon-search" type="success" size="medium" style="margin-left: 10px;"></el-button>
			</div>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column label="日期" width="190">
					<template #default="scope">
						<span style="margin-left: 10px">{{ scope.row.date }}</span>
					</template>
				</el-table-column>
				<el-table-column label="订单号" width="270">
					<template #default="scope">
						{{ scope.row.number }}
					</template>
				</el-table-column>
				<el-table-column label="所购商品" width="270">
					<template #default="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column label="订单状态" width="150">
					<template #default="scope">
						<text v-if="scope.row.status==0" style="color: #67C23A">未支付</text>
						<text v-if="scope.row.status==1" style="color: #409EFF">已支付</text>
						<text v-if="scope.row.status==2" style="color: #F56C6C">未分佣</text>
						<text v-if="scope.row.status==3" style="color: #E6A23C">已分佣</text>
						<text v-if="scope.row.status==4" style="color: #008B8B">退款中</text>
						<text v-if="scope.row.status==5" style="color: #909399">已退款</text>
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
			<el-dialog v-model="dialogFormVisible" >
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="所购商品">
						<text style="color: #909399">{{ form.name }}</text>
					</el-form-item>
					<el-form-item label="订单号">
						<text style="color: #909399">{{ form.number }}</text>
					</el-form-item>
					<el-form-item label="日期">
						<text style="color: #909399">{{ form.date }}</text>
					</el-form-item>
					<el-form-item label="订单状态">
						<text v-if="form.status==0" style="color: #67C23A">未支付</text>
						<text v-if="form.status==1" style="color: #409EFF">已支付</text>
						<text v-if="form.status==2" style="color: #F56C6C">未分佣</text>
						<text v-if="form.status==3" style="color: #E6A23C">已分佣</text>
						<text v-if="form.status==4" style="color: #008B8B">退款中</text>
						<text v-if="form.status==5" style="color: #909399">已退款</text>
					</el-form-item>
					<el-form-item label="市场价格">
						<text style="color: #909399">{{ form.shop_price }} 元</text>
					</el-form-item>
					<el-form-item label="实际价格">
						<text style="color: #909399">{{ form.price }} 元</text>
					</el-form-item>
					<el-form-item label="是否分佣">
						<text style="color: #909399">是</text>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import Date from "@/components/Date.vue";
	import Dialog from "@/components/Dialog.vue"
	import {
		defineComponent,
		ref
	} from 'vue'
	export default defineComponent({
		name: "ShopAdd",
		components: {
			Date,
			Dialog
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
					date: '2016-05-02',
					name: '王屋山景区门票',
					number: 312439043043243,
					price: 431.89,
					shop_price: 510.89,
					status: 2,
				},
				tableData: [{
						date: '2016-05-02',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 0
					}, {
						date: '2016-05-04',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 4
					}, {
						date: '2016-05-01',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 5
					}, {
						date: '2016-05-03',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 1
					},
					{
						date: '2016-05-04',
						number: '34098320483204032',
						name: '王屋山景区门票',
						status: 3
					}, {
						date: '2016-05-01',
						number: '34098320483204340',
						name: '王屋山景区门票',
						status: 2
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
