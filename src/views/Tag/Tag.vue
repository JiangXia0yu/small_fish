<template>
  <el-card class="box-card tags">
    <div class="text item">
      <a
      v-for="(item, index) in tag"
      :key="index"
      class="tages"
      href="#/category/1"
      :title="item.tag_name"
      @click="emitId(item.name)"
      >
      <span :class="item.icon" class="icon"></span>
      <span>{{item.tag_name}}&nbsp;[{{item.number}}]</span>
      </a>
    </div>
  </el-card>
</template>

<script>
import tag from '@/plugins/tag.json'
import bus from '@/EventBus/eventbus.js'
export default {
  data() {
    return {
      tag: [],
      ist: 2
    }
  },
  created() {
    this.tag = tag.tag
  },
  methods: {
    emitId(name) {
      this.$store.state.navIndex = this.ist
      window.localStorage.setItem('state', JSON.stringify(this.$store.state))
      bus.$emit('parentEmitId', name)
    }
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