<template>
  <div class="seller">
    <div class="seller-content" style="transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
      <div class="overview">
        <h1 class="title">粥品香坊（回龙观）</h1>
        <div class="desc border-1px">
          <div class="star star-36">
            <span class="star-item on"></span><span class="star-item on"></span><span class="star-item on"></span><span class="star-item on"></span><span class="star-item off"></span>
          </div>
          <span class="text">(24)</span>
          <span class="text">月售90单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">20</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">4</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">38</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite"></span>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
        </div>
        <ul class="supports">
          <li class="support-item border-1px">
            <span class="icon decrease"></span>
            <span class="text">在线支付满28减5</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list" style="width: 498px; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
            <li class="pic-item">
              <img width="120" height="90" src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180">
            </li><li class="pic-item">
            <img width="120" height="90" src="http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180">
          </li><li class="pic-item">
            <img width="120" height="90" src="http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180">
          </li><li class="pic-item">
            <img width="120" height="90" src="http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180">
          </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item">该商家支持发票,请下单写好发票抬头</li><li class="info-item">品类:其他菜系,包子粥店</li><li class="info-item">北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</li><li class="info-item">营业时间:10:00-20:30</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        beforeCreate(){
            console.log("组件刚被建立")
        },
        created(){
            this.$http.get("http://10.80.13.92:8080/api/seller")
              .then(function (response) {
                  console.log(response.data)
                  return response.json()
              }).then(function (response) {
              if(response.success === 1){
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
  .seller {
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
  }
  .seller .overview {
    position: relative;
    padding: 18px;
  }
  .seller .split{
    width:100%;
    height: 16px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    border-top: 1px solid rgba(7,17,27,0.1);
    background: #f3f5f7;
  }
  .seller .overview .title {
    margin-bottom: 8px;
    line-height: 14px;
    color: #07111b;
    font-size: 14px;
  }
  .seller .overview .desc {
    padding-bottom: 18px;
    position: relative;
    font-size: 0;
  }
  .seller .overview .desc .star {
    display: inline-block;
    margin-right: 8px;
    vertical-align: top;
  }
  .seller .overview .desc .star .star-item{
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background: url("../../../resource/img/star24_on@2x.png") 0 0 no-repeat;
    background-size: 15px 15px;
  }
  .seller .overview .desc .star .star-item:last-child{
    background: url("../../../resource/img/star24_off@2x.png") 0 0 no-repeat;
    background-size: 15px 15px;
  }
  .seller .overview .desc .text {
    display: inline-block;
    margin-right: 12px;
    line-height: 18px;
    vertical-align: top;
    font-size: 10px;
    color: #4d555d;
  }
  .seller .overview .remark {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 18px;
  }
  .seller .overview .remark .block {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    border-right: 1px solid rgba(7,17,27,0.1);
  }
  .seller .overview .remark .block:last-child {
    border: none;
  }
  .seller .overview .remark .block h2 {
    margin-bottom: 4px;
    line-height: 10px;
    font-size: 10px;
    color: #93999f;
  }
  .seller .overview .remark .block .content {
    line-height: 24px;
    font-size: 10px;
    color: #07111b;
  }
  .seller .overview .remark .block .content .stress {
    font-size: 24px;
  }
  .seller .overview .favorite {
    position: absolute;
    width: 50px;
    right: 11px;
    top: 18px;
    text-align: center;
  }
  .seller .overview .favorite .icon-favorite {
    display: block;
    margin-bottom: 4px;
    line-height: 24px;
    font-size: 24px;
    color: #d4d6d9;
  }
  .seller .overview .favorite .icon-favorite.active {
    color: #f01414;
  }
  .seller .overview .favorite .text {
    line-height: 10px;
    font-size: 10px;
    color: #4d555d;
  }
  .seller .bulletin {
    padding: 18px 18px 0 18px;
  }
  .seller .bulletin .title {
    margin-bottom: 8px;
    line-height: 14px;
    color: #07111b;
    font-size: 14px;
  }
  .seller .bulletin .content-wrapper {
    padding: 0 12px 16px 12px;
    position: relative;
  }
  .seller .bulletin .content-wrapper .content {
    line-height: 24px;
    font-size: 12px;
    color: #f01414;
  }
  .seller .bulletin .supports .support-item {
    width: 100%;
    height: 48px;
    /*padding: 16px 12px;*/
    position: relative;
    font-size: 0;
  }

  .seller .bulletin .supports .support-item .text{
    display: inline-block;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .seller .bulletin .supports .support-item:last-child{
    display: none;
  }
  .seller .bulletin .supports .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }

</style>
