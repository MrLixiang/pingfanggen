<template>
    <div>
     <div class="box">
        <Header attr-title="老师信息"></Header>
      <div class="message">
          <img src="../img/teacher_message_1.png" alt="">
          <div>
              <p>教员编号: <span>9079</span></p>
              <p>教员姓名: <span>刘教员</span><b>(男)</b></p>
          </div>
      </div>
      <div class="personal-data">
          <p>来自省份:<span>黑龙江</span></p>
          <p>出生年月:<span>1985/01/05</span></p>
          <p>住址:<span>天津市河东区</span></p>
          <p>高校:<span>天津科技大学</span></p>
          <p>学历:<span>研究生毕业</span></p>
          <p>目前身份:<span>在职初中教师</span></p>
          <p>教龄:<span>3年</span></p>
          <p>专业:<span>数学教育</span></p>
          <p>学历:<span>2018/03/05</span></p>
          <p>认证情况:<span class="on">已经通过审核</span></p>
      </div>
      <div class="describe">
          <p>可教授科目:<span>小学全科、初中全年级语文、初中全年级英语、高中文综、高中全年级语文、高中全年级英语、初级日语、对外汉语、钢琴；</span></p>
          <p>自我描述:<span> 小学，初中都作为班级里的班长，位列班级前三名，年级前十名，高中在杨村一中学习，学习成绩优异。高考高分项是数学，化学，中考高分项数学，物理，化学和英语，带过5份家教，小学和初中都有代课经历，本人性格好，沟通能力强。</span></p>
          <p>可授区域:<span>河东</span></p> 
          <p>可辅导方式:<span>本人上门</span></p> 
          <p>所获证书:<span>英语四级</span></p> 
          <p>家教经历:<span> 1、2017年8月，武清区初一数学，期终学员从全班第20名上升至第10名。数学分数从56分，上升至98分。<br>
2、2017年11月，和平区小学五年级数学，期终学员学员从全班第15名上升至第3名。</span></p>
          <p>薪水要求:<span class="money">150元/小时</span></p>
         <div class="subscribe">
          <a href="javascript:;">在线预约</a>
          <b>收藏</b>
        </div>
      </div>
      <!-- <ul class="footer">
            <li  class="on"><span></span>首页</li>
            <li><span></span>企业介绍</li>
            <li><span></span>帮助中心</li>
            <li><span></span>个人中心</li>
        </ul> -->
        <Footer link-href="home"></Footer>
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
//@import'../styles/teacher_message.less';
.box{
  background-color:#f1f1f1; 
  
  
}

  .message{
      overflow: hidden;
      margin-top: 80px;
      background: url("../img/teacher_message_2.png") no-repeat;
     // background-size: 100% 200px;
      width: 100%;
      height:200px;
      img{
         width: 140px;
         height: 140px;
         margin: 30px 38px 0 30px;
         float: left;
        
      }
      div{
         float: left;
         height: 100%;
         margin-top: 50px;
         p{
             margin: 0 0 20px 0;
             color: #ffffff;
             font-size: 32px;
             span{
                 color: #ffffff;
             font-size: 32px;
                 margin:0 20px 0 20px;
             }
             b{
             color: #ffffff;
             font-size: 32px;
             }
         }
      }
  }
  .personal-data{
      border:1px solid #cccccc;
      border-radius: 8px;
      margin: 18px 28px 20px;
      background-color: #ffffff;
      padding: 0 6px 0 14px;
      p{
          margin: 0;
          padding-left: 8px;
          border-bottom: 1px solid  #cccccc;
          line-height: 68px;
          color: #333333;
          font-size: 32px;
          span{
              color: #777777;
              font-size:32px;
              margin-left:12px;
          }
          .on{
              color: #01c683;
          }
      }
      p:last-child{
        border: none
      }

  }
  .describe{
       padding: 0 12px 0;
      margin: 0 28px 120px;
      border:1px solid #cccccc;
      border-radius: 8px;
      background-color: #ffffff;
      p{
          margin: 0;
          text-align: justify;
          padding: 20px 0;
         // padding-bottom: 30px;
          border-bottom: 1px solid  #cccccc;
          font-size: 32px;
          color: #333333;
          span{
              margin-left:10px;
              color: #999999;
              font-size: 32px;
              text-align: justify
          }
      }
      p:first-child{
         span{
             color: #01c683;
         }
      }
      .money{
          color: #e80000;
      }
    
   
      
      .subscribe{
          overflow: hidden;
          margin: 26px 0 18px;
          a{
              display: block;
              text-decoration: none;
              float: left;
              width: 390px;
              line-height: 80px;
              background-color: #00cc35;
              color: #ffffff;
              font-size: 32px;
              text-align: center;
              border-radius: 6px;
          }
          b{
             display: block;
             background: url("../img/teacher_message_3.png") 130px 16px no-repeat;
             background-size: 44px 44px;
             float: right;
             width:174px;
             padding-left: 56px;
             line-height: 80px;
             font-size: 32px;
             color: #333333;
             background-color: #cccccc;
              border-radius: 6px;
          }
      }
  }
  

 



</style>