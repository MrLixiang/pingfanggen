<template>
    <div>
        <ul class="recruit container">
            <router-link to="/introduction">
                <li v-for="item in list" :key="item.id" >
                    <img class="left" :src="item.imgSrc" alt="">
                    <div class="right">
                        <h6>{{item.title}}</h6>
                        <p>{{item.about}}</p>
                        <span>{{item.date}}</span>
                    </div>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          imgSrc: require("../img/tupian.png"),
          title: "青海花样少年语言艺术中心",
          about:"招聘教务工作的人员一名，工资底薪+提成+培训，周一大宋的好i收到了哈看机会",
          date: "2018-03-09"
        },
        {
          imgSrc: require("../img/tupian.png"),
          title: "皇家马德里学院",
          about:"招聘教务工作的人员一名，工资底薪+提成+培训，周一大宋的好i收到了哈看机会",
          date: "2018-03-09"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../styles/home.less";
</style>