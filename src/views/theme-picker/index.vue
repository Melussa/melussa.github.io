<template>
  <div  class="dashboard-container app-container">
    <section class="app-section">
      <h3 class="content-header">ThemePicker基础用法</h3>
      <el-radio-group v-model="setTheme" class="select-style" @change="onSetTheme">
        <el-radio-button label="style1">style1</el-radio-button>
        <el-radio-button label="style2">style2</el-radio-button>
      </el-radio-group>
      <theme-picker class="theme-dropdown" :current-lists="currentLists" @change="themeChange" />
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <pre>
      在script中引入
      import ThemePicker from '@/components/ThemePicker'
      将引入的组件以标签形式使用
      {{example}}
        </pre>
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
    </section>
  </div>
</template>

<script>

  // 主题
  import { themeLists } from '@/utils/common-config'
  import ThemePicker from '@/components/ThemePicker'

  export default {
    name: 'index',
    components: { ThemePicker },
    data() {
      return {
        example: `<theme-picker class="theme-dropdown"
            :current-lists="currentLists" @change="themeChange" />`,
        setTheme: 'style1',
        currentLists: themeLists.whiteStyle,
        theader: ['参数', '说明', '类型', '可选值', '默认值'],
        eventTheader: ['事件名称', '说明', '回调'],
        tableConfig: [
          { name: 'currentLists', desc: '可供选择的主题色列表', type: 'Array',value: '--', defaultValue: '--' }
        ],
        tableEventConfig: [
          { name: 'change', desc: '确定选择的主题色', value: '确定主题色的时候监听' }
        ],
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
       * 切换主题风格
       * @param val
       */
      onSetTheme(val) {
        const { whiteStyle, blackStyle } = themeLists
        if (val === 'style1') { // 风格1
          this.currentLists = whiteStyle
        } else { // 风格2
          this.currentLists = blackStyle
        }
      },
      /**
       * 确认更改主题
       * @param val
       */
      themeChange(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'theme',
          value: val
        })
      },
    }
  }
</script>

<style scoped lang="scss">
.theme-dropdown{
  vertical-align: middle;
}
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
