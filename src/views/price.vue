<template>

  <div class="price">

    <div class="coonme_bg animated fadeInLeft" data-animate="animated fadeInLeft">
      <img src="../../static/common/images/maney.png" alt="">
      <h3 class="animated fadeInLeft" data-animate="animated fadeInLeft">价格与功能</h3>
      <p class="animated fadeInRight" data-animate="animated fadeInRight">Price and Function</p>
    </div>

    <div class="price_box">

      <h3 class="title_text animated fadeInDown" data-animate="animated fadeInDown">IM即时通讯价格</h3>
      <div class="title_line animated fadeInUp" data-animate="animated fadeInUp"></div>

      <div class="price_boxMain">

        <div class="price_boxMain_L animated fadeInLeft" data-animate="animated fadeInLeft">
          <div class="price_boxMain_LTop">
            <h3>定制版</h3>
            <p>2000元 / 月起 | 按需付费</p>
          </div>

          <ul>
            <li>基础IM即时通讯功能</li>
            <li>支持功能定制</li>
            <li>功能更完善</li>
            <li>允许商用</li>
          </ul>

          <div class="Btns" @click="maskBlook">价格详情</div>
        </div>

        <div class="price_boxMain_R animated fadeInRight" data-animate="animated fadeInRight">

          <div class="price_boxMain_RTop">
            <h3>专业版</h3>
            <p>2000元 / 月起 | 按需付费</p>
          </div>

          <ul>
            <li>基础IM即时通讯功能</li>
            <li>不支持功能定制</li>
            <li>不支持人工技术服务</li>
            <li>不可商用</li>
          </ul>

          <div class="BtnsR" @click="maskBlook">价格详情</div>

        </div>


      </div>

    </div>

    <div class="tab">

      <h3 class="title_text" data-animate="animated fadeInRight">IM即时通讯价格</h3>
      <div class="title_line" data-animate="animated fadeInLeft"></div>

      <div class="tabIMG" data-animate="animated fadeInRight">
        <img src="../../static/common/images/table.png" class="pcTab" alt="">
        <img src="../../static/common/images/mobileTab.png" class="MobileTab" alt="">
      </div>

    </div>

    <div class="coonme_bg csdasd" >
      <img src="../../static/common/images/maney_bg.png" data-animate="animated fadeInRight" alt="">
      <h3 style="margin: 60px 0 10px 0" data-animate="animated fadeInLeft">提供全方位即时响应T服务</h3>
      <p style="margin-bottom: 10px;" data-animate="animated fadeInRight">专业的顾问指导服务</p>
      <p data-animate="animated fadeInLeft">1对1专属支持，7X24小时运维保障，为开发全面加速</p>
    </div>

  </div>

</template>

