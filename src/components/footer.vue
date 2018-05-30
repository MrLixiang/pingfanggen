<template>
    <div>
        <ul class="footer">
            <li v-for="item in links" :key="item.id" :class="linkHref == item.href ?'on':''">
                <router-link :to="item.href"><span></span>{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "footerComponent",
  props: ["linkHref"],
  data() {
    return {
      links: [
        {
          href: "home",
          title: "首页"
        },
        {
          href: "introduction",
          title: "企业介绍"
        },
        {
          href: "helpCenter",
          title: "帮助中心"
        },
        {
          href: "Personal_center",
          title: "个人中心"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import '../styles/footer.less';
</style>