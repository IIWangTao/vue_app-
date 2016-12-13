<template>
    <div>
        <div class="header" v-if="datas">
            <div class="info">
                <div class="pic">

                </div>
                <div class="right">
                    <div class="one">
                        <span></span>
                        <span>{{datas.name}}</span>
                    </div>
                    <div class="two">
                        <span>{{datas.description}}</span>/
                        <span>{{datas.deliveryTime}}分钟送到</span>
                    </div>
                    <div class="three">
                        <span></span>
                        <span>{{datas.supports[0].description}}</span>
                    </div>
                </div>
              <div class="btn" v-on:click="change"><span>5个</span><span>></span></div>
            </div>

            <div class="message"><span></span>{{datas.bulletin}}</div>
            <div class="filter"></div>
        </div>
        <div class="mask" v-show="isShow">
            <div class="box-top">
                <div class="top-title">{{datas.name}}</div>
                <div class="top-star">
                  <span></span><span></span><span></span><span></span><span style="margin-right: 0"></span>
                </div>
            </div>
            <div class="box-cen">
                <div class="span">
                    <span></span>
                    <span>优惠信息</span>
                    <span></span>
                </div>
                <ul>
                    <li v-for="item in datas.supports">
                        <span v-if="(item.type == '0')">
                            <img src="../../../resource/img/decrease_1@2x.png" alt="">
                        </span>
                        <span v-if="(item.type == '1')">
                            <img src="../../../resource/img/discount_1@2x.png" alt="">
                        </span>
                        <span v-if="(item.type == '2')">
                            <img src="../../../resource/img/special_1@2x.png" alt="">
                        </span>
                        <span v-if="(item.type == '3')">
                            <img src="../../../resource/img/invoice_1@2x.png" alt="">
                        </span>
                        <span v-if="(item.type == '4')">
                            <img src="../../../resource/img/guarantee_1@2x.png" alt="">
                        </span>
                        <span>{{item.description}}</span>
                    </li>
                </ul>
            </div>
            <div class="box-cen">
                <div class="span">
                    <span></span>
                    <span>商家公告</span>
                    <span></span>
                </div>
                <p>{{datas.bulletin}}</p>
            </div>
            <div class="box-btm" v-on:click="change">
                <span>×</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
            change(){
//                console.log(this.isShow);
                this.isShow = !this.isShow;
            },
        },
        computer:{

        },
        beforeCreate(){
            console.log("组件刚被创建")
        },
        created(){
            this.$http.get("http://10.80.13.92:8080/api/seller")
                .then(function(response){
//                    console.log(response)
                    return response.json()
                }).then(function(response){
                if(response.success ===1){
                    this.datas = response.data;
                }
            })
        },

        data(){
            return{
                datas:"",
                isShow:false
            }
        }
    }
</script>

