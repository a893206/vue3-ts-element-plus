<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="120px"
    class="login-form sign-in-form"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="loginUser.email" placeholder="Enter Email..." />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="Enter Password..."
      />
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
      >
        提交
      </el-button>
    </el-form-item>

    <!--  找回密码  -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { getCurrentInstance } from "vue";

export default {
  name: "LoginForm",
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:loginUser"],
  setup() {
    // @ts-ignore
    const { ctx } = getCurrentInstance();

    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    return { handleLogin };
  },
};
</script>

<style scoped>
/* form */
.login-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p a {
  color: #409eff;
}
</style>
