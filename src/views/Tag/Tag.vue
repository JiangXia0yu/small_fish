<template>
  <el-card class="box-card tags">
    <div class="text item">
      <router-link
      v-for="(item, index) in tag"
      :key="index"
      :to="{path: '/category/'+item.id}"
      class="tages"
      :title="item.tag_name">
      <span :class="item.icon" class="icon"></span>
      <span>{{item.tag_name}}&nbsp;[{{item.number}}]</span>
      </router-link>
    </div>
  </el-card>
</template>

<script>
import tag from '@/plugins/tag.json'
export default {
  data() {
    return {
      tag: []
    }
  },
  created() {
    this.tag = tag.tag
  }
}
</script>

<style lang="scss" scoped>
.item {
  ::v-deep .tages {
    padding: 3px 5px;
    background-color: #eee;
    border-radius: 5px;
    margin-right: 15px;
    margin-bottom: 10px;
    display: inline-block;
    width: 40%;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: all .2s ease-in;
    span {
      font-size: 14px;
    }
    .icon {
      margin-right: 10px;
    }
  }
  .tages:hover {
    background-color: #cfcfcf;
  }
}
</style>