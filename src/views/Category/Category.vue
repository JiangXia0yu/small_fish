<template>
  <el-container>
    <el-main id="category">
      <el-tabs v-model="activeName" :tab-position="tabPosition">
        <el-tab-pane 
        v-for="item in tag"
        :key="item.id"
        :label="item.tag_name" 
        :name="item.name"
        @click="log"
        >
          <ArticleList></ArticleList>
        </el-tab-pane>
      </el-tabs>
    </el-main>
    <Aside></Aside>
  </el-container>
</template>

<script>
import ArticleList from '../Article/ArticleList.vue'
import Aside from '@/views/Aside.vue'
import tag from '@/plugins/tag.json'
import bus from '@/EventBus/eventbus.js'
export default {
  data() {
    return {
      tag: [],
      activeName: 'h5',
      tabPosition: 'left',
      isId: ''
    }
  },
  created() {
    this.tag = tag.tag
    bus.$on("parentEmitId", id => {
      this.activeName = id
    })
  },
  methods: {
    log() {
      console.log(this.activeName)
    }
  },
  components: {
    ArticleList,
    Aside
  }
}
</script>

<style lang="scss" scoped>
.el-tabs {
  ::v-deep .el-tabs__item {
    font-size: 12px;
  }
}
</style>