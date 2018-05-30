<template>
    <div>
        <Header attr-title="清华海圃"></Header> 
        <div class="main">
            <dl class="bottom">
                <dt><img src="../img/banner.png" alt=""></dt>
                <dd>
                    <h6>快速请家教</h6>
                    <p>我是学生</p>
                    <router-link to="/find_teachters">教师中心</router-link>
                </dd>
                <dd>
                    <h6>我要做学员</h6>
                    <p>我是老师</p>
                    <router-link to="/find_students">学生中心</router-link>
                </dd>
            </dl>
            <div class="teachers">
                <div class="teacher_top container">
                    <span>教员库</span>
                    <router-link to="/find_teachters">更多</router-link>
                </div>
                <div class="teacher">
                    <div class="top"> 
                        <img class="left" src="../img/touxiang.png" alt="">
                        <div class="right">
                            <div class="right_top">
                                <h6>刘教员（男）</h6>
                                <span>编号9079</span>
                                <p>天津科技大学</p>
                            </div>
                            <p class="myself">
                                <span>自我描述：</span>
                                本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...
                            </p>
                            <div class="right_bottom">
                                <span>教学教育专业</span>
                                <span>在职初中教师</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                    <router-link to="/teacher_message"><button>了解并预约</button></router-link>
                    </div>
                </div>
                <div class="teacher">
                    <div class="top"> 
                        <img class="left" src="../img/touxiang.png" alt="">
                        <div class="right">
                            <div class="right_top">
                                <h6>刘教员（男）</h6>
                                <span>编号9079</span>
                                <p>天津科技大学</p>
                            </div>
                            <p class="myself">
                                <span>自我描述：</span>
                                本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...
                            </p>
                            <div class="right_bottom">
                                <span>教学教育专业</span>
                                <span>在职初中教师</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                    <router-link to="/teacher_message"><button>了解并预约</button></router-link>
                    </div>
                </div>
            </div>
            <div class="students">
                <div class="student_top container">
                    <span>学员库</span>
                    <router-link to="/find_students">更多</router-link>
                </div>
                 <ol class="list">
                <li>
                    <a href="javascript:;">
                        <img src="../img/touxiang.png" alt="">
                        <span>订单号：<i>15401</i></span>
                    </a>
                    <div class="info">
                        <div class="subject">求教科目：<span>语文</span> </div>
                        <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                        <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                        <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                        <div class="time">发布时间：<span>2018/03/21</span></div>
                    </div>
                     <div class="bottom">
                        <router-link to="/studentInfo"><button>了解并预约</button></router-link>
                    </div>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../img/touxiang.png" alt="">
                        <span>订单号：<i>15401</i></span>
                    </a>
                    <div class="info">
                        <div class="subject">求教科目：<span>语文</span> </div>
                        <div class="require">学员要求：<span>女&nbsp;&nbsp;&nbsp;在职小学教师</span> </div>
                        <div class="survey">学员概况：<span>男&nbsp;&nbsp;&nbsp;五年级</span> </div>
                        <div class="pag"><span>河东体育场</span><span>150元一小时</span></div>
                        <div class="time">发布时间：<span>2018/03/21</span></div>
                    </div>
                    <div class="bottom">
                        <router-link to="/studentInfo"><button>了解并预约</button></router-link>
                    </div>
                </li>
            </ol>
            </div>
            <div class="recruits">
                 <div class="recruit_top container">
                    <span>招聘信息</span>
                    <router-link to="/introduction">更多</router-link>
                </div>
                <home-list></home-list>  
            </div>
            <div class="contact">
                <p>18911595646 (<span>张老师</span>)</p>
            </div>
        </div>
        <Footer link-href="home"></Footer>  
    </div>
</template>

<script>
import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
import homeList from '../components/homeList.vue'
export default {
  name: "wwww",
  components:{
      Footer,Header,homeList
  }
};
</script>

<style scoped lang="less">
@import "../styles/home.less";
</style>