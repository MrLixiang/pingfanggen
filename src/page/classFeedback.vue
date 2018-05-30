<template>
    <div>
        <Header attr-title="上课反馈"></Header>
       <div class="body">
           <div class="main">
               <div class="user">
                   学生姓名 :<span>孙强</span>
               </div>
               <div class="user">
                   反馈时间 :<span>2018/01/05</span>
               </div>
               <div class="content">
                   <p class="feed-back">反馈内容</p>
                   <div>
                       <h3>【辅导内容】</h3>
                       <p>1、第十七章《欧姆定律》</p>
                       <p>2、第十八章《电功率》</p>
                   </div>
                   <div>
                       <h3>【发现问题】</h3>
                       <p>1、学生在公式变形及灵活运用方面不太好；</p>
                       <p>2、学生在这一块做得比较少；</p>
                       <p>3、答题时卷面方面学生注意太少，已指出；</p>
                       <p>4、学生的计算能力有待加强</p>
                   </div>
                   <div>
                       <h3>【进步之处】</h3>
                       <p>1、复杂电路图基本会看了；</p>
                       <p>2、对一些变形公式之类的，也慢慢学会了应用，熟练程度不太好，需要进行对应练习；</p>
                   </div>
                   <div>
                       <h3>【作业布置】</h3>
                       <p>1、中考真题</p>
                       <p>2、记忆公式</p>
                   </div>
               </div>
           </div>
       </div>
       <Footer linkHref="Personal_center"></Footer>
    </div>
</template>

<script>
    import classFeed from '../scripts/classFeedback';
    export default classFeed
</script>

<style scoped lang="less">
    @import '../styles/classFeedback.less';
</style>