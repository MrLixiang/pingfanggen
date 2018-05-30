<template>
    <div>
        <Header attr-title="老师注册"></Header>
        <div class="teacher_top">
            <ul class="speed">
                <li><img src="../img/yuan1.png" alt=""></li>
                <li><img src="../img/yuan1.png" alt=""></li>
                <li><img src="../img/yuan1.png" alt=""></li>
                <li><img src="../img/yuan1.png" alt=""></li>
            </ul>
            <ul class="teacher_speed">
                <li>基本信息</li>
                <li>擅长科目</li>
                <li>教育和经历</li>
                <li>完成</li>
            </ul>
        </div>
        <div class="jiange"></div>
        <div class="finish">
            <div class="aa">
                <img src="../img/gou.png" alt="">
                <span>感谢你的注册</span>
            </div>
            <div class="bb">你可以去看个人首页<br/>或者去搜索想要的老师信息</div>
            <router-link tag='a' :to="'/home'"  class="hui">返回首页
                </router-link>
        </div>
        <Footer link-href="Personal_center"></Footer>
    </div>
    
</template>

<script>
import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
export default {
  name: "teacher_registration_finish",
    components:{
      Footer,Header
  }
};
</script>

<style scoped  lang="less">
@import "../styles/teacher_registration_finish.less";
</style>