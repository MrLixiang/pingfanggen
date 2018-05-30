<template>
    <div>
        <Header attr-title="学员信息"></Header>
        <div class="body">
            <ul class="text">
                <li>订单号：<span>15041</span></li>
                <li>联系人：<span>吴先生</span></li>
                <li>学员情况：<span>男&nbsp;&nbsp;&nbsp;&nbsp;五年级</span></li>
                <li>学员要求：<span>在职小学老师</span></li>
                <li>学员情况概括：<span>听话、好学</span></li>
                <li>授课区域：<span>河东体育场</span><i class="map">查看地图</i></li>
                <li>报酬：<span>150元一小时</span></li>
                <li>可授课时间：<span>周日</span></li>
                <li>发布时间：<span>2018/03/05</span></li>
            </ul>
            <p class="take-care">请注意，若你对此订单感兴趣，请立即申请！</p>
            <input class="submit" type="submit" value="立即申请">
        </div>
        <Footer linkHref="home"></Footer>
    </div>
</template>

<script>
    import stydentInfo from '../scripts/studentInfo';
    export default stydentInfo;
</script>

<style scoped lang="less">
    @import '../styles/studentInfo.less';
</style>