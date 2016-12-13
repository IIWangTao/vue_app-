<template>
    <div class="goods">
        <div class="menu">
            <ul>
                <li v-for="item in datas">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>

        <div class="foods">
            <ul>
                <li v-for="item in datas" class="title">
                    <span class="title-span">{{item.name}}</span>
                    <ul>
                        <li v-for="items in item.foods">
                            <div class="pic">
                              <img v-bind:src="items.icon" alt="">
                            </div>
                            <div class="list">
                                <h2>{{items.name}}</h2>
                                <div class="description">{{items.description}}</div>
                                <div class="content">
                                    <span>月售{{items.sellCount}}份</span>
                                    <span>好评率{{items.rating}}</span>
                                </div>
                                <div class="price">
                                    <span>￥{{items.price}}</span>
                                    <span>{{items.oldPrice}}￥</span>
                                </div>
                            </div>
                            <div class="add-box">
                                <span class="icon-remove_circle_outline" style="display: none"></span>
                                <span class="count"></span>
                                <span class="icon-add_circle"></span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
      <div class="shopCar">
        <div class="content">
          <div class="content-left">
            <div class="logo-box">
              <div class="logo">
                <span class="icon-shopping_cart"></span>
              </div>
              <div class="num" style="display: none;">0</div>
            </div>
            <div class="content-price">
              ￥ 0
            </div>
            <div class="desc">
              另需配送费￥4元
            </div>
          </div>
          <div class="content-right">
            <div class="pay">￥20元起送</div>
          </div>
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
            this.$http.get("http://10.80.13.92:8080/api/goods")
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
    .goods{
        display: flex;
        width:100%;
        position: absolute;
        top:174px;
        bottom:48px;
        overflow: hidden;
    }
    .goods .menu{
        -webkit-box-flex: 0;
        flex: 0 0 80px;
        overflow: scroll;
        width: 80px;
        background-color: #f3f5f7;
    }
    .menu ul{
        list-style: none;
        margin:0;
        padding:0;

    }
    .menu ul li{
        margin: auto;
        font-size: 12px;
        width: 56px;
        height: 54px;
        text-align: center;
        line-height: 14px;
        display: table;
    }
    .active{
        margin-top: -1px;
        background: #fff;
        font-weight: 700;
    }
    .menu ul li span{
        display: table-cell;
        width:56px;
        vertical-align: middle;
        border-bottom: 1px solid rgba(7,17,27,0.1);
    }
    .menu ul li span:last-child{
        border-bottom: none;
    }
    .foods{
        -webkit-box-flex: 1;
        flex: 1;
        overflow: scroll;
    }
    .foods ul{
        list-style: none;
        background: #fff;
    }
    .foods .title{
        background: #f3f5f7;
    }
    .foods .title span{
        display: inline-block;
        font-size: 12px;
        color: rgb(147,153,159);
    }
    .foods .title .title-span{
        border-left: 2px solid #d9dde1;
        padding-left: 12px;
        line-height: 26px;
    }
    .title li{
        display: flex;
        position: relative;
        margin-left:18px;
        padding-bottom: 18px;
        padding-top: 18px;
        margin-right: 18px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
    }
    .title li .add-box{
        position: absolute;
        right:0;
        bottom: 12px;
    }
    .title li .add-box span{
        margin-right: 6px;
        display: inline-block;
        vertical-align: top;
    }
    .title li .add-box .count{
        font-size: 10px;
        color: rgb(147,153,159);
        line-height: 24px;
    }
    .title li .add-box .icon-add_circle,.title li .add-box .icon-remove_circle_outline{
       font-size: 24px;
       color: rgb(0,160,220);
       line-height: 24px;
     }
    .title li .add-box .icon-add_circle{
      margin-right: 0px;
    }
    .icon-remove_circle_outline:before {
        content: "\e906";
    }
    .icon-add_circle:before {
        content: "\e900";
    }
    .title li:last-child{
        border-bottom: none;
    }
    .pic{
        display: inline-block;
        width: 56px;
        height: 56px;
        border-radius: 4px;
    }
    .pic img{
        width:56px;
        height:56px;
    }
    .list{
        display: inline-block;
        vertical-align: top;
    }
    .list h2{
        margin-left: 10px;
        font-size: 14px;
        color: rgb(7,17,27);
        font-weight: 700;
        margin-bottom: 8px;
    }
    .list .description{
        display: flex;
        flex: 1;
        margin-left: 10px;
        margin-bottom: 8px;
        font-size: 10px;
        color: rgb(147,153,159);
    }
    .list .content span{
        margin-left: 8px;
        margin-bottom: 8px;
        line-height: 10px;
        display: inline-block;
        color: rgb(147,153,159);
    }
    .list .price span{
        display: inline-block;
        margin-left: 6px;
        line-height: 10px;
    }
    .list .price span:first-child{
        font-size: 14px;
        color: red;
        font-weight: 700;
    }
    .list .price span:last-child{
        font-size: 10px;
        color: rgb(147,153,159);
        font-weight: 700;
    }

    .shopCar{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        height:48px;
    }
    .shopCar .content{
        display: flex;
        background: #141d27;
        color: rgba(255,255,255,0.4);
    }
    .shopCar .content .content-left{
        -webkit-box-flex: 1;
        flex: 1;
    }
    .shopCar .content .content-left .logo-box{
        display: inline-block;
        vertical-align: top;
        position: relative;
        top:-10px;
        margin:0 12px;
        padding:6px;
        width:56px;
        height:56px;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d17;
    }
    .shopCar .content .content-left .logo-box .logo{
        width:100%;
        height: 100%;
        border-radius: 50%;
        text-align: center;
        background: #2b343c;
    }
    .shopCar .content .content-left .logo-box .logo .icon-shopping_cart{
        line-height: 44px;
        font-size: 24px;
        color: #80858a;
    }
    .shopCar .content .content-left .logo-box .logo .icon-shopping_cart:before {
        content: "\e907";
    }
    .shopCar .content .content-left .logo-box .num{
        position: absolute;
        top:0;
        right:0;
        width:24px;
        height: 16px;
        line-height:16px;
        text-align: center;
        border-radius: 16px;
        font-size: 9px;
        font-weight: 700;
        color: #fff;
        background: #f01414;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    }
    .shopCar .content .content-left .content-price{
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height:24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255,255,255,0.1);
        font-size: 16px;
        font-weight: 700;
    }
    .shopCar .content .content-left .desc{
        display: inline-block;
        vertical-align: top;
        margin:12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
    }

    .shopCar .content .content-right{
        -webkit-box-flex: 0;
        flex: 0 0 105px;
        width:105px;
    }
    .shopCar .content .content-right .pay{
        height:48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        background: #2b333b;
    }
</style>
