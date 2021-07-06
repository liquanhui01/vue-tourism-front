<template>
	<div>
		<div class="hello">
			<div>
				<div id="myChart" :style="{width: '94%', height: '250px', marginLeft: '3%', marginTop: '30px'}"></div>
			</div>
			<div>
				<div id="myChart01" :style="{width: '94%', height: '250px', marginTop: '80px', marginLeft: '3%'}"></div>
			</div>
		</div>
	</div>
</template>

<script>
	let echarts = require('echarts');
	export default {
		data() {
			return {

			};
		},
		mounted() {
			this.drawLine();
			this.drawLine01();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById("myChart"));
				// 绘制图表
				myChart.setOption({
					title: {
						text: '柱状表图'
					},
					// color: ["#3398DB"],
					tooltip: {
						trigger: "axis",
						axisPointer: {
							// 坐标轴指示器，坐标轴触发有效
							type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: "3%",
						right: "4%",
						bottom: "3%",
						containLabel: true
					},
					xAxis: [{
						type: "category",
						data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: "value"
					}],
					series: [{
						name: "直接访问",
						type: "bar",
						barWidth: "60%",
						data: [10, 52, 200, 334, 390, 330, 220]
					}]
				})
			},
			drawLine01() {
				let myChart01 = echarts.init(document.getElementById("myChart01"));
				myChart01.setOption({
					title: {
						text: '订单量数据'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '视频广告',
							type: 'line',
							stack: '总量',
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '直接访问',
							type: 'line',
							stack: '总量',
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: '搜索引擎',
							type: 'line',
							stack: '总量',
							data: [820, 932, 901, 934, 1290, 1330, 1320]
						}
					]
				})
			}
		},
	}
</script>

<style scoped>
	.hello {
		width: 100%;
		height: 600px;
	}

	#chart1 {
		width: 300px;
		height: 300px;
	}
</style>
