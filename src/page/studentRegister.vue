<template>
    <div class="wrap">
       <Header attr-title='学生注册'></Header>
        <form action="" class="center">
            <div class="mandatory">
                <div class="mandatory-input-box">
                    <p><span>*</span>用户名</p>
                    <input type="text" placeholder="请输入用户名">
                </div>
                <div class="mandatory-input-box">
                    <p><span>*</span>邮箱</p>
                    <input type="text" placeholder="请输入邮箱">
                </div>
                <div class="mandatory-input-box">
                    <p><span>*</span>密码</p>
                    <input type="password" placeholder="请输入密码">
                </div>
                <div class="mandatory-input-box">
                    <p><span>*</span>手机号</p>
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="mandatory-input-box code-box">
                    <p><span>*</span>验证码</p>
                    <input class="code" type="text" placeholder="请输入验证码">
                    <button>点击获取验证码</button>
                </div>
            </div>
            <p class="info">如果补齐下面材料，将会有更多的老师预约您</p>
            <div class="center-optional">
                <div class="optional-input-box">
                    <p>年级</p>
                    <input type="text" placeholder="请输入年级">
                </div>
                <div class="optional-input-box">
                    <p>学科</p>
                    <input type="text" placeholder="请输入学科">
                </div>
                <div class="optional-input-box age-box">
                    <p>年龄</p>
                    <div class="age">
                        <button disabled="disabled">-</button>
                        <input type="number" value="5">
                        <button disabled="disabled">+</button>
                    </div>
                </div>
                <div class="optional-input-box sex-box">
                    <p>性别</p>
                    <div class="sex">
                        <label><input checked type="radio" name="sex" value="男"><i></i>男</label>
                        <label><input type="radio" name="sex" value="女"> <i></i>女</label>
                    </div>
                </div>
                <div class="optional-input-box describe">
                    <p>学生描述</p>
                    <input type="text" placeholder="请描述下自己，让老师更了解您的想法">
                </div>
            </div>
        </form>
        <button type="submit" class="register-btn"><router-link to="/studentRegisterSuccess">立即注册</router-link></button>
        <Footer link-href='Personal_center'></Footer>
    </div>
</template>

<script>
    import Footer from '../components/footer'
    import Header from '../components/header'
    export default {
        name: "studentRegistration",
        components: {
            Footer,
            Header
        }
    };
</script>

<style scoped lang='less'>
    @import "../styles/studentRegister.less";
</style>

