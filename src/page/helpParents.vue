<template>
    <div class="wrap">
       <Header attr-title='家长中心'></Header>
        <div class="banner">
            <img src="../img/help_banner.png" alt="">
        </div>
        <div class="content">
            <h5 class="title">帮助中心</h5>
            <div class="content-list">
                <dl class="list-info">
                    <dt>试听不满意可以换老师么？</dt>
                    <dd>由于学生对老师，老师对学生都有一个彼此适应的过程。如果试听不满意，我们给家长免费更换老师。</dd>
                </dl>
                <dl class="list-info">
                    <dt>家教老师可以试听吗？</dt>
                    <dd>平台的老师都可以试听的，如果不满意，我们免费试听，如果满意，家长留下老师，试听的课时计入老师报酬。</dd>
                </dl>
                <dl class="list-info">
                    <dt>家长入驻平台有什么好处？</dt>
                    <dd>1、可以不定期收到平台推送的孩子学习方法；</dd>
                    <dd>2、家长可以在“家长中心”页面查看老师信息；</dd>
                    <dd>3、平台安排老师写“上课计划”，可以查看；</dd>
                    <dd>4、可以接受老师写的上课反馈；</dd>
                    <dd>5、可以向平台反馈老师的情况；</dd>
                    <dd>6、可以向优秀老师点赞、评价；</dd>
                    <dd>7、可以添加学生的“学习成绩”，学生的进步全部记录；</dd>
                    <dd>8、其他权益；</dd>
                </dl>
                <dl class="list-info">
                    <dt>家长如何预约老师？</dt>
                    <dd>首页-快速请家教-我要预约-立即预约即可预约。【注意】如果家长没有入驻我们平台，需要先入驻再预约。</dd>
                </dl>
            </div>
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
    }
</script>

<style scoped lang='less'>
    @import "../styles/helpParents.less";
</style>