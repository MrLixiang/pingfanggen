<template>
    <div>
         <div class="header">
            <div class="top">
                <div class="back" @click="goBack()">
                    <button class="goback">返回</button>
                </div> 
                <h5 v-text="attrTitle"></h5>
                <button class="more"></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'headerComponent',
        props:{
            attrTitle:String,
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="less">
@import "../styles/header.less";
</style>