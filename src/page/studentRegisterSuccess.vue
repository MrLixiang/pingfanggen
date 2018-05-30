<template>
    <div class="wrap">
        <Header attr-title='学生注册'></Header>
        <div class="content">
            <h4 class="title">感谢您的注册</h4>
            <p>你可以去看个人首页<span>或者去搜索想要的老师信息</span></p>
            <button><router-link to="/">返回首页</router-link></button>
            
        </div>
        <Footer link-href='Personal_center'></Footer>
    </div>
</template>

<script>
 import Footer from '../components/footer'
 import Header from '../components/header'
    export default {
        name: "studentRegisterSuccess",
        components: {
            Footer,
            Header
        }
    };
</script>

<style scope lang='less'>
    @import '../styles/studentRegisterSuccess.less';
</style>