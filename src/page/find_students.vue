<template>
    <div>
        <Header attr-title="学员库"></Header> 
        <ul class="top-nav">
            <li class="on">全部订单
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
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                    <span>订单号：<i>15401</i></span>
                </a>
                <div class="info">
                    <div class="subject">求教科目：<span>语文</span> </div>
                    <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                    <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                    <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                    <div class="time">发布时间：<span>2018/03/21</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                    <span>订单号：<i>15401</i></span>
                </a>
                <div class="info">
                    <div class="subject">求教科目：<span>语文</span> </div>
                    <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                    <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                    <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                    <div class="time">发布时间：<span>2018/03/21</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                    <span>订单号：<i>15401</i></span>
                </a>
                <div class="info">
                    <div class="subject">求教科目：<span>语文</span> </div>
                    <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                    <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                    <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                    <div class="time">发布时间：<span>2018/03/21</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                    <span>订单号：<i>15401</i></span>
                </a>
                <div class="info">
                    <div class="subject">求教科目：<span>语文</span> </div>
                    <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                    <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                    <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                    <div class="time">发布时间：<span>2018/03/21</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                    <span>订单号：<i>15401</i></span>
                </a>
                <div class="info">
                    <div class="subject">求教科目：<span>语文</span> </div>
                    <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                    <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                    <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                    <div class="time">发布时间：<span>2018/03/21</span></div>
                </div>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="../img/find-students-pic1.png" alt="">
                    <span>订单号：<i>15401</i></span>
                </a>
                <div class="info">
                    <div class="subject">求教科目：<span>语文</span> </div>
                    <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                    <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                    <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                    <div class="time">发布时间：<span>2018/03/21</span></div>
                </div>
            </li>
            
        </ol>
        <Footer link-href="home"></Footer>
    </div>
</template>


<script>
import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
export default {
  name: "find_students",
  components:{
      Footer,Header
  }
};
</script>

<style scoped  lang="less">
@import "../styles/find_students.less";
</style>