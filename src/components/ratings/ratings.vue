<template>
    <div class="ratings">
        <div class="box">
            <div class="ra-top">
                <div class="left">
                    <h2 class="score">4.2</h2>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家69.2%</div>
                </div>
                <div class="right">
                    <div class="score-box">
                        <span class="title">服务态度</span>
                        <div class="star">
                            <span class="full"></span>
                            <span class="full"></span>
                            <span class="full"></span>
                            <span class="full"></span>
                            <span class="zero"></span>
                        </div>
                        <span class="score">4.1</span>
                    </div>
                    <div class="score-box">
                        <span class="title">商品评价</span>
                        <div class="star">
                            <span class="full"></span>
                            <span class="full"></span>
                            <span class="full"></span>
                            <span class="full"></span>
                            <span class="zero"></span>
                        </div>
                        <span class="score">4.3</span>
                    </div>
                    <div class="service">
                        <span class="title">送达时间</span>
                        <span class="time">38分钟</span>
                    </div>
                </div>
            </div>
            <div class="split"></div>
            <div class="ratingselect">
                <div class="ratings-type ">
                    <span class="block positive active">全部<span class="count">24</span></span>
                    <span class="block positive">满意<span class="count">18</span></span>
                    <span class="block negative">不满意<span class="count">6</span></span>
                </div>
                <div class="switch">
                    <span class="icon"></span>
                    <span class="text">只看有内容的评价</span>
                </div>
            </div>
            <div class="rating-wrapper">
                <ul>
                    <li class="rating-item" v-for="rating in datas">
                        <div class="avatar">
                            <img v-bind:src="rating.avatar" alt="" width="28" height="28">
                        </div>
                        <div class="content">
                            <h2 class="name">{{rating.username}}</h2>
                            <div class="star">
                                <span class="full"></span>
                                <span class="full"></span>
                                <span class="full"></span>
                                <span class="full"></span>
                                <span class="full"></span>
                                <span class="delivery">{{rating.deliveryTime}}</span>
                            </div>
                            <p class="text">{{rating.text}}</p>
                            <div class="recommend">
                              <!--<span class="item" v-for="rec in rating.recommend">{{rating.recommend}}</span>-->
                            </div>
                            <div class="time">{{rating.rateTime}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default{
      beforeCreate(){
          console.log("组件刚被创建")
      },
      created(){
          this.$http.get("http://10.80.13.92:8080/api/ratings")
              .then(function(response){
                  console.log(response.data)
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
          }
      }
  }
</script>

<style>
    .ratings{
        display: flex;
        width:100%;
        position: absolute;
        top:174px;
        bottom:0;
        overflow: auto;
    }
    .ratings .box{
        width: 100%;
    }
    .ratings .ra-top{
        display: flex;
        padding: 18px 0;
    }
    .ratings .ra-top .left{
        -webkit-box-flex: 0;
        flex: 0 0 137px;
        width:137px;
        border-right: 1px solid rgba(7,17,27,0.1);
        text-align: center;
    }
    .ratings .ra-top .left .score{
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color:rgb(255,153,0);
    }
    .ratings .ra-top .left .title{
        margin-bottom: 8px;
        line-height:12px;
        font-weight: 700;
        font-size: 12px;
        color: rgb(7,17,27);
    }
    .ratings .ra-top .left .rank{
        line-height: 10px;
        font-weight: 700;
        font-size:10px;
        color:rgba(7,17,27,0.5);
    }
    .ratings .ra-top .right{
        -webkit-box-flex: 1;
        flex: 1;
        padding: 6px 0 6px 24px;
    }
    .ratings .ra-top .right .score-box{
        margin-bottom: 8px;
        font-size: 0;
    }
    .ratings .ra-top .right .score-box .title{
        display: inline-block;
        line-height: 18px;
        vertical-align: top;
        font-size: 12px;
        color: rgb(7,17,27);
    }
    .ratings .ra-top .right .score-box .star{
        display: inline-block;
        margin: 0 12px;
        vertical-align: top;
    }
    .ratings .ra-top .right .score-box .star .full{
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background: url("../../../resource/img/star24_on@2x.png") 0 0 no-repeat;
        background-size: 15px 15px;
    }
    .ratings .ra-top .right .score-box .star .zero{
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url("../../../resource/img/star24_off@2x.png") 0 0 no-repeat;
        background-size: 15px 15px;
    }
    .ratings .ra-top .right .score-box .score{
        display: inline-block;
        line-height: 18px;
        vertical-align: top;
        font-size: 12px;
        color:rgb(255,153,0);
    }

    .ratings .ra-top .right .service{
        font-size: 0;
    }
    .ratings .ra-top .right .service .title{
        line-height: 18px;
        font-size: 12px;
        color: rgb(7,17,27);
    }
    .ratings .ra-top .right .service .time{
        margin-left: 12px;
        font-size: 12px;
        color: rgb(147,153,159);
    }
    .ratings .split{
        width:100%;
        height: 16px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        border-top: 1px solid rgba(7,17,27,0.1);
        background: #f3f5f7;
    }
    .ratings .ratingselect .ratings-type {
        padding: 18px 0;
        margin: 0 18px;
        position: relative;
        font-size: 0;
    }
    .ratings .ratingselect .ratings-type:after {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid rgba(7,17,27,0.1);
        content: ' ';
    }
    .ratingselect .ratings-type .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: #4d555d;
    }
    .ratingselect .ratings-type .block.active {
        color: #fff;
    }
    .ratingselect .ratings-type .block .count {
        margin-left: 2px;
        font-size: 8px;
    }
    .ratingselect .ratings-type .block.positive {
        background: rgba(0,160,220,0.2);
    }
    .ratingselect .ratings-type .block.positive.active {
        background: #00a0dc;
    }
    .ratingselect .ratings-type .block.negative {
        background: rgba(77,85,93,0.2);
    }
    .ratingselect .ratings-type .block.negative.active {
        background: #4d555d;
    }
    .ratingselect .switch {
        padding: 12px 18px;
        line-height: 24px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        color: #93999f;
        font-size: 0;
    }
    .ratingselect .switch.on .icon {
        color: #00c850;
    }
    .ratingselect .switch .icon {
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        font-size: 24px;
    }
    .ratingselect .switch .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
    }
    .ratings .rating-wrapper{
        padding: 0 18px;
    }
    .ratings .rating-wrapper .rating-item{
        display: flex;
        padding: 18px 0;
        position: relative;
        border-bottom: 1px solid rgba(7,17,27,0.1);
    }
    .ratings .rating-wrapper .rating-item:last-child{
        border-bottom: none;
    }
    .ratings .rating-wrapper .rating-item .avatar{
        -webkit-box-flex: 0;
        flex: 0 0 28px;
        margin-right: 12px;
    }
    .ratings .rating-wrapper .rating-item .avatar img{
        border-radius: 50%;
    }
    .ratings .rating-wrapper .rating-item .content{
        position: relative;
        -webkit-box-flex: 1;
        flex: 1;
    }
    .ratings .rating-wrapper .rating-item .content .name{
        margin-bottom: 4px;
        line-height: 12px;
        font-size: 10px;
        color:#07111b;
    }
    .ratings .rating-wrapper .rating-item .content .star{
        margin-bottom: 6px;
        font-size:0;
    }
    .ratings .rating-wrapper .rating-item .content .star .full{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background: url("../../../resource/img/star24_on@2x.png") 0 0 no-repeat;
        background-size: 10px 10px;
    }
    .ratings .rating-wrapper .rating-item .content .star .delivery{
        display: inline-block;
        vertical-align: top;
        line-height: 12px;
        font-size: 10px;
        color:#93999f;
    }
    .ratings .rating-wrapper .rating-item .content .text{
        margin-bottom: 8px;
        line-height: 18px;
        color: #07111b;
        font-size:12px;
    }
    .ratings .rating-wrapper .rating-item .content .recommend{
        line-height: 16px;
        font-size: 0;
    }
    .ratings .rating-wrapper .rating-item .content .recommend .item{
        display: inline-block;
        margin: 0 8px 4px 0;
        font-size: 9px;
        padding: 0 6px;
        border: 1px solid rgba(7,17,27,0.1);
        border-radius: 1px;
        color: #93999f;
        background: #fff;
    }
    .ratings .rating-wrapper .rating-item .content .time{
        position: absolute;
        top:0;
        right: 0;
        line-height: 12px;
        font-size: 10px;
        color: #93999f;
    }
</style>















