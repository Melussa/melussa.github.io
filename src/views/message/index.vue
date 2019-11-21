<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">Message基础用法</h3>
      <el-button type="success" @click="onShowWarningTips('success')"> 带状态的警告类提示(成功)</el-button>
      <el-button type="warning" @click="onShowWarningTips('warning')"> 带状态的警告类提示(警告)（可附带链接） </el-button>
      <el-button type="primary" @click="onShowWarningTips('info')"> 带状态的警告类提示(普通)（附带链接） </el-button>
      <el-button type="danger" @click="onShowWarningTips('error')"> 带状态的警告类提示(错误)</el-button>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <p class="example-header">1、通栏提示代码示例</p>
        <p class="example-item"> import { message } from '@/utils/message-navication' </p>
        <p class="example-item"> ！！！请注意每个参数的顺序！！！ </p>
        <pre>
        message(this, 'warning', '这是一个提示', {
           description: '链接',
           url: '/example'
        }， true, 'iconClass', true)
        </pre>
      </section>
    </section>
    <section class="app-section">
      <h3 class="content-header">Attributes</h3>
      <table class="table">
        <tr class="table-column">
          <th v-for="(item, index) in theader" :key="index" class="table-cell">{{ item }}</th> </tr>
        <tr v-for="(item, ind) in tableConfig" :key="ind">
          <td class="table-cell">{{ item.name }}</td>
          <td class="table-cell">{{ item.desc }}</td>
          <td class="table-cell">{{ item.type }}</td>
          <td class="table-cell">{{ item.value }}</td>
          <td class="table-cell">{{ item.defaultValue }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import { message, notification, autoCloseMessage } from '@/utils/message-navication'

export default {
  name: 'Index',
  components: {},
  data() {
    return {
      isShowAlert: false,
      alertMessage: '',
      alertType: '',
      theader: ['参数位置', '说明', '类型', '可选值', '是否必填'],
      eventTheader: ['事件名称', '说明', '回调'],
      tableConfig: [
        { name: '第一个参数', desc: '当前组件this', type: 'Object', value: 'this', defaultValue: '必填' },
        { name: '第二个参数', desc: '提示框类型', type: 'String', value: 'warning/info/success/error', defaultValue: '必填' },
        { name: '第三个参数', desc: '提示信息', type: 'message', value: '--', defaultValue: '非必填' },
        { name: '第四个参数', desc: '带有链接的提示', type: 'JSON', value: '{ url: "", description: "" }', defaultValue: '非必填' },
        { name: '第五个参数', desc: '文字是否居中显示', type: 'Boolean', value: 'true/false', defaultValue: '非必填,默认left' },
        { name: '第六个参数', desc: '第三个参数存在时，如果需要修改icon，则可以传递自定义字体图标的类名', type: 'String', value: '--', defaultValue: '非必填' }
      ]
    }
  },
  computed: {},
  watch: {
    deep: true
  },
  created() {
  },
  mounted() {
  },
  methods: {
    /**
       * 显示message提示框
       */
    onShowWarningTips(type) {
      const params = [this, type, `这是一个${type}提示`]
      let messageParam = params
      if (type === 'info' || type === 'warning') {
        messageParam = [...params, {
          description: '文字文字',
          url: '/example'
        }]
      }
      message(...messageParam)
    },

    /**
       * 显示文本提示
       */
    onShowNavicationTips(hasBtn) {
      const params = [this, '问题提示的标题问题提示的标题问题提示的标题问题提示的标题', '文本提示的内容', 'success']
      if (typeof hasBtn !== 'string') {
        notification(...params)
      } else {
        notification(...params, true, () => {
          console.log('button的点击事件')
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .table{
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    .table-cell{
      width: 20%;
      height: 50px;
      text-align: center;
      border-bottom: 1px solid #eaeefb;
      &.event{
        width: 33.33%;
      }
      &.slot{
        width: 50%;
      }
    }
    .table-column{
      height: 50px;
    }
  }
</style>
