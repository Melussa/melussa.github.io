<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">Table基础用法</h3>
      <h3 class="content-header">表头按钮，search部分，行操作按钮，以及翻页均可配置</h3>
      <Table
        :table-config="tableConfig"
        :column-config="columnConfig"
        :header-option="headerOption"
        :get-list-params="getListParams"
        :cell-option="cellOption"
        :table-date="list"
        :table="this"
      >
        <el-row  :gutter="10" slot="search">
          <el-col :span="4">
            <el-input placeholder="搜索"  prefix-icon="el-icon-search"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input placeholder="搜索"  prefix-icon="el-icon-search"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input placeholder="搜索"  prefix-icon="el-icon-search"></el-input>
          </el-col>
        </el-row>
      </Table>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <pre>
import { Table }  from '@components/Table'
在周期函数components中进行引用
          {{ example }}
        </pre>
      </section>
    </section>
    <section class="app-section">
      <h3 class="content-header">Attributes</h3>
      <table class="table">
        <tr class="table-column">
          <th v-for="(item, index) in theader" :key="index" class="table-cell">{{ item }}</th> </tr>
        <tr v-for="(item, ind) in tableParams" :key="ind">
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
          <td class="table-cell">search</td>
          <td class="table-cell">自定义搜索内容，需要在Table中列出 slot[name='dialogSlot']</td>
        </tr>
        <tr>
          <td class="table-cell">col-[slot]</td>
          <td class="table-cell">自定义列，在参数columnConfig的指定项中，加入slot参数,并且加入type = 'slot'</td>
        </tr>
        <tr>
          <td class="table-cell">bt-[slot]</td>
          <td class="table-cell">自定义行操作按钮，cellOption，加入slot参数即可</td>
        </tr>
      </table>
    </section>
  </div>

</template>

<script>
import { getList } from '@/api/table'
import Table from '@components/Table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  components: {
    Table
  },
  data() {
    return {
      example: `
<Table
  :table-config="tableConfig"
  :column-config="columnConfig"
  :header-option="headerOption"
  :get-list-params="getListParams"
  :cell-option="cellOption"
  :table-date="list"
  :Table="this"
>
<el-row  :gutter="10" slot="search">
  <el-col :span="4">
    <el-input placeholder="搜索"  prefix-icon="el-icon-search"></el-input>
  </el-col>
  <el-col :span="4">
    <el-input placeholder="搜索"  prefix-icon="el-icon-search"></el-input>
  </el-col>
  <el-col :span="4">
    <el-input placeholder="搜索"  prefix-icon="el-icon-search"></el-input>
  </el-col>
</el-row>
</Table>`,
      theader: ['参数', '说明', '类型', '可选值', '默认值'],
      eventTheader: ['事件名称', '说明', '回调'],
      tableParams: [
        { name: 'Table（必填）', desc: '当前组件所在的this', type: 'Object', value: 'this', defaultValue: '--' },
        { name: 'tableConfig（必填）', desc: 'table的配置项目', type: 'JSON', value: `
          {
            title: '', // 标题
            showHeaderOption: true, // 是否显示表头操作按钮
            tableWidth: '100%', // 表格宽度
            selectMore: true, // 是否显示多选框
            isIndexShow: true, // 是否显示编号
            showTableOption: true, // 是否显示操作列
            cellOptionWidth: '', // 操作列宽
            showPagination: true, // 是否显示翻页
            select: [] // 被选中的行
          }
        `, defaultValue: 'false' },
        { name: 'headerOption(非必填)', desc: '表头操作按钮配置', type: 'Array', value: `
          [
            { name: '测试1', icon: 'el-icon-download', type: 'primary', isShow: true, fun: 'onHandleBtnEvent' }
          ]
        `, defaultValue: '--' },
        { name: 'columnConfig(必填，与elementUI类似，可参考)', desc: '表格行配置 ', type: 'Array', value: '--', defaultValue: '--' },
        { name: 'cellOption(非必填)', desc: '行操作按钮', type: 'Array', value: `
        [{ name: '操作1', icon: '', fun: 'testEvent' }]
        `, defaultValue: '--' },
        { name: 'autoInit(非必填)', desc: '是否自定义获取表格数据', type: 'Boolean', value: 'false/true', defaultValue: '--' },
        { name: 'getListParams(非必填)', desc: '发送获取表格请求的参数', type: 'JSON', value: '--', defaultValue: '--' },
      ],
      tableEventConfig: [
        { name: 'init-table', desc: '初始化表格', value: '发起请求' }
      ],
      list: null,
      listLoading: true,
      tableConfig: {
        title: '', // 标题
        showHeaderOption: true, // 是否显示表头操作按钮
        tableWidth: '100%', // 表格宽度
        selectMore: true, // 是否显示多选框
        isIndexShow: true, // 是否显示编号
        showTableOption: true, // 是否显示操作列
        cellOptionWidth: '180px', // 操作列宽
        showPagination: true // 是否显示翻页
      },
      columnConfig: [
        { label: '作者', prop: 'author', width: '120px', isSortable: false, isHide: true, formatter: {
          1: '测试'
        }},
        { label: '时间', prop: 'display_time', width: '120px', isSortable: true, isHide: true },
        { label: 'ID', prop: 'id', width: 'auto', isSortable: false, isHide: true, formatter: {
          1: '测试'
        }},
        { label: '页面', prop: 'pageviews', width: '120px', isSortable: true, isHide: true },
        { label: '状态', prop: 'status', width: '120px', isSortable: false, isHide: true, formatter: {
          1: '测试'
        }},
        { label: '标题', prop: 'title', width: '300px', isSortable: true, isHide: true },
        { label: '测试显隐1', prop: 'test', width: '300px', isSortable: true, isHide: false },
        { label: '测试显隐2', prop: 'test2', width: '300px', isSortable: true, isHide: false }
      ],
      headerOption: [
        { name: '测试1', icon: 'el-icon-download', type: 'primary', isShow: true, fun: 'onHandleBtnEvent' },
        { name: '测试1', icon: 'el-icon-download', type: 'primary', isShow: true, fun: 'onHandleBtnEvent' },
        { name: '测试1', icon: 'el-icon-download', type: 'primary', isShow: true, fun: 'onHandleBtnEvent' }
      ],
      getListParams: { // 获取列表的请求参数

      },
      cellOption: [
        { name: '操作1', icon: '', fun: 'testEvent' },
        { name: '操作1', icon: '', fun: 'testEvent' },
        { name: '操作1', icon: '', fun: 'testEvent' },
        { name: '操作1', icon: '', fun: 'testEvent' },
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList('/table/list').then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    testEvent(){

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
