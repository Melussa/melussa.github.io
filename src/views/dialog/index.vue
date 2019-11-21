<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">Dialog基础用法</h3>
      <el-button type="primary" @click="onShowDialog">显示dialog(完整功能)</el-button>
      <el-button type="warning" @click="onShowDialog('large')">显示dialog(large)</el-button>
      <el-button type="danger" @click="onShowDialog('small')">显示dialog(small)</el-button>
      <el-button type="success" @click="onShowDialog('mini')">显示dialog(mini)</el-button>
      <el-button @click="onShowDialog('', 'noPage')">显示dialog(不显示翻页)</el-button>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <p class="example-item">该组件封装在mengui中，不需要在页面中导入</p>
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
    <section class="app-section">
      <h3 class="content-header">Slot</h3>
      <table class="table">
        <tr class="table-column">
          <th class="table-cell slot">name</th>
          <th class="table-cell slot">说明</th>
        </tr>
        <tr>
          <td class="table-cell">dialogSlot</td>
          <td class="table-cell">自定义内容，需要Dialog 中列出 slot[name='dialogSlot']</td>
        </tr>
      </table>
    </section>
    <Dialog
      :myy-dialog="this"
      :is-show-dialog="isShowDialog"
      :title="title"
      :dialog-size="dialogSize"
      :is-show-pagination="isShowPage"
      @onCloseDialog="onCloseDialog"
      @dialogHandleEvent="dialogHandleEvent"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    >
      <template slot="dialogSlot">
        <div>插入插槽</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      example: `<Dialog
  :myy-dialog="this"
  :is-show-dialog="isShowDialog"
  :title="title"
  :dialog-size="dialogSize"
  :is-show-pagination="isShowPage"
  @onCloseDialog="onCloseDialog"
  @dialogHandleEvent="dialogHandleEvent"
  @handleSizeChange="handleSizeChange"
  @handleCurrentChange="handleCurrentChange"
>
  <template slot="dialogSlot">
    <div>插入插槽</div>
  </template>
</Dialog>
        `,
      isShowDialog: false,
      dialogSize: 'mini',
      isShowPage: true,
      title: '测试dialog标题',
      theader: ['参数', '说明', '类型', '可选值', '默认值'],
      eventTheader: ['事件名称', '说明', '回调'],
      tableConfig: [
        { name: 'myy-dialog(必传)', desc: '当前组件所在的this', type: 'Object', value: 'this', defaultValue: '--' },
        { name: 'is-show-dialog(必传)', desc: '是否显示dialog', type: 'Boolean', value: 'false/true', defaultValue: 'false' },
        { name: 'title(必传)', desc: '当前dialog的标题', type: 'String', value: '--', defaultValue: '--' },
        { name: 'dialog-size(默认mini，非必填)', desc: '当前dialog的大小', type: 'String', value: 'mini/small/large', defaultValue: 'mini' },
        { name: 'is-show-pagination(默认false，非必填)', desc: '当前dialog是否有翻页', type: 'Boolean', value: 'false/true', defaultValue: 'false' }
      ],
      tableEventConfig: [
        { name: 'onCloseDialog', desc: '关闭dialog时会触发', value: '是否显示当前dialog is-show-dialog' },
        { name: 'dialogHandleEvent', desc: '点击dialog确认会触发', value: '是否显示当前dialog is-show-dialog，确认之后需要执行的代码' },
        { name: 'handleSizeChange', desc: '翻页，is-show-pagination为true时，需要传递', value: '点击箭头进行翻页' },
        { name: 'handleCurrentChange', desc: '翻页，is-show-pagination为true时，需要传递', value: '直接选择当前页码' }
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
       * 显示弹窗
       */
    onShowDialog(size, isShowPage) {
      this.isShowDialog = true
      this.isShowPage = !isShowPage
      if (typeof size !== 'string') {
        return
      }
      this.dialogSize = size || 'mini'
    },
    /**
       * 关闭弹窗
       * @param close 子组件反馈参数
       */
    onCloseDialog(close) {
      this.isShowDialog = close
    },
    /**
       * dialog底部操作按钮
       * @param param 当前操作按钮config
       */
    dialogHandleEvent(param) {
      console.log(param)
    },

    /**
       * 改变每页显示条数
       * @param val
       */
    handleSizeChange(val) {
      console.log(`每页显示条数：${val}`)
    },
    /**
       * 翻页（用箭头翻页  或者  直接选择页码）
       * @param val
       */
    handleCurrentChange(val) {
      console.log(`当前页：${val}`)
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
