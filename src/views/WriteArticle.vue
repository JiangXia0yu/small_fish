<template>
  <div id="write_article">
    <div class="title-box">
      <input type="text" class="title" v-model="article.title" placeholder="请输入标题..." />
      <el-button type="primary" size="small" class="release" @click="openDialog">发布文章</el-button>
    </div>
    <mavon-editor v-model="article.content" class="editor" />
    <!-- 文章弹出框 -->
    <el-dialog :title="`发布文章：${article.title}`" :visible.sync="showDialog" width="30%">
      <el-form label-position="left" label-width="80px">
        <el-form-item label="标签：" style="width:fit-content">
          <el-tag
            :key="tag"
            v-for="tag in article.tags"
            closable
            :disable-transitions="false"
            @close="handleTagClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            v-if="inputTagVisible"
            v-model="inputTag"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleTagInputConfirm"
            @blur="handleTagInputConfirm"
            class="input-new-tag"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ 新标签</el-button>
        </el-form-item>
        <el-form-item label="分类：">
          <el-select v-model="article.category" placeholder="请选择">
            <el-option
              v-for="(category,index) in categories"
              :key="index"
              :label="category.tag_name"
              :value="category.tag_name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="摘要：">
          <el-input 
          type="textarea" 
          v-model="article.tabloid" 
          rows="4"
          maxlength="50"
          show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="article.type">原创</el-checkbox>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">发布</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tag from '@/plugins/tag.json'
export default {
  data() {
    return {
      showDialog: false,
      categories: [],
      inputTag: "",
      inputTagVisible: false,
      article: {
        title: "",
        content: "",
        category: "",
        tags: ['JavaScript', 'Vuejs'],
        tabloid: "",
        type: true,
      },
    };
  },
  created() {
    this.categories = tag.tag
  },
  methods: {
    // 断言 target 为非空
    assertNotEmpty(target, msg) {
      if (!target) {
        this.$message({
          message: msg,
          type: "warning",
        });
        return false;
      }
      return true;
    },
    // 打开文章信息填写框
    openDialog() {
      if (
        this.assertNotEmpty(this.article.title, "请填写文章标题") &&
        this.assertNotEmpty(this.article.content, "请填写文章内容")
      ) {
        this.showDialog = true;
        this.article.tabloid = this.article.content
        this.article.tabloid.substring(0,50)
      }
    },
    // 取消发布
    handleCancel() {
      this.showDialog = false;
    },
    // 发布文章
    handleSubmit() {
      if (
        this.assertNotEmpty(this.article.category, "分类不能为空") &&
        this.assertNotEmpty(this.article.tags.join(), "文章标签不能为空") &&
        this.assertNotEmpty(this.article.tabloid, "文章摘要不能为空")
      ) {
        this.showDialog = false;
        // postArticle(this.article).then((res) => {
          this.$notify({
            title: "提示",
            message: `文章《${this.article.title}》发布成功`,
            type: "success",
          });
          this.$router.push("/");
          console.log(this.article);
        // });
      }
    },
    // 添加标签
    showTagInput() {
      this.inputTagVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    // 删除标签
    handleTagClose() {
      this.article.tags.splice(this.article.tags.indexOf(tag), 1);
    },
    // 添加标签
    handleTagInputConfirm() {
      let inputTag = this.inputTag;
      if (inputTag) {
        this.article.tags.push(inputTag);
      }
      this.inputTagVisible = false;
      this.inputTag = '';
    }
  }
}
</script>

<style lang="scss" scoped>
#write_article {
  padding-top: 60px;
  position: relative;
  .release {
    position: absolute;
    top: 75px;
    right: 50px;
    z-index: 999;
  }
  .title-box {
    display: grid;
    grid-template-columns: 22fr 2fr;
    padding: 10px 0 10px 10px;
    background: #fff;
    .title {
      color: #303133;
      text-indent: 0px;
      outline: none;
      font-size: 16px;
      font-weight: bold;
      display: block;

      border: none;
      border-bottom: 1px solid #e0e0e0;
      border-radius: 0;
      line-height: 1;
      overflow: visible;
      margin-top: 15px;
      margin-bottom: 5px;
      padding: 4px;
    }
    .title:focus {
      border-color: #409eff;
    }
  }
  .el-tag {
    margin-right: 10px;
  }
  .button-new-tag {
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    vertical-align: bottom;
  }
}
.editor {
  height: 900px;
}
</style>