<template>
	<div class="login-container">
		<div class="login">
			<div class="login-form">
				<text class="login-title">管理系统</text>
				<div style="margin-top: 35px;">
					<el-form status-icon style="margin: auto;" :rules="rules" ref="ruleForm" label-width="100px"
						class="demo-ruleForm">
						<el-form-item>
							<el-input type="text" placeholder="请输入用户名" v-model="ruleForm.name">
								<template #prefix>
									<i class="el-icon-user"></i>
								</template>
							</el-input>
						</el-form-item>
						<el-form-item prop="pass">
							<!-- <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input> -->
							<el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass">
								<template #prefix>
									<i class="el-icon-lock"></i>
								</template>
							</el-input>
						</el-form-item>
					</el-form>
				</div>
				<div class="login-button">
					<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</div>
			</div>
		</div>
		<div style="width: 30%; margin-left: 39%; margin-top: 20px;">
			<text class="login-footer">Copyright@2021 河南省赛昂网络科技有限公司</text>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			var checkName = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('年龄不能为空'));
				}
				setTimeout(() => {
					if (!Number.isInteger(value)) {
						callback(new Error('请输入数字值'));
					} else {
						if (value < 18) {
							callback(new Error('必须年满18岁'));
						} else {
							callback();
						}
					}
				}, 1000);
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
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$router.push({path:'/home/dash',query:{id:123456}});
				return true;
				// this.$refs[formName].validate((valid) => {
				// 	if (valid) {
				// 		alert('submit!');
				// 		this.$router.push({path:'/home',query:{id:123456}});
				// 	} else {
				// 		console.log('error submit!!');
				// 		return false;
				// 	}
				// });
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.login {
		position: relative;
		width: 320px;
		height: 350px;
		margin-left: 38%;
		margin-top: 14%;
		background-color: #fafafa;
	}
	
	.login-form {
		position: absolute;
		width: 330px;
		right: 45px;
		top: 60px;
	}
	
	.login-title {
		width: 310px;
		font-size: 21px;
		font-weight: 500;
		text-align: center;
		margin-left: 168px;
		margin-bottom: 30px;
	}

	.login-button {
		width: 215px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-left: 106px;
		margin-top: 30px;
	}

	.login-footer {
		width: 100%;
		color: #dcdee2;
		font-size: 14px;
		text-align: center;
	}
</style>
