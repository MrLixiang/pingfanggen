<template>
    <div class="wrap">
        <Header attr-title='帮助中心'></Header>
        <div class="banner">
            <img src="../img/help_banner.png" alt="">
       </div>
       <div class="details">
           <button class="parents"><router-link to="/helpParents">家长中心</router-link></button>
           <button class="teacher"><router-link to="/helpTeacher">教师中心</router-link></button>
       </div>
       <Footer link-href="helpCenter"></Footer>   
    </div>
</template>

<script>
    import Footer from '../components/footer.vue'
    import Header from '../components/header.vue'
    export default {
        name: "help",
        components: {
            Footer,
            Header
        }
    };
</script>

<style scoped lang="less">
    @import "../styles/helpCenter.less";
</style>