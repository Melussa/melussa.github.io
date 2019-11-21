<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">autoCloseMessage基础用法</h3>
      <el-button type="success" @click="onShowAutoCLoseTips('success')"> 全局顶部自消失提示（成功） </el-button>
      <el-button type="danger" @click="onShowAutoCLoseTips('error')"> 全局顶部自消失提示（错误） </el-button>
      <el-button type="primary" @click="onShowAutoCLoseTips('info')"> 全局顶部自消失提示（普通） </el-button>
      <el-button type="warning" @click="onShowAutoCLoseTips('warning')"> 全局顶部自消失提示（警告） </el-button>
      <el-button type="success" @click="onShowAutoCLoseTips"> 全局顶部自消失提示(没有图标) </el-button>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <p class="example-header">1、通栏提示代码示例</p>
        <p class="example-item"> import { autoCloseMessage } from '@/utils/message-navication' </p>
        <p class="example-item"> ！！！请注意每个参数的顺序！！！ </p>
        <pre>
        message(this, 'warning', '这是一个提示')
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
        { name: '第三个参数', desc: '提示信息', type: 'String', value: '--', defaultValue: '必填' }
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
       * 全局自动消失的tips
       */
    onShowAutoCLoseTips(type) {
      autoCloseMessage(this, type, '这是一个顶部的自动消失')
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
