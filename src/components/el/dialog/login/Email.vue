<template>
    <!-- 登录对话框 -->
    <el-dialog title="会员登录" class="el-zoom-in-center" :visible.sync="$store.state.el.dialog.login.Email.visible" width="30%" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
        <el-dialog-register-email></el-dialog-register-email>
        <el-dialog-login-wechat></el-dialog-login-wechat>

        <el-form ref="form" :model="form" label-width="80px" @submit="handleSubmit">
            <el-form-item label="账号">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">登录</el-button>
                <el-button native-type="reset">取消</el-button>
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
                <el-button type="danger" @click="handleOpenDialogRegister">立即注册</el-button>
                <el-button type="success" @click="$store.state.el.dialog.login.Wechat.visible=true">扫码登录</el-button>
            </span>

    </el-dialog>
</template>

<script>
import elDialogRegisterEmail from '../register/Email.vue'
import elDialogLoginWechat from '../login/Wechat.vue'
import store from '../../../../store'
export default {
  store,
  components: {
    'el-dialog-register-email': elDialogRegisterEmail,
    'el-dialog-login-wechat': elDialogLoginWechat
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        captcha: ''
      }
    }
  },
  methods: {
    handleOpenDialogRegister () {
      store.state.el.dialog.register.Email.visible = true
    },
    handleSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
