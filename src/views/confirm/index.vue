<template>
  <div class="dashboard-container app-container">
    <section class="app-section">
      <h3 class="content-header">Confirm提示确认框</h3>
      <el-button type="primary" @click="showConfirmEvent('info')">显示提示框(info)</el-button>
      <el-button type="warning" @click="showConfirmEvent('warning')">显示提示框(warning)</el-button>
      <el-button type="danger" @click="showConfirmEvent('error')">显示提示框(error)</el-button>
      <el-button type="success" @click="showConfirmEvent('success')">显示提示框(success)</el-button>
      <el-button type="primary" @click="showConfirmEvent('noCancel')">没有取消按钮</el-button>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <p class="example-header">1、通栏提示代码示例</p>
        <p class="example-item"> import { confirm } from '@/utils/message-navication' </p>
        <p class="example-item"> ！！！请注意每个参数的顺序！！！ </p>
        <pre>
        confirm(this, '提示标题', '这是一个提示信息', 'warning', true, () => {}, 'icon-class')
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
import { mapGetters } from 'vuex'
import { confirm } from '@/utils/message-navication'

export default {
  name: 'Dashboard',
  components: { },
  data() {
    return {
      theader: ['参数位置', '说明', '类型', '可选值', '是否必填'],
      tableConfig: [
        { name: '第一个参数', desc: '当前组件this', type: 'Object', value: 'this', defaultValue: '必填' },
        { name: '第二个参数', desc: '提示标题', type: 'String', value: '--', defaultValue: '必填' },
        { name: '第三个参数', desc: '提示内容', type: 'String', value: '--', defaultValue: '必填' },
        { name: '第二个参数', desc: '点击确定之后的回调', type: 'Function', value: '() => {}', defaultValue: '必填' },
        { name: '第五个参数', desc: '是否为二次确认框', type: 'Boolean', value: 'true/false', defaultValue: '非必填' },
        { name: '第六个参数(默认值为success)', desc: '确认框类型', type: 'String', value: 'success/info/warning/error', defaultValue: '非必填' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    /**
       * 显示提示确认框
       */
    showConfirmEvent(type) {
      let currentType = type
      if (type === 'noCancel') {
        currentType = 'success'
      }
      confirm(this, '提示信息的标题', '提示信息的主要内容', (val) => {
        console.log(val)
      }, type === 'noCancel', currentType)
    }
  }
}
</script>

<style lang="scss" scoped>
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
