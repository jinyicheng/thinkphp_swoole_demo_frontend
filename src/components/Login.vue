<template>
    <div>
        <el-dialog-login-email></el-dialog-login-email>
    </div>
</template>

<script>
import elDialogLoginEmail from './el/dialog/login/Email.vue'
import store from '../store'
export default {
  components: {
    'el-dialog-login-email': elDialogLoginEmail
  },
  mounted () {
    store.state.el.dialog.login.Email.visible = true
  }
}
</script>
