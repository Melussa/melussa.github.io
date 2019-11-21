<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">Malert基础用法</h3>
      <el-button type="success" @click="onShowHeaderTips('success')"> 通栏提示（成功） </el-button>
      <el-button type="danger" @click="onShowHeaderTips('error')"> 通栏提示（失败） </el-button>
      <el-button type="warning" @click="onShowHeaderTips('warning')"> 通栏提示（警告） </el-button>
      <el-button type="primary" @click="onShowHeaderTips('info')"> 通栏提示（普通） </el-button>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <p class="example-item">该组件封装在mengui中，不需要在页面中导入</p>
      <section class="content-example">
        <pre>{{ example }}</pre>
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
    <section class="app-section">
      <h3 class="content-header">Events</h3>
      <table class="table">
        <tr class="table-column">
          <th v-for="(item, index) in eventTheader" :key="index" class="table-cell event">{{ item }}</th>
        </tr>
        <tr v-for="(item, ind) in tableEventConfig" :key="ind">
          <td class="table-cell">{{ item.name }}</td>
          <td class="table-cell">{{ item.desc }}</td>
          <td class="table-cell">{{ item.value }}</td>
        </tr>
      </table>
    </section>
    <Malert
      :title="alertMessage"
      :type="alertType"
      :is-show-icon="true"
      :is-auto-close="true"
      :is-show="isShowAlert"
      @closeAlert="closeAlert"
    />
  </div>
</template>

<script>
import { message, notification, autoCloseMessage } from '@/utils/message-navication'

export default {
  name: 'Index',
  components: {},
  data() {
    return {
      example: `<Malert
  :title="alertMessage"
  :type="alertType"
  :is-show-icon="true"
  :is-auto-close="true"
  :is-show="isShowAlert"
  @closeAlert="closeAlert"
/>
        `,
      isShowAlert: false,
      alertMessage: '',
      alertType: '',
      theader: ['参数', '说明', '类型', '可选值', '默认值'],
      eventTheader: ['事件名称', '说明', '回调'],
      tableConfig: [
        { name: 'isShow(必传)', desc: '是否显示', type: 'Boolean', value: 'false/true', defaultValue: 'false' },
        { name: 'title(必传)', desc: '当前提示内容', type: 'String', value: '--', defaultValue: '--' },
        { name: 'type(非必传)', desc: '当前提示框类型', type: 'String', value: 'info/success/warning/error', defaultValue: 'success' },
        { name: 'isShowIcon(非必传)', desc: '是否显示图标', type: 'Boolean', value: 'false/true', defaultValue: 'false' },
        { name: 'isAutoClose(非必传)', desc: '是否自动消失', type: 'Boolean', value: 'false/true', defaultValue: 'true' }
      ],
      tableEventConfig: [
        { name: 'closeAlert', desc: '点击关闭按钮会触发', value: '是否显示提示框 isShow' }
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
       * 显示通栏提示
       */
    onShowHeaderTips(type) {
      if (this.isShowAlert) {
        return
      }
      this.isShowAlert = true
      this.alertMessage = `这是${type}，通栏提示`
      this.alertType = type
    },
    /**
       * 关闭通栏提示框
       * @param val
       */
    closeAlert(val) {
      this.isShowAlert = val
    },

    /**
       * 显示message提示框
       */
    onShowWarningTips() {
      const type = ['warning', 'info', 'success', 'error']
      const currentType = type[Math.floor(Math.random() * type.length)]
      const params = [this, currentType, `这是一个${currentType}提示`]
      let messageParam = params
      if (currentType === 'info' || currentType === 'warning') {
        messageParam = [...params, {
          description: '文字文字',
          url: '/example'
        }]
      }
      message(...messageParam)
    },

    /**
       * 全局自动消失的tips
       */
    onShowAutoCLoseTips() {
      autoCloseMessage(this, 'success', '这是一个顶部的自动消失')
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
