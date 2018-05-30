<template>
    <div>
        <Header attr-title="老师库"></Header>
        <ul class="top-nav">
            <li class="on" @click="print()">老师分类
                <span></span>
            </li>
            <li>学科分类
                <span></span>
            </li>
            <li>综合排序
                <span></span>
            </li>
            <li>条件筛选
                <span></span>
            </li>
        </ul>
        <ol class="list">
            <li v-for="item in teacherArr" :key='item.id'>
                <a href="javascript:;">
                    <img :src="item.imgSrc" alt="">
                </a>
                <div class="info">
                    <div class="introduce">{{item.name}}（<span v-text="item.sex"></span>）<i>编号{{item.number}}</i> <b v-text="item.school"></b></div>
                    <div class="describe">自我描述：<span v-text="item.description"></span> </div>
                    <div class="salary">薪水要求：<span>{{item.salary}}元/小时</span> <i v-text="item.time"></i></div>
                    <div class="pag"><span v-text="item.major"></span><span v-text="item.job"></span></div>
                </div>
            </li>
            <!-- <li>
                <a href="javascript:;">
                    <img src="../img/find-teachters-pic1.png" alt="">
                </a>
                <div class="info">
                    <div class="introduce">刘教员（<span>男</span>）<i>编号9079</i> <b>天津科技大学</b></div>
                    <div class="describe">自我描述：<span>本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...</span> </div>
                    <div class="salary">薪水要求：<span>60元/小时</span> <i>2018/03/21</i></div>
                    <div class="pag"><span>数学教育专业</span><span>在职初中教师</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-teachters-pic2.png" alt="">
                </a>
                <div class="info">
                    <div class="introduce">刘教员（<span>男</span>）<i>编号9079</i> <b>天津科技大学</b></div>
                    <div class="describe">自我描述：<span>本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...</span> </div>
                    <div class="salary">薪水要求：<span>60元/小时</span> <i>2018/03/21</i></div>
                    <div class="pag"><span>数学教育专业</span><span>在职初中教师</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-teachters-pic3.png" alt="">
                </a>
                <div class="info">
                    <div class="introduce">刘教员（<span>男</span>）<i>编号9079</i> <b>天津科技大学</b></div>
                    <div class="describe">自我描述：<span>本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...</span> </div>
                    <div class="salary">薪水要求：<span>60元/小时</span> <i>2018/03/21</i></div>
                    <div class="pag"><span>数学教育专业</span><span>在职初中教师</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                </a>
                <div class="info">
                    <div class="introduce">刘教员（<span>男</span>）<i>编号9079</i> <b>天津科技大学</b></div>
                    <div class="describe">自我描述：<span>本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...</span> </div>
                    <div class="salary">薪水要求：<span>60元/小时</span> <i>2018/03/21</i></div>
                    <div class="pag"><span>数学教育专业</span><span>在职初中教师</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                </a>
                <div class="info">
                    <div class="introduce">刘教员（<span>男</span>）<i>编号9079</i> <b>天津科技大学</b></div>
                    <div class="describe">自我描述：<span>本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...</span> </div>
                    <div class="salary">薪水要求：<span>60元/小时</span> <i>2018/03/21</i></div>
                    <div class="pag"><span>数学教育专业</span><span>在职初中教师</span></div>
                </div>
            </li> -->
        </ol>
        <Footer link-href="home"></Footer>
    </div>
    
</template>

<script>
    import findTeachers from '../scripts/find-teachers'
    export default findTeachers
</script>

<style scoped  lang="less">
@import "../styles/find_teachters.less";
</style>