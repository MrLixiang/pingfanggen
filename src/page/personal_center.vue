<template>
    <div>
        <Header attr-title="个人中心"></Header> 
        <div class="bgi">
            <img src="../img/personal_center1.png" alt="">
        </div>
        <div class="chose">
            <button>
                <router-link tag='a' :to="{path: '/login', query:{type: true}}" >教员登录（我是老师）
                </router-link>
            </button>
            <button>
                <router-link tag='a' :to="{path: '/login', query:{type: false}}" >学员登录（我是学生）
                </router-link>
            </button>

        </div>
       <Footer link-href="Personal_center"></Footer>
    </div>
</template>

<script>
import Footer from '../components/footer'
import Header from '../components/header'
export default {
  name: "personal_center",
  components:{
      Footer,Header
  }
};
</script>

<style  lang="less">
@import "../styles/personal_center.less";
</style>