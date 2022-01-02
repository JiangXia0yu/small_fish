<template>
  <el-container id="profile">
    <el-main>
      <el-card class="box-card">
        <el-button type="text">
          <router-link to="/user/1" class="el-icon-arrow-left">返回个人主页</router-link>
        </el-button>
      </el-card>
      <el-card class="box-card">
        <div class="container">
          <h3>个人资料</h3>
          <!-- 主体 -->
          <div class="main_body">
            <!-- 用户头像 -->
            <div class="edit_head_photo">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <p>支持 jpg、png、jpeg 格式大小 5M 以内的图片</p>
            </div>
            <!-- 用户信息 -->
            <el-form class="edit_form" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="用户名">
                <el-input
                  type="text"
                  placeholder="填写你的用户名"
                  v-model="formLabelAlign.name"
                  maxlength="20"
                  show-word-limit
                />
              </el-form-item>
              <el-form-item label="个人签名">
                <el-input
                  type="text"
                  placeholder="填写你的个人主页"
                  v-model="formLabelAlign.sign"
                  maxlength="100"
                  show-word-limit
                />
              </el-form-item>
              <el-form-item label="个人介绍">
                <el-input
                  type="textarea"
                  placeholder="填写你的个人介绍"
                  v-model="formLabelAlign.introduce"
                  maxlength="100"
                  show-word-limit
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitEdit">提交修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          content: '个人资料',
          icon: 'el-icon-user',
          route: '/settings/profile'
        },
        {
          content: '账号设置',
          icon: 'el-icon-setting',
          route: '/settings/account'
        },
      ],
      labelPosition: 'top',
      formLabelAlign: {
        name: '码农小胡',
        sign: '',
        introduce: '一个平平无奇的前端码农'
      },
      imageUrl: require('@/static/images/OIP-C.jpg')
    }
  },
  methods: {
    goback() {
      this.$router.push('/user/1')
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitEdit() {
      this.$message({
        message: '提交成功!',
        type: 'success'
      });
      let timer = setTimeout(() => {
        this.$router.push('/user/1')
        clearTimeout(timer)
      }, 1000)
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 20px;
  .el-icon-arrow-left {
    color: #409EFF;
  }
}
::v-deep .el-card__body {
  padding: 5px 10px;
}
.el-main {
  width: 100%;
}
.container {
  width: 80%;
  margin: 0 auto;
  h3 {
    border-bottom: 1px solid #f1f1f1;
    padding: 15px 0 35px 15px;
    font-size: 20px;
  }
  .main_body {
    .edit_head_photo,.edit_form {
      padding: 10px;
      border-bottom: 1px solid #f1f1f1;
      p {
        width: 130px;
        font-size: 12px;
        margin-bottom: 10px;
        margin-left: 30px;
      }
      ::v-deep .el-form-item__content {
        width: 400px;
        .el-textarea__inner {
          height: 100px;
        }
      }
      ::v-deep .avatar-uploader .el-upload {
        border: 1px dashed #000;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      ::v-deep .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }      
  }
}
</style>