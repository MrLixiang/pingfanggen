<template>
    <div>
        <Header attr-title="老师注册"></Header> 
        <div class="teacher_top">
            <ul class="speed">
                <li><img src="../img/yuan1.png" alt=""></li>
                <li><img src="../img/yuan2.png" alt=""></li>
                <li><img src="../img/yuan2.png" alt=""></li>
                <li><img src="../img/yuan2.png" alt=""></li>
            </ul>
            <ul class="teacher_speed">
                <li>基本信息</li>
                <li>擅长科目</li>
                <li>教育和经历</li>
                <li>完成</li>
            </ul>
        </div>
        <div class="main">
            <div class="mandatory">
                <div class="mandatory-input-box">
                    <p>真实姓名</p>
                    <input type="text" placeholder="满意">
                </div>
                <div class="mandatory-input-box">
                    <p>密码</p>
                    <input type="text" placeholder="321321">
                </div>
                <div class="mandatory-input-box">
                    <p>邮箱</p>
                    <input type="password" placeholder="935667777@qq.com">
                </div>
                <div class="mandatory-input-box">
                    <p>联系电话</p>
                    <input type="text" placeholder="18911595656">
                </div>
                <div class="mandatory-input-box code-box">
                    <p>验证码</p>
                    <input class="code" type="text" placeholder="请输入验证码">
                    <button>点击获取验证码</button>
                </div>
            </div>
        </div>
        <router-link to="/teacherReg"><button class="bottom-button">保存并继续</button></router-link>
    </div>
</template>

<script>
import Header from '../components/header.vue'
    export default {
        name:'asdasd',
       components:{
           Header
       }
    }
</script>

<style scoped lang="less">
@import '../styles/teacherRegister.less';

</style>