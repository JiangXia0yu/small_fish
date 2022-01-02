<template>
  <el-card class="box-card search">
    <div class="text item">
      <el-input
        class="searchInput"
        placeholder="请输入关键字"
        suffix-icon="el-icon-search"
        v-model="search">
      </el-input>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searchInput: null
    }
  },
  mounted() {
    let searchInput = document.querySelector('.searchInput').children[0];
    searchInput.classList.add('input');
    let searchChild = document.querySelector('.search').children[0];
    searchChild.style.padding = 0;
    let searchBtn = document.querySelector('.el-input__suffix');
    searchInput.addEventListener('keydown', function(event) {
      if(event.keyCode == '13') {
        searchBtn.onclick();
      }
    })
    searchBtn.onclick = function() {
      console.log(searchInput.value);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>