<script>
  export default {
    name: "price",
    methods: {
      maskBlook(){
        this.$alert('详情请拨打电话0755-86565601', '电话咨询', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
      }
    }
  }
</script>

<style scoped>

  /*device-width: >= 1000px*/
  @media screen and (min-width: 1000px) {

    .price {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .coonme_bg {
      width: 100%;
      height: 495px;
      overflow: hidden;
      position: relative;
    }

    .coonme_bg img {
      width: 100%;
      height: auto;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    .coonme_bg h3 {
      font-size: 36px;
      font-weight: normal;
      text-align: center;
      margin: 150px 0 10px 0;
      color: #fff;
    }

    .coonme_bg p {
      font-size: 18px;
      text-align: center;
      color: #fff;
      font-family: PingFangSC;
    }

    .price_box {
      width: 100%;
      height: 698px;
      overflow: hidden;
      background: #F7F8FA;
    }

    .title_text {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin: 50px 0 24px 0;
      animation-delay: .3s;
    }

    .title_line {
      width: 50px;
      height: 3px;
      background: #327BFA;
      margin: 0 auto;
      animation-delay: .4s;
    }

    .price_boxMain {
      width: 880px;
      height: 510px;
      margin: 30px auto;
    }

    .price_boxMain_L {
      width: 390px;
      height: 500px;
      float: left;
      border: 1px solid #327BFA;
      animation-delay: .6s;
    }

    .price_boxMain_R {
      width: 390px;
      height: 500px;
      float: right;
      border: 1px solid #07C260;
      animation-delay: .6s;
    }

    .price_boxMain_LTop {
      width: 100%;
      height: 160px;
      background: #327BFA;
      overflow: hidden;
    }

    .price_boxMain_LTop h3 {
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-top: 40px;
    }

    .price_boxMain_LTop p {
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }

    .price_boxMain_L ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 40px;
    }

    .price_boxMain_L ul li {
      margin-left: 118px;
      font-size: 18px;
      color: #333;
      line-height: 38px;
    }

    .Btns {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #327BFA;
      color: #327BFA;
      border-radius: 4px;
      margin: 30px auto;
      cursor: pointer;
    }

    /*  */
    .price_boxMain_RTop {
      width: 100%;
      height: 160px;
      background: #07C260;
      overflow: hidden;
    }

    .price_boxMain_RTop h3 {
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-top: 40px;
    }

    .price_boxMain_RTop p {
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }

    .price_boxMain_R ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 40px;
    }

    .price_boxMain_R ul li {
      margin-left: 118px;
      font-size: 18px;
      color: #333;
      line-height: 38px;
    }

    .BtnsR {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #07C260;
      background: #07C260;
      color: #fff;
      border-radius: 4px;
      margin: 30px auto;
      cursor: pointer;
    }

    .tab {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding: 0 0 30px 0;
    }

    .tabIMG {
      width: 1200px;
      height: 1374px;
      margin: 30px auto;
    }

    .tabIMG img {
      width: 1200px;
      height: 1374px;
      background-size: cover;
    }

    .pcTab{
      display: block;
    }

    .MobileTab{
      display: none;
    }

  }

  /*device-width:400px-1000px*/
  @media screen and (min-width: 450px) and (max-width: 1000px) {

    .price {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .coonme_bg {
      width: 100%;
      height: 495px;
      overflow: hidden;
      position: relative;
    }

    .coonme_bg img {
      width: 100%;
      height: auto;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    .coonme_bg h3 {
      font-size: 36px;
      font-weight: normal;
      text-align: center;
      margin: 130px 0 10px 0;
      color: #fff;
    }

    .coonme_bg p {
      font-size: 18px;
      text-align: center;
      color: #fff;
      font-family: PingFangSC;
    }

    .price_box {
      width: 100%;
      height: 698px;
      overflow: hidden;
      background: #F7F8FA;
    }

    .title_text {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin: 50px 0 24px 0;
      animation-delay: .3s;
    }

    .title_line {
      width: 50px;
      height: 3px;
      background: #327BFA;
      margin: 0 auto;
      animation-delay: .4s;
    }

    .price_boxMain {
      width: 880px;
      height: 510px;
      margin: 30px auto;
    }

    .price_boxMain_L {
      width: 390px;
      height: 500px;
      float: left;
      border: 1px solid #327BFA;
      animation-delay: .6s;
    }

    .price_boxMain_R {
      width: 390px;
      height: 500px;
      float: right;
      border: 1px solid #07C260;
      animation-delay: .6s;
    }

    .price_boxMain_LTop {
      width: 100%;
      height: 160px;
      background: #327BFA;
      overflow: hidden;
    }

    .price_boxMain_LTop h3 {
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-top: 40px;
    }

    .price_boxMain_LTop p {
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }

    .price_boxMain_L ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 40px;
    }

    .price_boxMain_L ul li {
      margin-left: 118px;
      font-size: 18px;
      color: #333;
      line-height: 38px;
    }

    .Btns {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #327BFA;
      color: #327BFA;
      border-radius: 4px;
      margin: 30px auto;
      cursor: pointer;
    }

    /*  */
    .price_boxMain_RTop {
      width: 100%;
      height: 160px;
      background: #07C260;
      overflow: hidden;
    }

    .price_boxMain_RTop h3 {
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-top: 40px;
    }

    .price_boxMain_RTop p {
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }

    .price_boxMain_R ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 40px;
    }

    .price_boxMain_R ul li {
      margin-left: 118px;
      font-size: 18px;
      color: #333;
      line-height: 38px;
    }

    .BtnsR {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #07C260;
      background: #07C260;
      color: #fff;
      border-radius: 4px;
      margin: 30px auto;
      cursor: pointer;
    }

    .tab {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding: 0 0 30px 0;
    }

    .tabIMG {
      width: 1200px;
      height: 1374px;
      margin: 30px auto;
    }

    .tabIMG img {
      width: 1200px;
      height: 1374px;
      background-size: cover;
    }

    .pcTab{
      display: block;
    }

    .MobileTab{
      display: none;
    }

  }

  /*device-width: <= 400px*/
  @media screen and (max-width: 450px) {

    .price {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .coonme_bg {
      width: 16rem;
      height: 12rem;
      overflow: hidden;
      position: relative;
    }

    .coonme_bg img {
      width: auto;
      height: 100%;
      background-size: cover;
      position: absolute;
      left: -50%;
      top: 0;
      margin-left: -8rem;
      z-index: -1;
    }

    .coonme_bg h3 {
      font-size: 30px;
      font-weight: normal;
      text-align: center;
      margin: 100px 0 10px 0;
      color: #fff;
    }

    .coonme_bg p {
      font-size: .65rem;
      text-align: center;
      color: #fff;
      font-family: PingFangSC;
    }

    .price_box {
      width: 16rem;
      height: auto;
      overflow: hidden;
      background: #F7F8FA;
    }

    .title_text {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin: 50px 0 24px 0;
      animation-delay: .3s;
    }

    .title_line {
      width: 50px;
      height: 3px;
      background: #327BFA;
      margin: 0 auto;
      animation-delay: .4s;
    }

    .price_boxMain {
      width: 16rem;
      height: auto;
      overflow: hidden;
      margin: 30px auto;
    }

    .price_boxMain_L {
      width: 15rem;
      height: 500px;
      border: 1px solid #327BFA;
      animation-delay: .6s;
      margin: .5rem auto;
    }

    .price_boxMain_R {
      width: 15rem;
      height: 500px;
      margin: 0 auto;
      border: 1px solid #07C260;
      animation-delay: .6s;
    }

    .price_boxMain_LTop {
      width: 100%;
      height: 160px;
      background: #327BFA;
      overflow: hidden;
    }

    .price_boxMain_LTop h3 {
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-top: 40px;
    }

    .price_boxMain_LTop p {
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }

    .price_boxMain_L ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 40px;
    }

    .price_boxMain_L ul li {
      margin-left: 118px;
      font-size: 18px;
      color: #333;
      line-height: 38px;
    }

    .Btns {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #327BFA;
      color: #327BFA;
      border-radius: 4px;
      margin: 30px auto;
      cursor: pointer;
      font-size: .8rem;
    }

    /*  */
    .price_boxMain_RTop {
      width: 100%;
      height: 160px;
      background: #07C260;
      overflow: hidden;
    }

    .price_boxMain_RTop h3 {
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: normal;
      margin-top: 40px;
    }

    .price_boxMain_RTop p {
      font-size: 18px;
      color: #fff;
      text-align: center;
      margin-top: 20px;
    }

    .price_boxMain_R ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 40px;
    }

    .price_boxMain_R ul li {
      margin-left: 118px;
      font-size: 18px;
      color: #333;
      line-height: 38px;
    }

    .BtnsR {
      width: 150px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #07C260;
      background: #07C260;
      color: #fff;
      border-radius: 4px;
      margin: 30px auto;
      cursor: pointer;
      font-size: .8rem;
    }

    .tab {
      width: 16rem;
      height: auto;
      overflow: hidden;
      padding: 0 0 30px 0;
    }

    .tabIMG {
      width: 16rem;
      height: auto;
      margin: 30px auto;
      overflow: hidden;
    }

    .tabIMG img {
      width: 100%;
      height: auto;
      background-size: cover;
    }

    .csdasd{
      height: 10rem!important;
    }

    .pcTab{
      display: none;
    }

    .MobileTab{
      display: block;
    }

  }

</style>
