<template>
    <!-- 注册对话框 -->
    <el-dialog width="50%" title="会员注册" :visible.sync="$store.state.el.dialog.register.Email.visible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" append-to-body>
        <el-row>
            <el-col :span="12">
                <el-carousel-register></el-carousel-register>
            </el-col>
            <el-col :span="12">
                <el-form ref="elDialogRegisterEmailForm" :model="elDialogRegisterEmailForm" :rules="rules" label-width="80px">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model="elDialogRegisterEmailForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="elDialogRegisterEmailForm.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="captcha">
                        <el-input v-model="elDialogRegisterEmailForm.captcha"></el-input>
                    </el-form-item>
                    <el-form-item label>
                        <el-image :src="captcha" class="captcha">
                            <div slot="placeholder" class="image-slot">
                                加载中
                                <span class="dot">...</span>
                            </div>
                        </el-image>
                        <br />
                        <el-link type="primary" :underline="false" @click="refreshCaptcha">看不清，换一张</el-link>
                    </el-form-item>
                    <el-form-item label prop="checked">
                        <el-checkbox v-model="elDialogRegisterEmailForm.checked">我同意</el-checkbox>
                        <el-link type="primary" :underline="false">《用户须知》</el-link>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleSubmit('elDialogRegisterEmailForm')">注册</el-button>
                        <el-button native-type="reset">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="handleOpenDialogLogin">已注册，现在登录<i class="el-icon-d-arrow-right"></i></el-button>
        </span>
    </el-dialog>
</template>

<script>
import elCarouselRegister from '../../carousel/Register.vue'
import store from '../../../../store'
export default {
  store,
  components: {
    'el-carousel-register': elCarouselRegister
  },
  data () {
    return {
      captcha: '',
      elDialogRegisterEmailForm: {
        username: '',
        password: '',
        checked: '',
        captcha: ''
      },
      rules: {
        username: [{required: true, type: 'date', message: '账号不能为空', trigger: 'change'}]
      }
    }
  },
  created () {
    this.refreshCaptcha()
  },
  methods: {
    handleOpenDialogLogin () {
      store.state.el.dialog.register.Email.visible = false
      store.state.el.dialog.login.Email.visible = true
    },
    refreshCaptcha () {
      this.captcha =
                'http://gb.dragonseagroup.com/Public/verify/for/Public%2CsignIn.html?rand=' +
                Date.parse(new Date())
    },
    handleSubmit () {
      this.$refs.elDialogRegisterEmailForm.validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log('pass')
        } else {
          console.log('unpass')
          return false
        }
      })
      console.log('submit!')
    }
  }
}
</script>

<style>
.captcha {
    width: 236px;
    height: 62px;
}
</style>
