
/**
 * constantRoutes
 * 不需要鉴权的页面
 * 所有权限的用户均可访问
 */


/* Layout *//* Layout */
const Layout = ()=>import("@/layout")

// 懒加载的loading 避免点击跳转路由之后js没有被下载完成之前造成的点击无效问题
import {Loading} from 'element-ui';

let LoadingService = null
let spinRoute = {
  show() {//加载中显示loading组件
    if(!LoadingService) {
      LoadingService = Loading.service({
        text: '模块载入中, 请稍后...',
        spinner: '',
        background: 'rgba(0,0,0,.5)'
      })
    }
  },
  resolve(resolve) {//加载完成隐藏loading组件
    return component => {
      if(LoadingService){
        LoadingService.close()
        LoadingService = null
      }
      resolve(component)
    }
  }
}
export const constantRoutes = [
  {
    path: '/login',
    component: resolve => {
      spinRoute.show()
      require(['@/views/login/index'], spinRoute.resolve(resolve))
    },
    hidden: true
  },

  {
    path: '/404',
    component:resolve => {
      spinRoute.show()
      require(['@/views/404'], spinRoute.resolve(resolve))
    },
    hidden: true
  },
  // test  change
  {
    path: '/',
    component: Layout,
    redirect: '/docs',
    children: [{
      path: 'docs',
      name: 'Docs',
      component: resolve => {
        spinRoute.show()
        require(['@/views/dashboard/index'], spinRoute.resolve(resolve))
      },
      meta: { title: '写在前面', icon: 'dashboard' }
    }]
  },

  {
    path: '/component',
    component: Layout,
    redirect: '/component/table',
    name: 'Component',
    meta: { title: '组件', icon: 'nested' },
    children: [
      {
        path: 'dialog',
        name: 'Dialog',
        component: resolve => {
          spinRoute.show()
          require(['@/views/dialog/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'Dialog', icon: 'form' }
      },
      {
        path: 'drawer',
        name: 'Drawer',
        component: resolve => {
          spinRoute.show()
          require(['@/views/drawer/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'Drawer', icon: 'form' }
      },
      {
        path: 'message',
        name: 'Massage',
        component: resolve => {
          spinRoute.show()
          require(['@/views/message/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'Massage（提示）', icon: 'form' }
      },
      {
        path: 'autoCloseMessage',
        name: 'AutoCloseMessage',
        component:  resolve => {
          spinRoute.show()
          require(['@/views/autoClose/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'autoCloseMessage', icon: 'form' }
      },
      {
        path: 'notification',
        name: 'Notification',
        component: resolve => {
          spinRoute.show()
          require(['@/views/notication/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'notification(文字提示)', icon: 'form' }
      },
      {
        path: 'alert',
        name: 'Alert',
        component: resolve => {
          spinRoute.show()
          require(['@/views/alert/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'Malert(通栏提示)', icon: 'form' }
      },
      {
        path: 'confirm',
        name: 'Confirm',
        component: resolve => {
          spinRoute.show()
          require(['@/views/confirm/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'confirm(带确认框提示)', icon: 'form' }
      },
      {
        path: 'table',
        name: 'Table',
        component: resolve => {
          spinRoute.show()
          require(['@/views/table/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'Table（表格）', icon: 'table' }
      },
      // {
      //   path: 'form',
      //   name: 'Form',
      //   component: resolve => {
      //     spinRoute.show()
      //     require(['@/views/form/index'], spinRoute.resolve(resolve))
      //   },
      //   meta: { title: 'Form（表单）', icon: 'form' }
      // }
    ]
  }
]
