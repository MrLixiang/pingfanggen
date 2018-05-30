<template>
    <div>
        <Header attr-title="企业介绍"></Header>
        <div class="banner"><img src="../img/intro_1.png" alt="intro_1.png"></div>
        <div class="about-us">
            <h2>关于我们</h2>
            <p>青海华普教育是一家从事家教咨询、家教介绍、家教服务的机构</p>
            <p>本中心本着“立足学生，服务学生”的理念，统一对家教老师进行系统化的管理，对家教过程进行整体把控，做到家教情况实时反馈</p>
            <p>本中心的家教管理系统，可以实现老师上课提前做计划，课后及时做反馈总结，家长可以对老师进行评价等多种业务功能。</p>
            <p>我们的目的是集结更多的优质教师资源，实现家教市场的规范化、有序化，实现家教效果的全程掌控。</p>
            <p>另外就是把一些优质的教育资源实现互通、共享，最后达到“找家教，就选华浦教育”，华普认证的老师放心、靠谱的整体目标</p>
            <p>欢迎家长朋友和我们取得联系</p>
            <p> 电话：18297121393（刘老师）</p>
        </div>
        <div class="opinion">
            <h2>意见反馈</h2>
            <div><span>标题：</span><input type="text"></div>
            <div class="assess"><span>意见：</span><textarea name=""></textarea></div>
            <div><span>联系方式：</span><input type="text"></div>
        </div>
        <input class="submit" type="submit" value="立即提交">

        <Footer link-href="introduction"></Footer>  
    </div>
</template>

<script>
    import intro from '../scripts/introduction';
    export default intro
</script>

<style scoped lang="less">
    @import '../styles/introduction.less';
</style>