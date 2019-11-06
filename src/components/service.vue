<template>
    <ul class="serviceList">
        <li><span>★</span>30天无忧退货</li>
        <li><span>★</span>48小时快速退款</li>
        <li><span>★</span>满88元免邮费</li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" >
.serviceList{
    height: .4rem;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        flex: 1 ;
        color: #666;
        font-size: .14rem;
        text-align: center;
        span{
            color: red;
            margin-right: .07rem;
            font-size: .15rem;
        }
    }
}
</style>