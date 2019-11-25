<template>
  <div class="app-container">
    <section class="app-section">
      <h3 class="content-header">Form基础用法</h3>
      <div class="content-example">
        <Form
          ref="form"
          :class-name="`form-content`"
          :data="formData"
          :field-list="fieldList"
          :rules="rules"
          :is-loading="isLoading"
          :list-type-info="listTypeInfo"
          :oneline-list="onelineList"
          @formItemClick="formItemClick"
          @submit="onSubmit"
          @cancel="onCancel"
        >
          <template slot="test9">
            <el-input v-model="formData.test9" placeholder="测试普通多行插槽" />
          </template>
          <template slot="test2">
            <el-input v-model="formData.test2" type="textarea" placeholder="测试单列显示" />
          </template>
        </Form>
      </div>
    </section>
    <section class="app-section">
      <h3 class="content-header">部分功能代码示例</h3>
      <section class="content-example">
        <p class="example-item">1、该组件封装在mengui中，不需要在页面中导入</p>
        <pre>
          <p class="example-item">template中使用</p>
          {{ example }}
          <p class="example-item">2、周期函数中定义对应变量</p>
          data(){
            return {
              formData: {
                test1: '',
                test2: '',
                test3: '',
                test4: '',
                test5: '',
                test6: '',
                test7: [],
                test8: '',
                test9: ''
              },
              fieldList: [
                { value: 'test1', label: '测试input', type: 'input' },
                { value: 'test4', label: '测试select', type: 'select', list: 'test4' },
                { value: 'test5', label: '测试date', type: 'date', dateType: 'date' },
                { value: 'test6', label: '测试daterange', type: 'date', dateType: 'daterange' },
                { value: 'test3', label: '测试inputNumber', type: 'inputNumber' },
                { value: 'test8', label: '测试radio', type: 'radio', list: 'test8' },
                { value: 'test9', label: '插槽自定义item', type: 'slot' },
                { value: 'test7', label: '测试tag', type: 'tag' }
              ],
              onelineList: [
                { value: 'test2', label: '测试单行显示textarea', type: 'textarea' }
              ],
              rules: {
                test1: [{ required: true, message: 'test1不能为空', trigger: 'blur' }],
                test4: [{ required: true, message: 'test1不能为空', trigger: 'change' }],
                test2: [{ required: true, trigger: 'blur', validator: v_email }]
              },
              listTypeInfo: {
                test4: [
                  { value: '0', label: '测试下拉框' }
                ],
                test8: [
                  { label: '0', name: 'radio1' },
                  { label: '1', name: 'radio2' }
                ]
              },
            }
          }
        // 表单数据
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
          <td class="table-cell">name为指定的form表单项</td>
          <td class="table-cell">自定义内容，例如需要自定义的表单项v-model的名称为test，则该插槽的name为test</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import { v_email } from '@/utils/form-validate'
import { message } from '@/utils/message-navication'
export default {
  components: { },
  data() {
    return {
      example: `
<Form
  ref="form"
  :class-name="\`form-content\`"
  :data="formData"
  :field-list="fieldList"
  :rules="rules"
  :is-loading="isLoading"
  :list-type-info="listTypeInfo"
  :oneline-list="onelineList"
  @formItemClick="formItemClick"
  @submit="onSubmit"
  @cancel="onCancel"
>
  <template slot="test9">
    <el-input v-model="formData.test9" placeholder="测试普通多行插槽" />
  </template>
  <template slot="test2">
    <el-input v-model="formData.test2" type="textarea" placeholder="测试单列显示" />
  </template>
</Form>
      `,
      theader: ['参数', '说明', '类型', '可选值', '默认值'],
      eventTheader: ['事件名称', '说明', '回调'],
      tableConfig: [
        { name: 'isLoading(非必传，默认false)', desc: '确认按钮是否禁用且loading', type: 'Boolean', value: 'false/true', defaultValue: 'false' },
        { name: 'colNum(非必传，默认2)', desc: 'form是单列显示还是多列显示', type: 'Number', value: '可以被24整除的数值', defaultValue: '2' },
        { name: 'onelineList(非必传)', desc: '在多行form表单中的特殊单行显示项', type: 'Array', value: '[{ value: "v-model的变量名", label: "标签", type: "input之类的标签类型" }]', defaultValue: '--' },
        { name: 'className(非必传)', desc: '自定义类名', type: 'String', value: '--', defaultValue: '--' },
        { name: 'data(必传)', desc: '表单数据', type: 'Object', value: '--', defaultValue: '--' },
        { name: 'fieldList(必传)', desc: '表单相关字段', type: 'Array', value: '[{value: "对应v-model字段名称", label:"字段描述label", type: "form-item类型", list: "有下拉或者其他选项列表的"}]', defaultValue: '--' },
        { name: 'rules(非必传)', desc: '表单验证规则', type: 'Object', value: '与elementUI验证规则相同，可参考', defaultValue: '--' },
        { name: 'listTypeInfo(非必传)', desc: '表单项中，如select或者radio之类的值', type: 'Object', value: '--', defaultValue: '--' },
        { name: 'labelWidth(非必传, 默认150px)', desc: '表单项label标签的宽度', type: 'String', value: '*px', defaultValue: '150px' },
       ],
      tableEventConfig: [
        { name: 'formItemClick', desc: '表单项的change事件', value: '当需要对表单项进行监听的时候' },
        { name: 'submit', desc: '提交表单，默认会在验证rules规则之后进行提交', value: '提交当前表单' },
        { name: 'cancel', desc: '取消提交表单，默认清空表单', value: '取消并清空当前表单' }
      ],
      // 表单数据
      formData: {
        test1: '',
        test2: '',
        test3: '',
        test4: '',
        test5: '',
        test6: '',
        test7: [],
        test8: '',
        test9: ''
      },
      fieldList: [
        { value: 'test1', label: '测试input', type: 'input' },
        { value: 'test4', label: '测试select', type: 'select', list: 'test4' },
        { value: 'test5', label: '测试date', type: 'date', dateType: 'date' },
        { value: 'test6', label: '测试daterange', type: 'date', dateType: 'daterange' },
        { value: 'test3', label: '测试inputNumber', type: 'inputNumber' },
        { value: 'test8', label: '测试radio', type: 'radio', list: 'test8' },
        { value: 'test9', label: '插槽自定义item', type: 'slot' },
        { value: 'test7', label: '测试tag', type: 'tag' }
      ],
      onelineList: [
        { value: 'test2', label: '测试单行显示textarea', type: 'textarea' }
      ],
      rules: {
        test1: [{ required: true, message: 'test1不能为空', trigger: 'blur' }],
        test4: [{ required: true, message: 'test1不能为空', trigger: 'change' }],
        test2: [{ required: true, trigger: 'blur', validator: v_email }]
      },
      listTypeInfo: {
        test4: [
          { value: '0', label: '测试下拉框' }
        ],
        test8: [
          { label: '0', name: 'radio1' },
          { label: '1', name: 'radio2' }
        ]
      },
      isLoading: false
    }
  },
  updated() {

  },
  methods: {
    onSubmit({ formName, isSubmit }) {
      const { formData } = this
      this.isLoading = true
      message(this, 'success', '提交成功')
      console.log(this.$refs.form)
    },
    onCancel(ref) {
      message(this, 'warning', '取消提交')
    },
    formItemClick(event) {

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

