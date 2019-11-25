<template>
  <div class="dashboard-container app-container">
    <section class="app-section">
      <h3 class="content-header">一、快速上手</h3>
      <p class="content-section"> 本章节介绍如何在项目中使用常用组件（基于elementUI + vue进行二次封装的组件） </p>
    </section>
    <section class="app-section">
      <h3 class="content-header">二、引入组件mengui</h3>
      <p class="content-section"> 非业务逻辑组件目前均已经发布npm, 可以直接以安装依赖的方式进行引用即可,
        目前已经有的组件 <span class="example-tips">Table, Dialog, Malert通栏提示, Drawer, Form表单</span> </p>
      <section class="content-example">
        <p class="example-item"> 1、npm install mengui / yarn add mengui </p>
        <p class="example-item"> 2、引用方式 </p>
        <pre class="brush:javascript">
            import mengui from 'mengui'
            Vue.use(mengui)
            new Vue({
              el: '#app',
              render: h => h(App)
            })
            </pre>
      </section>
    </section>
    <section class="app-section">
      <h3 class="content-header">三、其他引入方式</h3>
      <section class="content-example">
        <p class="example-item"> 1、按需引入 </p>
        <pre class="brush:javascript">
            import { Table, Dialog, Malert, Drawer  }  from 'mengui'
            Vue.use(Table)
            Vue.use(Dialog)
            Vue.use(Malert)
            Vue.use(Drawer)
            new Vue({
              el: '#app',
              render: h => h(App)
            })
            </pre>
      </section>
    </section>
    <section class="app-section">
      <h3 class="content-header">四、直接写在项目中的组件</h3>
      <section class="content-example">
        <p class="example-item"> 需要在使用该组件的页面进行引用 </p>
        <p class="example-item"> 1. js类直接调用的组件 </p>
        <pre class="brush:javascript">
            import { message }  from '组件所在js文件路径'
            然后直接使用即可
        </pre>
        <p class="example-item"> 1. vue类直接调用的组件 </p>
        <pre class="brush:javascript">
            import Test  from '组件所在vue文件路径'
            在component周期函数中进行引用，才可以在页面中以标签形式被使用
        </pre>
      </section>
    </section>
    <!--    <h3> 1.替换主题 </h3>-->
    <!--    <el-radio-group v-model="setTheme" class="select-style" @change="onSetTheme">-->
    <!--      <el-radio-button label="style1">style1</el-radio-button>-->
    <!--      <el-radio-button label="style2">style2</el-radio-button>-->
    <!--    </el-radio-group>-->
    <!--    <theme-picker class="theme-dropdown" :current-lists="currentLists" @change="themeChange" />-->
    <!--    <h3> 2.高级搜索组件封装 </h3>-->
    <!--    <MoreSearch @searchLists="onSearchTableLists">-->
    <!--      &lt;!&ndash;   默认搜索栏目   &ndash;&gt;-->
    <!--      <template slot="searchInp">-->
    <!--        <Form-->
    <!--          :ref-obj.sync="formInfo.ref"-->
    <!--          :data="formInfo.data"-->
    <!--          :field-list="formInfo.fieldList"-->
    <!--          :rules="formInfo.rules"-->
    <!--          :label-width="formInfo.labelWidth"-->
    <!--          :list-type-info="listTypeInfo"-->
    <!--          @handleEvent="onSearchLists"-->
    <!--        />-->
    <!--      </template>-->
    <!--    </MoreSearch>-->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { message, notification, confirm, autoCloseMessage } from '@/utils/message-navication'

// 主题
import { themeLists } from '@/utils/common-config'
import ThemePicker from '@/components/ThemePicker'
// 高级搜索
import MoreSearch from '@/components/MoreSearch'
import Form from '@/components/Form'
export default {
  name: 'Dashboard',
  components: { ThemePicker, MoreSearch, Form },
  data() {
    return {
      isShowAlert: false,
      alertMessage: '',
      alertType: '',

      currentLists: themeLists.whiteStyle,
      setTheme: 'style1',
      listTypeInfo: {
        tagTypeList: [],
        statusList: [
          { key: '启用', value: 1 },
          { key: '停用', value: 0 }
        ]
      },
      // 默认表单
      formInfo: {
        ref: null,
        data: {
          search1: '',
          search2: ''
        },
        fieldList: [
          { label: '搜索1', value: 'search1', type: 'select', list: 'tagTypeList', filterable: true, required: true },
          { label: '搜索2', value: 'search2', type: 'input' }
        ],
        rules: {},
        labelWidth: '70px'
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
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
    /**
     * 点击单个form-item事件
     */
    onSearchLists(val) {
      //
      console.log(val)
    },
    /**
     * 搜索表单
     */
    onSearchTableLists(type) {
      console.log(type)
      const { data } = this.formInfo
      console.log(data)
    },
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
.dashboard-container {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  .theme-dropdown{
    vertical-align: middle;
  }
}
</style>
