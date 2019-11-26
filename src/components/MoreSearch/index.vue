<template>
  <div class="more-search">
    <div class="search-tag" />
    <div class="search-form">
      <div class="search-default">
        <div class="default-search-box">
          <slot name="searchInp" />
        </div>
        <div v-if="!isOpenMoreSearch" class="default-search">
          <el-button
            v-for="(val, index) in searchBtn"
            :key="index"
            :type="val.type"
            @click="onSearchBtnEvent(val.btnType)"
          >{{ val.name }}</el-button>
        </div>
        <div class="search-more-btn" @click="onShowMoreSearch">
          <el-link type="primary" :underline="false">{{ openOrClose }}
            <i :class="isOpenMoreSearch ? 'el-icon-arrow-up close-more-search' : 'el-icon-arrow-up open-more-search'" />
          </el-link>
        </div>
      </div>
      <transition name="el-zoom-in-top">
        <el-card v-show="isOpenMoreSearch" class="open-more">
          <div class="search-items">
            <slot name="searchItem" />
          </div>
          <div class="search-footer">
            <el-button
              v-for="(val, index) in searchBtn"
              :key="index"
              :type="val.type"
              @click="onSearchBtnEvent(val.btnType)"
            >{{ val.name }}</el-button>
          </div>
        </el-card>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { searchBtn } from '../../utils/common-config'

export default {
  name: 'MoreSearch',
  components: { },
  data() {
    return {
      searchBtn, // 搜索按钮config
      openOrClose: '展开', // 默认文字问展开
      isOpenMoreSearch: false // 是否展开高级搜索   默认不展开
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
    /**
     * 展开或者收起高级搜索
     */
    onShowMoreSearch() {
      this.isOpenMoreSearch = !this.isOpenMoreSearch
      this.openOrClose = this.isOpenMoreSearch ? '收起' : '展开'
    },
    /**
     * 点击搜索 或者 清空
     */
    onSearchBtnEvent(type) {
      this.$emit('searchLists', { type })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
.more-search{
  .search-default{
    margin: $margin 0;
    overflow: hidden;
  }
  .default-search-box{
    float: left;
  }
  .default-search{
    float: left;
    margin-left: $margin;
  }
  .search-more-btn{
    height: 100%;
    margin-left: $margin;
    line-height: 26px;
    cursor: pointer;
    display: inline-block;
    float: left;
  }
  .open-more-search{
    transition: .2s ease;
    @include transformMixin(rotateZ(180deg))
  }
  .close-more-search{
    transition: .2s ease;
    @include transformMixin(rotateZ(0))
  }
}
</style>
