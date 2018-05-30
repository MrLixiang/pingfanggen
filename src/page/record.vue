<template>
    <div>
        <div class="header">
            <div class="top">
                <div class="back">
                    <button class="goback">返回</button>
                </div> 
                <h5>青海华圃</h5>
                <button class="more"></button>
            </div>
        </div>
        <ul class="record">
            <li>
                <p>家长称呼：<span>张伟海</span></p>
                <p>联系电话：<span>18911595666</span></p>
                <p>民族：<span>汉</span></p>
                <p>接单方式：<span>平台安排</span></p>
                <p>家庭住址：<span>河北省邯郸市丛台区柳颐小区</span></p>
                <p>课时费：<span>100元/小时</span></p>
                <p>派单日期：<span>2018/05/21</span></p>
            </li>
             <li>
                <p>家长称呼：<span>张伟海</span></p>
                <p>联系电话：<span>18911595666</span></p>
                <p>民族：<span>汉</span></p>
                <p>接单方式：<span>平台安排</span></p>
                <p>家庭住址：<span>河北省邯郸市丛台区柳颐小区</span></p>
                <p>课时费：<span>100元/小时</span></p>
                <p>派单日期：<span>2018/05/21</span></p>
            </li>
        </ul>
        <Footer link-href="helpCenter"></Footer>  
    </div>
</template>

<script>
import Footer from '../components/footer.vue'
export default {
  name: "wwww",
  components:{
      Footer
  }
};
</script>

<style scoped lang="less">
@import "../styles/record.less";
</style>