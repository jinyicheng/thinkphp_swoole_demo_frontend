<template>
    <!-- 登录对话框 -->
    <el-dialog title="扫码登录" class="el-zoom-in-center" :visible.sync="$store.state.el.dialog.login.Wechat.visible" width="300px" :close-on-click-modal="false" :close-on-press-escape="false" append-to-body>
        <el-image :src="this.qrcode"></el-image>
    </el-dialog>
</template>

<script>
import store from '../../../../store'
export default {
  store,
  data () {
    return {
      qrcode: 'https://sso.kongzhong.com/createQRCode'
    }
  },
  methods: {
    handleRefreshQrcode () {

    }
  }
}
</script>
