<template>
    <div>
      <div class="box">
            <Header attr-title="老师中心"></Header>
        <div class="message">
          <img src="../img/teacher_center_2.png" alt="">
          <div>
              <p>孤独求败1</p>
              <p>签名: <span>有志者事竟成</span></p>
          </div>
      </div>
       <ul class="nav">
           <li> <img src="../img/teacher_center_3.png" alt=""> <p>我的工资</p> </li>
           <li><img src="../img/teacher_center_4.png" alt=""> <p>我的订单</p></li>
           <li><img src="../img/teacher_center_5.png" alt=""> <p>我的评价</p></li>
       </ul>
       <div class="text">
          <ul>
              <li><router-link to="/teacherReg"><div><img src="../img/teacher_center_6.png" alt="">上课计划</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
              <li><router-link to="/record"><div><img src="../img/teacher_center_7.png" alt="">上课记录</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
              <li><router-link to="/find_teachters"><div><img src="../img/teacher_center_8.png" alt="">考试管理</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
              <li><router-link to="/feedback"><div><img src="../img/teacher_center_9.png" alt="">上课反馈</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
         </ul>
            <ul>
              <li><router-link to="/find_teachters"><div><img src="../img/teacher_center_10.png" alt="">学生家长</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
              <li><router-link to="/find_teachters"><div><img src="../img/teacher_center_11.png" alt="">我的学生</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
         </ul>
            <ul>
              <li><router-link to="/find_teachters"><div><img src="../img/teacher_center_12.png" alt="">成长阅读</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
              <li><router-link to="/find_teachters"><div><img src="../img/teacher_center_13.png" alt="">合作伙伴</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
              <li><router-link to="/find_teachters"><div><img src="../img/teacher_center_14.png" alt="">考试管理</div><img src="../img/teacher_center_15.png" alt=""></router-link></li>
          </ul>
       </div>
        <!-- <ul class="footer">
            <li><span></span>首页</li>
            <li><span></span>企业介绍</li>
            <li><span></span>帮助中心</li>
            <li class="on"><span></span>个人中心</li>
        </ul> -->
         <Footer link-href="Personal_center"></Footer>
      </div>
    </div>
</template>

<script>
  import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
    export default {
        name:"qwe",
        components:{
             Footer,Header
        }
    };
</script>

<style scoped lang="less">
*{
    padding: 0;
    margin: 0;
}
    .box{
        background-color: #f1f1f1;
    .message{
        margin-top: 80px;
        overflow: hidden;
        background: url("../img/teacher_center_1.png") no-repeat;
        background-size: 100% 240px;
        width:100%;
        height:240px;
        img{
           width: 140px;
           height: 140px;
           margin: 50px 28px 50px 30px;
           float: left;   
        }
        div{
           float: left;
           height: 100%;
           margin-top: 70px;
           p{
               margin: 0 0 20px 0;
               color: #ffffff;
               font-size: 30px;
               span{
                   color: #ffffff;
                 font-size: 30px;
                   margin:0 20px 0 10px;
               }
             
           }
        }
    }
    .nav{
        overflow: hidden;
        margin-bottom: 20px;
        padding: 0;
          height: 100px;
          background: #ffffff;
       li{
           list-style: none;
           float: left;
           width: 250px;
           height: 100px;
           //margin: 0 8px;
          font-size: 0;
           color: #333333;
           img{
               display: block;
             width: 38px;
             height: 38px;
             margin: 10px auto 6px;
           }
           p{
              text-align: center;
               font-size: 32px;
               color: #333333;
           }
       }
    }
    .text{
        margin-bottom: 100px;
        ul{
            background: #ffffff;
            margin-bottom: 18px;
            padding: 0 30px;
            li{
                list-style: none;
                line-height: 78px;
                height: 78px;
                overflow: hidden;
                border-bottom: 1px solid #cccccc;
                a{
                    display: block;
                    overflow: hidden;
   img{
                    float: right;
                    width: 16px;
                    height: 28px;
                    position: relative;
                    top: 25px;
                }
                div{
                    float: left;
                    font-size: 32px;
                    color: #333333;
                img{
                    float: none;
                    width: 44px;
                    height: 44px;
                    position: relative;
                    top: 6px;
                    margin-right: 20px;
                }
                }
                }
              
               
            }
            li:last-child{
              border-bottom: none;
            }
        }
    }
  
   
}

    
</style>