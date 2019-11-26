<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!--    <el-menu mode="horizontal" :default-active="activeRouter" class="header-nav">-->
    <!--      <el-menu-item v-for="(item) in headerNavConfig" :index="item.index">-->
    <!--        <span v-if="item.children.length > 0">{{item.title}}</span>-->
    <!--      </el-menu-item>-->
    <!--      <el-submenu v-for="(item) in headerNavConfig" :index="item.index">-->
    <!--        <template slot="title">{{item.title}}</template>-->
    <!--        <el-menu-item index="2-1" v-for="(val) in item.children" :index="val.index">{{val.title}}</el-menu-item>-->
    <!--      </el-submenu>-->
    <!--    </el-menu>-->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>elementUI</el-dropdown-item>
          </a>
          <a target="_blank" href="https://element.eleme.cn/2.0/#/zh-CN/component/installation">
            <el-dropdown-item>elementUI</el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import { headerNavConfig } from '../../utils/common-config'

export default {
  components: { Hamburger },
  data() {
    return {
      headerNavConfig,
      activeRouter: headerNavConfig[0].index,
      theme: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  watch: {
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss">
  @import "~@/styles/variables.scss";
.navbar {
  height: $navBarHeight;
  overflow: hidden;
  position: relative;
  background: $themeColor;
  box-shadow: 2px 0px 8px 0px rgba(0,0,0,0.06);

  .hamburger-container {
    line-height: $navBarHeight;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    color: $barColor;
    -webkit-tap-highlight-color:transparent;
  }

  .header-nav{
    width: calc( 100% - 120px );
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
