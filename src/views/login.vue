<template>
<div class="login-wrap">
  <el-form ref="form"
  :model="form"
  class="login-from"
  label-width="80px"
  label-position="top">
    <h2>用户登录</h2>
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input @keyup.enter.native="handleLogin" type="password" v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleLogin" type="primary" class="login-btn">登 录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      // 发送登录请求
      this.$http.post('login', this.form)
        .then((res) => {
          console.log(res);
          // 我们想要的数据
          const data = res.data;
          if (data.meta.status === 200) {
            // 登陆成功
            // 1. 跳转
            // 2. 提示
            // 3. 保存token
            sessionStorage.setItem('token', data.data.token);
            this.$message.success('登陆成功');
          } else {
            // 登录失败-提示
            this.$message.error('登录失败');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-from {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .login-from .login-btn {
  width: 100%;
}
</style>
