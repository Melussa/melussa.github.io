export const themeLists = {
  whiteStyle: ['#F0FDFF', '#CFF6FF', '#A6ECFF', '#7DDEFF', '#50C6F5', '#27AAE7', '#1586C2', '#0B649D', '#024475', '#012B4F'],
  blackStyle: ['#F5F0FF', '#DDCFFF', '#BEA6FF', '#9B7DFF', '#7251F5', '#4726E7', '#2E16C2', '#180B9C', '#0A0275', '#03014F']
}
// 公共的搜索按钮
export const searchBtn = [
  { name: '查询', btnType: 'search', fun: 'onSearchList', type: 'primary' },
  { name: '重置', btnType: 'cancel', fun: 'onCancelSearch', type: 'default' }
]
export const headerNavConfig = [
  {
    title: '导航栏1',
    index: '1',
    children: [
      {
        title: '导航栏1-title1',
        index: '1-1'
      },
      {
        title: '导航栏1-title2',
        index: '1-2'
      },
      {
        title: '导航栏1-title3',
        index: '1-3'
      }
    ]
  }
]

