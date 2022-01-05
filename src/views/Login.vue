<template>
  <div id="login">
    <!-- 登录 -->
    <el-card class="box-card" v-show="toggleLogin">
      <div slot="header" class="clearfix">
        <span>账号登录</span>
        <el-button 
        class="el-icon-close" 
        style="float: right; padding: 3px 0" 
        type="text"
        @click="showLogin"></el-button>
      </div>
      <div class="text item">
        <el-form :model="loginruleForm" status-icon :rules="loginrules" ref="loginruleForm" label-width="40px" class="demo-ruleForm" hide-required-asterisk>
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginsubmitForm('loginruleForm')">登录</el-button>
            <el-button @click="loginresetForm('loginruleForm')">重置</el-button>
            <el-button type="text" class="toggleLogin" @click="isToggleLogin">注册账号</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 注册 -->
    <el-card class="box-card" v-show="!toggleLogin">
      <div slot="header" class="clearfix">
        <span>注册账号</span>
        <el-button 
        class="el-icon-close" 
        style="float: right; padding: 3px 0" 
        type="text"
        @click="showLogin"></el-button>
      </div>
      <div class="text item">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
          <el-form-item label="账号" prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="text" class="toggleLogin" @click="isToggleLogin">账号登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import user from '@/plugins/user.json'
export default {
  data() {
    // 账号验证
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('账号不能为空'));
      }else {
        callback()
      }
    };
    // 密码验证
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    // 双重密码验证
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      token: '',
      toggleLogin: true,
      isShowLogin: false,
      user: [],
      ruleForm: {
        pass: '',
        checkPass: '',
        account: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 16, message: "密码必须在6-16位之间", trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        account: [
          { validator: checkAge, trigger: 'blur' },
          { min: 6, max: 16, message: "账号不得低于6位", trigger: 'blur' }
        ]
      },
      loginruleForm: {
        pass: '666666',
        account: 'admin'
      },
      loginrules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        account: [
          { required: true, message: "账号不能为空", trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.token = JSON.parse(localStorage.getItem('token'))
    this.user = user.user[0]
  },
  methods: {
    // 注册
    submitForm(formName) {
      let account = this.ruleForm.account;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.user.username == account) {
            this.$message.error({message: '该账户已存在', customClass: 'zZindex'})
            this.ruleForm.account = ''
            this.ruleForm.pass = ''
            this.ruleForm.checkPass = ''
            return false;
          }else {
            this.$message.success({message: '注册成功', customClass: 'zZindex'})
            this.isToggleLogin()
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 登录
    loginsubmitForm(formName) {
      let account = this.loginruleForm.account;
      let pass = this.loginruleForm.pass;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.user.username != account && this.user.password != pass) {
            this.$message.error({message: '账号或密码不正确', customClass: 'zZindex'})
            this.loginruleForm.account = ''
            this.loginruleForm.pass = ''
            return false;
          }else {
            this.$message.success({message: '登录成功', customClass: 'zZindex'})
            this.$store.state.token = true;
            window.localStorage.setItem('token', JSON.stringify(this.$store.state.token))
            this.showLogin()
            let timer = setTimeout(() => {
              location.reload()
              clearTimeout(timer)
            }, 1000)
          }
        } else {
          this.$message.error({message: '账号或密码不正确', customClass: 'zZindex'})
          this.loginruleForm.account = ''
          this.loginruleForm.pass = ''
          return false;
        }
      });
    },
    loginresetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 关闭登录页
    showLogin() {
      this.$emit('showLogin', this.isShowLogin)
    },
    // 切换登录
    isToggleLogin() {
      this.toggleLogin = !this.toggleLogin
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 1078px;
  background-color: rgba($color: #000000, $alpha: .4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .box-card {
    width: 20%;
    .item {
      .toggleLogin {
        padding: 0;
        margin-left: 60px;
      }
    }
  }
}
</style>