<template>
  <div class="home">

    <div class="home_banner">
      <img src="../../static/common/images/home_banne.png" alt="">
      <h1 class="animated fadeInLeft">安全专业的定制化IM即时通讯工具</h1>
      <div class="downClick animated fadeInRight" @click="download">立即下载</div>
    </div>

    <div class="home_imgList animated fadeInRight">
        <h3 class="title_text">产品优势</h3>
        <div class="title_line"></div>

        <ul class="home_imgListUl">
          <li>
            <img src="../../static/common/images/list1.png" alt="">
            <p>安全</p>
          </li>
          <li>
            <img src="../../static/common/images/list2.png" alt="">
            <p>专业</p>
          </li>
          <li>
            <img src="../../static/common/images/list1.png" alt="">
            <p>定制化</p>
          </li>
        </ul>
    </div>

    <div class="home_bg1 animated fadeInLeft">
      <img src="../../static/common/images/home_bg1.png" alt="">
      <h3>安全</h3>
      <p>采用令牌技术，在服务端、客户端，对数据流进行双重加密和校验，确保数据的安全性，通过密钥协商机制实现</p>
      <p>移动端数据快速加密。</p>
    </div>

    <div class="home_bg1">
      <img src="../../static/common/images/home_bg2.png" alt="">
      <h3>专业</h3>
      <p>支持推送、多终端登录、群应用管理、历史消息、广播、数据统计，可扩展位置分享、定位等。</p>
    </div>

    <div class="home_bg1">
      <img src="../../static/common/images/home_bg3.png" alt="">
      <h3>定制化</h3>
      <p>我们拥有专业的团队，凭借IM领域深厚的技术积累以及强大的平台优势，为您推广专属定制化的服务。</p>
    </div>



  </div>
</template>
<script>
  export default {
    name: "home",
    data() {
      return {
      }
    },
    mounted() {

    },
    methods: {
      download(){
        this.$router.push("download");
      }
    }
  }
</script>
<style scoped>

  .home{
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  /*device-width: >= 1000px*/
  @media screen and (min-width: 1000px) {

    .home_banner{
      width: 100%;
      height: 264px;
      position: relative;
      overflow: hidden;
    }

    .home_banner img{
      width: 100%;
      height: auto;
    }

    .home_banner h1{
      width: 100%;
      position: absolute;
      top: 72px;
      left: 0;
      text-align: center;
      font-size: 36px;
      color: #fff;
      font-weight: normal;
    }

    .downClick{
      width:150px;
      height:40px;
      border: 1px solid #fff;
      font-size:18px;
      color: #fff;
      position: absolute;
      top: 160px;
      left: 50%;
      margin-left: -75px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      animation-delay: .5s;
    }

    .home_imgList{
      width: 100%;
      height: 264px;
      background: #fff;
    }

    .title_text{
      color: #333;
      font-size:24px;
      text-align: center;
      margin:50px 0 24px 0;
    }

    .title_line{
      width:50px;
      height:3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .home_imgListUl{
      width: 100%;
      height: 80px;
      margin-top: 40px;
      display: flex;
    }
    .home_imgListUl li{
      flex: 1;
      text-align: center;
    }
    .home_imgListUl li img{
      margin-bottom: 10px;
    }
    .home_imgListUl li p{
      font-size: 18px;
      color: #333;
    }
    .home_bg1{
      width: 100%;
      height: 264px;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
    }
    .home_bg1 img{
      width: 100%;
      height: auto;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    .home_bg1 h3{
      font-size:30px;
      text-align: center;
      color: #fff;
      font-weight: normal;
      margin: 70px 0 30px;
    }

    .home_bg1 p{
      font-size:16px;
      text-align: center;
      color: #fff;
      line-height: 30px;
    }

  }

  /*device-width:400px-1000px*/
  @media screen and (min-width: 450px) and (max-width: 1000px) {

    .home_banner{
      width: 100%;
      height: 264px;
      position: relative;
      overflow: hidden;
    }

    .home_banner img{
      width: 100%;
      height: auto;
    }

    .home_banner h1{
      width: 100%;
      position: absolute;
      top: 72px;
      left: 0;
      text-align: center;
      font-size: 36px;
      color: #fff;
      font-weight: normal;
    }

    .downClick{
      width:150px;
      height:40px;
      border: 1px solid #fff;
      font-size:18px;
      color: #fff;
      position: absolute;
      top: 160px;
      left: 50%;
      margin-left: -75px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
    }

    .home_imgList{
      width: 100%;
      height: 264px;
      background: #fff;
    }

    .title_text{
      color: #333;
      font-size:24px;
      text-align: center;
      margin:50px 0 24px 0;
    }

    .title_line{
      width:50px;
      height:3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .home_imgListUl{
      width: 100%;
      height: 80px;
      margin-top: 40px;
      display: flex;
    }
    .home_imgListUl li{
      flex: 1;
      text-align: center;
    }
    .home_imgListUl li img{
      margin-bottom: 10px;
    }
    .home_imgListUl li p{
      font-size: 18px;
      color: #333;
    }
    .home_bg1{
      width: 100%;
      height: 264px;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
    }
    .home_bg1 img{
      width: 100%;
      height: auto;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    .home_bg1 h3{
      font-size:30px;
      text-align: center;
      color: #fff;
      font-weight: normal;
      margin: 70px 0 30px;
    }

    .home_bg1 p{
      font-size:16px;
      text-align: center;
      color: #fff;
      line-height: 30px;
    }

  }

  /*device-width: <= 400px*/
  @media screen and (max-width: 450px) {

    .home_banner{
      width: 100%;
      height: 264px;
      position: relative;
    }

    .home_banner img{
      width: 100%;
      height: auto;
      position: absolute;
      left: 50%;
      top: 0;
      z-index: 1000;
      margin-left: -88%;
    }

    .home_banner h1{
      width: 16rem;
      position: absolute;
      top: 88px;
      left: 0;
      text-align: center;
      font-size: 18px;
      color: #fff;
      font-weight: normal;
      z-index: 10000;
    }

    .downClick{
      width:150px;
      height:40px;
      border: 1px solid #fff;
      font-size:18px;
      color: #fff;
      position: absolute;
      top: 6rem;
      left: 8rem;
      margin-left: -75px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      z-index: 10000;
    }

    .home_imgList{
      width: 100%;
      height: 264px;
      background: #fff;
    }

    .title_text{
      color: #333;
      font-size:24px;
      text-align: center;
      margin:50px 0 24px 0;
    }

    .title_line{
      width:50px;
      height:3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .home_imgListUl{
      width: 100%;
      height: 80px;
      margin-top: 40px;
      display: flex;
    }
    .home_imgListUl li{
      flex: 1;
      text-align: center;
    }
    .home_imgListUl li img{
      margin-bottom: 10px;
    }
    .home_imgListUl li p{
      font-size: 18px;
      color: #333;
    }
    .home_bg1{
      width: 100%;
      height: 264px;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
    }
    .home_bg1 img{
      width: 100%;
      height: auto;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    .home_bg1 h3{
      font-size:30px;
      text-align: center;
      color: #fff;
      font-weight: normal;
      margin: 70px 0 30px;
    }

    .home_bg1 p{
      font-size:16px;
      text-align: center;
      color: #fff;
      line-height: 30px;
    }

  }

</style>
