<template>
    <div class="main-prod">
        <div class="msg">
            <van-icon name="checked" class="success"/> 
            <p class="text">操作成功</p>
            <van-button type="primary" size="normal">默认按钮</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {}
        },
        components: {

        }
    }
</script>

<style scoped lang='scss'>
    .main-prod{
        width: 100%;
        .msg{
            padding-top: 100px;
            text-align: center;
            .success{
                color: #09BB07;
                font-size: 93px;
                width: 93px;
                height: 93px;
                 
            }
            .text{
                margin-top: 30px;
                margin-bottom: 25px;
                font-size: 20px;
                font-weight: 400;
            }
        }
    }
</style>