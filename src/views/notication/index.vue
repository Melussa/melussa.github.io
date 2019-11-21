<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">notification基础用法</h3>
      <el-button type="success" @click="onShowNavicationTips"> 纯文本提示 </el-button>
      <el-button type="default" @click="onShowNavicationTips('hasBtn')"> 纯文本提示（带操作按钮） </el-button>
      <el-button type="warning" @click="onShowNavicationTips('noIcon')"> 纯文本提示（没有图标） </el-button>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <p class="example-header">1、通栏提示代码示例</p>
        <p class="example-item"> import { notification } from '@/utils/message-navication' </p>
        <p class="example-item"> ！！！请注意每个参数的顺序！！！ </p>
        <pre>
        notification(this, '提示标题', '这是一个提示信息', 'warning', true, () => {}, 'icon-class')
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
      tableConfig: [
        { name: '第一个参数', desc: '当前组件this', type: 'Object', value: 'this', defaultValue: '必填' },
        { name: '第二个参数', desc: '提示标题', type: 'String', value: '--', defaultValue: '必填' },
        { name: '第三个参数', desc: '提示内容', type: 'String', value: '--', defaultValue: '必填' },
        { name: '第二个参数', desc: '提示框类型', type: 'String', value: 'warning/info/success/error', defaultValue: '非必填' },
        { name: '第五个参数', desc: '是否有操作按钮', type: 'Boolean', value: 'true/false', defaultValue: '非必填' },
        { name: '第六个参数', desc: '有操作按钮时，操作按钮的回调函数', type: 'Function', value: '()=>{}', defaultValue: '非必填' },
        { name: '第七个参数', desc: '不同提示类型的图标类名', type: 'String', value: '--', defaultValue: '非必填' }
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
    },
    /**
       * 显示文本提示
       */
    onShowNavicationTips(hasBtn) {
      let params = [this, '问题提示的标题问题提示的标题问题提示的标题问题提示的标题', '文本提示的内容', 'success']
      if( hasBtn === 'noIcon' ){
        params.pop(params.length - 1)
      }
      console.log(params);
      if (hasBtn === 'hasBtn') {
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
