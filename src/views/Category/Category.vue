<template>
  <div id="category" class="e3e3e3">
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" @click="handleClick">
          <el-tab-pane 
          v-for="item in tag"
          :key="item.id"
          :label="item.tag_name" 
          :name="item.name"
          >
            <!-- <el-card class="box-card">
              {{item.tag_name}}
            </el-card> -->
            <ArticleList></ArticleList>
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <Aside></Aside>
    </el-container>
  </div>
</template>

<script>
import tag from '@/plugins/tag.json'
import Aside from '../Aside.vue'
import ArticleList from '../Article/ArticleList.vue'
export default {
  data() {
    return {
      tag: [],
      activeName: 'h5'
    }
  },
  created() {
    this.tag = tag.tag
  },
  methods: {
    handleClick() {
      console.log('123');
    }
  },
  components: {
    Aside,
    ArticleList
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