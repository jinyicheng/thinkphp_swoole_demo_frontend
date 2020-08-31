<template>
    <div>
        <el-form>
            <el-input placeholder="请输入需要查询的内容" v-model="search_content" class="input" @keyup.native="onSearch">
                <el-button slot="append" icon="el-icon-refresh" native-type="button" @reset="onReset">搜索</el-button>
            </el-input>
            <p>{{ search_content }}</p>
        </el-form>
        <el-table :data="list" stripe style="width: 100%">
            <el-table-column prop="cover" label="封面"></el-table-column>
            <el-table-column prop="title" label="名称"></el-table-column>
            <el-table-column prop="link" label="链接"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      search_content: '',
      list: [{
        title: 'Foo',
        cover: 'http://www.baidu.com/logo.svg',
        link: 'http://www.qq.com'
      }]
    }
  },
  methods: {
    onSearch: function () {
      axios
        .get('api/getData.php', {
          // 还可以直接把参数拼接在url后边
          params: {
            title: this.search_content
          }
        })
        .then(function (res) {
          // this.goodsList = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    onReset: function () {
      this.search_content = ''
    }
  }
}
</script>

<style>
.el-select .el-input {
    width: 130px;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
</style>