<style>
    body{
        margin:0;
        padding:0;
    }
    .header{
        color: #fff;
        background-color: rgba(7,17,27,0.5);
        position: relative;
    }
    .info .pic{
        display: inline-block;
        width: 64px;
        height: 64px;
        margin:24px 16px 16px 24px;
        background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg") 0 0 no-repeat;
        border-radius: 4px;
        background-size: cover;
    }
    .info .right{
        display: inline-block;
        margin: 24px 0 0;
        vertical-align: top;
    }
    .right .one{
        font-size: 18px;
        font-weight: bold;
        line-height: 18px;
    }
    .right .one span{
        display: inline-block;

    }
    .right .one span:first-child{
        background: url("../../../resource/img/brand@2x.png");
        width: 30px;
        height: 18px;
        background-size: 30px 18px;
        margin-bottom: 8px;
    }
    .right .one span:last-child{
        vertical-align: top;
    }
    .right .two{
        font-size: 12px;
        font-weight: 200;
        line-height: 12px;
        margin-bottom: 10px;
    }
    .right .three{
        font-size: 10px;
        font-weight: 200;
        line-height: 12px;
    }
    .right .three span{
        float: left;
        display: inline-block;
    }
    .right .three span:first-child{
        background: url("../../../resource/img/decrease_1@2x.png") 0 0 no-repeat;
        width:12px;
        height:12px;
        background-size: 12px 12px;
        margin-right: 4px;
    }
    .header .message{
        height: 28px;
        line-height: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
        padding: 0 12px;
        background: rgba(7,17,27,0.2);
        vertical-align: top;
    }
    .message span{
        float: left;
        line-height: 28px;
        width: 30px;
        height: 18px;

    }
    .message span:first-child{
        background: url("../../../resource/img/bulletin@2x.png") 0 0 no-repeat;
        background-size: cover;
        margin-top: 5px;
        margin-right: 6px;
    }
    .filter{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index: -1;
        background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg") 0 0 no-repeat;
        background-size: cover;
        -webkit-filter:blur(5px);
    }
    .btn{
        height:24px;
        width:48px;
        position: absolute;
        right: 12px;
        top:69px;
        background-color: rgba(0,0,0,0.2);
        border-radius: 8px;
    }
    .btn span{
        float: left;
        font-size: 10px;
        font-weight: 200;
        line-height: 24px;
    }
    .btn span:first-child{
        margin-right: 2px;
        margin-left: 10px;
    }
    .btn span:last-child{
        margin-top: 2px;
    }
    .mask{
        position: absolute;
        width:100%;
        min-height:100%;
        left:0;
        top:0;
        color: rgb(255,255,255);
        text-align: center;
        background-color:rgba(7,17,27,0.8);
    }
    .mask .box-top .top-title{
        padding-top: 64px;
        padding-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
    }
    .mask .box-top .top-star{
        height: 24px;
        padding-bottom: 28px;
    }
    .mask .box-top .top-star span{
        display: inline-block;
        width:24px;
        height:24px;
        margin-right: 24px;
        background: url("../../../resource/img/star24_on@2x.png") 0 0 no-repeat;
        background-size: 24px 24px;
    }
    .mask .box-top .top-star span:last-child{
        background: url("../../../resource/img/star24_off@2x.png") 0 0 no-repeat;
        background-size: 24px 24px;
    }
    .span{
        height: 14px;
        line-height: 14px;
    }
    .span span:nth-child(2n-1){
        display: inline-block;
        width:110px;
        border: 1px solid rgba(255,255,255,0.2);
        line-height: 14px;
        vertical-align: middle;
    }
    .span span:nth-child(2){
        display: inline-block;
        font-size: 14px;
        padding-left: 12px;
        padding-right: 12px;
        font-weight: 700;
        color: rgb(255,255,255);
        line-height: 14px;
    }
    .box-cen ul{
        list-style: none;
        margin:0;
        padding: 0;
        margin-left: 36px;
        margin-top: 18px;
        margin-bottom: 28px;
    }
    .box-cen ul li{
        font-size: 12px;
        font-weight: 200;
        line-height: 24px;
        text-align: left;
    }
    .box-cen ul li span:first-child{
        display: inline-block;
        margin-right: 6px;
        /**/
        width:16px;
        height: 16px;
        vertical-align: middle;
    }
    .box-cen ul li span:last-child{
        display: inline-block;
        height: 16px;
        line-height: 32px;
    }
    .box-cen ul li span:first-child img{
      width: 16px;
      height: 16px;
    }
    .box-cen p{
        display: inline-block;
        margin-left: 36px;
        margin-right: 36px;
        margin-top: 24px;
        text-align: left;
        font-weight: 200;
        font-size: 12px;
        line-height: 24px;
    }
    .box-btm{
      position: absolute;
      bottom:32px;
      left: 50%;
      margin-left: -16px;
    }
    .box-btm span{
      margin-top: 32px;
      font-size: 32px;
      color: rgba(255,255,255,0.5);
    }
</style>
