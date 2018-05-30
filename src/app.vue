<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style  lang="less">
    @import './styles/common.less';
    @import './styles/header.less';
    @import './styles/footer.less';
</style>