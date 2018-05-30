<template>
    <div>
        <Header attr-title="上课反馈"></Header>
        <div class="mian">
            <div class="teacher_top">
                <ul class="speed">
                    <li><img src="../img/yuan1.png" alt=""></li>
                    <li><img src="../img/yuan1.png" alt=""></li>
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
            <ul class="subject">
                <li>
                    <h3>教学科目</h3>
                    <span>语文</span>
                    <span>数学</span>
                    <span class="on">英语</span>
                    <span>物理</span>
                    <span>化学</span>
                    <span>生物</span>
                </li>
                <li>
                    <h3>艺术科目</h3>
                    <span>钢琴</span>
                    <span>提琴</span>
                    <span class="on">声乐</span>
                    <span>其他</span>
                </li>
                <li>
                    <h3>运动与休闲</h3>
                    <span>跑步</span>
                    <span>足球</span>
                    <span class="on">篮球</span>
                    <span>其他</span>
                </li>
                <li>
                    <h3>其他科目请输入</h3>
                    <div class="inport">
                        <b></b>
                        <input type="text">
                    </div>
                </li>
            </ul>
            <div class="teach">
                <h3>教学科目</h3>
                <span>大学</span>
                <span>高中</span>
                <span class="on">初中</span>
                <span>小学</span>
                <span>学前</span>
                <span>幼儿</span>
            </div>
            <input class="submit" type="submit" value="保存并继续">
        </div>
        <Footer linkHref="Personal_center"></Footer>
    </div>
</template>

<script>
    import teacher from '../scripts/teacherRegisters';
    export default teacher;
</script>

<style scoped lang="less">
    @import '../styles/teacherRegisters.less';
</style>