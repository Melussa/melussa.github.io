<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">Drawer基础用法</h3>
      <el-button type="primary" @click="onShowDrawerEvent">显示抽屉(完整功能)</el-button>
      <el-button type="success" @click="onShowDrawerEvent('noFooter')">显示抽屉(无底部确认按钮)</el-button>
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
          <td class="table-cell">drawer</td>
          <td class="table-cell">自定义内容，需要Drawer  中列出 slot[name='drawer']</td>
        </tr>
      </table>
    </section>
    <Drawer
      :title="drawerConfig.title"
      :is-visible="drawerConfig.isVisible"
      :is-show-footer="drawerConfig.isShowFooter"
      @close="onCloseDrawer"
      @confirm="onConfirmDrawerEvent"
    >
      <template slot="drawer">
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
        <div>插槽</div>
      </template>
    </Drawer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      example: `<Drawer
  :title="drawerConfig.title"
  :is-visible="drawerConfig.isVisible"
  :is-show-footer="drawerConfig.isShowFooter"
  @close="onCloseDrawer"
  @confirm="onConfirmDrawerEvent"
>
  <template slot="drawer">插槽</template>
</Drawer>`,
      drawerConfig: {
        title: '这是抽屉的标题',
        isVisible: false,
        isShowFooter: true
      },
      theader: ['参数', '说明', '类型', '可选值', '默认值'],
      eventTheader: ['事件名称', '说明', '回调'],
      tableConfig: [
        { name: 'title(必传)', desc: '当前Drawer的标题', type: 'String', value: '--', defaultValue: '--' },
        { name: 'is-visible(必传)', desc: '是否显示', type: 'Boolean', value: 'true/false', defaultValue: 'false' },
        { name: 'is-show-footer(非必填，默认false)', desc: '是否显示抽屉', type: 'Boolean', value: 'true/false', defaultValue: 'false' },
        { name: 'wrapper-closable(非必填，默认true)', desc: '点击遮罩层是否可以关闭抽屉', type: 'Boolean', value: 'true/false', defaultValue: 'true' }
      ],
      tableEventConfig: [
        { name: 'close', desc: '关闭抽屉', value: '是否显示当前drawer is-visible' },
        { name: 'confirm', desc: '点击确认', value: '确认之后需要执行的代码' }
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
       * 显示抽屉
       */
    onShowDrawerEvent(type) {
      console.log(type)
      if (typeof type === 'string') {
        this.drawerConfig.isShowFooter = false
      } else {
        this.drawerConfig.isShowFooter = true
      }
      this.drawerConfig.isVisible = true
    },
    /**
       * 关闭抽屉
       */
    onCloseDrawer() {
      const { drawerConfig } = this
      drawerConfig.isVisible = false
    },
    /**
       * 确认抽屉的内容
       */
    onConfirmDrawerEvent() {

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
