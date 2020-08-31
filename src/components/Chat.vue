<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:100%">
                    <p v-for="(item, index) in items" :key="index">{{ item.message }}</p>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-form v-if="show" id="chat_form" @submit="onSubmit" @reset="onReset">
                    <b-form-textarea name="message" class="col-sm-12" placeholder="请输入消息" rows="3" max-rows="6" v-model="form.message"></b-form-textarea>
                    <div>
                        <b-button variant="outline-primary" type="submit">发送消息</b-button>
                        <b-button variant="outline-secondary" type="reset">重置消息</b-button>
                        <b-button variant="outline-success" type="button" @click="onJoinRoom">加入房间</b-button>
                        <b-button variant="outline-danger" type="button" @click="onLeaveRoom">退出房间</b-button>
                    </div>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
  data: function () {
    return {
      items: [],
      form: {
        message: ''
      },
      show: true
    }
  },
  methods: {
    onLeaveRoom (evt) {
      this.$socket.emit('leave', { room: ['roomtest'] })
    },
    onJoinRoom (evt) {
      this.$socket.emit('join', { room: 'roomtest' })
    },
    onSubmit (evt) {
      this.$socket.emit('test', { asd: this.form.message })
      this.form.message = ''
      evt.preventDefault()

      // socket.on('testcallback', function (res) {
      //   console.log('输出start')
      //   console.log(res)
      //   console.log('输出end')
      // })
      // alert(JSON.stringify(this.form.message))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.message = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  sockets: {
    // 这里是监听connect事件
    connect: function () {
      // // 获取每台客服端生成的id
      // this.websocketid = this.$socket.id
      console.log('链接服务器')
    },
    // 监听断开连接，函数
    disconnect () {
      console.log('断开服务器连接')
    },
    // 服务端指定有msg监听的客服端，可接对应发来的收消息，data服务端传的消息
    testcallback (data) {
      this.items.push({ message: data.getdata })
    }
  }
}
</script>
