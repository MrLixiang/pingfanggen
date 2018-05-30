<template>
    <div>
        <Header :attr-title="loginPersion"></Header>  
        <form>
            <div class="choice">
                <a href="javascript:;" v-bind:class="isTeacher ? 'on': ''"  @click="teacherLogin()">{{teacher}}
                    <span></span>
                </a>
                <a href="javascript:;" v-bind:class="isTeacher ? '': 'on'"  @click="studentLogin()">{{student}}
                    <span></span>
                </a>
            </div>
            <div class="info">
                <input type="text" placeholder="手机号/用户名">
                <input type="password" placeholder="密码">
            </div>
            <button v-text="loginPersion" v-bind:class="isTeacher ? '':'on1'">学员登录</button>
            <div class="gg">
         
                <!-- <a href="javascript:;" @click="registerFn()">立即注册</a> -->
                <router-link tag='a' :to="isTeacher ? '/teacherRegister' : '/studentRegister'" >立即注册
                
                </router-link>
                <router-link tag='a' :to="''" >忘记密码
        
                </router-link>

                </div>
        </form>
        <Footer link-href="Personal_center"></Footer>
    </div>
</template>

<script>

import Login from '../scripts/login'

export default Login
</script>

<style scoped  lang="less">
@import "../styles/login.less";
</style>