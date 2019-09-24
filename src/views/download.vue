<template>
  <div class="download">

    <div class="download_BG animated fadeInRight" data-animate="animated fadeInRight">
      <img src="../../static/common/images/bg.png" alt="">
      <p class="asdap animated fadeInLeft" data-animate="animated fadeInLeft">
        <span>安全</span>
        <span>专业</span>
        <span>定制</span>
      </p>
      <p class="testsd">安全专业的定制化IM即时通讯工具</p>
    </div>


    <div class="erweima animated fadeInRight" data-animate="animated fadeInRight">
      <img src="../../static/common/images/erweima.png" alt="">
      <p>识别二维码下载最新版本V1.2.0</p>
    </div>

  </div>


</template>

<script>
  export default {
    name: "download"
  }
</script>

<style scoped>

  /*device-width: >= 1000px*/
  @media screen and (min-width: 1000px) {

    .download {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .download_BG {
      width: 100%;
      height: 628px;
      overflow: hidden;
      position: relative;
    }

    .download_BG img {
      width: 1440px;
      height: 604px;
      background-size: cover;
      position: absolute;
      left: 50%;
      top: -58px;
      z-index: -1;
      margin-left: -720px;
    }

    .download_BG .asdap {
      width: 320px;
      height: 56px;
      margin: 400px auto 20px auto;
      display: flex;
    }

    .download_BG .asdap span {
      display: inline-block;
      font-size: 40px;
      color: #333;
      margin-left: 20px;
    }
    .testsd{
      font-size: 21px;
      text-align: center;
      color: #666;
    }

    .erweima{
      width: 100%;
      height: 346px;
      overflow: hidden;
      text-align: center;
      animation-delay: .3s;
    }
    .erweima img{
      width: 140px;
      height: 140px;
    }
    .erweima p{
      font-size: 20px;
      text-align: center;
      color: #999;
      margin-top: 20px;
    }

  }

  /*device-width:400px-1000px*/
  @media screen and (min-width: 450px) and (max-width: 1000px) {

    .download {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .download_BG {
      width: 100%;
      height: 628px;
      overflow: hidden;
      position: relative;
    }

    .download_BG img {
      width: 1440px;
      height: 604px;
      background-size: cover;
      position: absolute;
      left: 50%;
      top: -58px;
      z-index: -1;
      margin-left: -720px;
    }

    .download_BG .asdap {
      width: 320px;
      height: 56px;
      margin: 400px auto 20px auto;
      display: flex;
    }

    .download_BG .asdap span {
      display: inline-block;
      font-size: 40px;
      color: #333;
      margin-left: 20px;
    }
    .testsd{
      font-size: 21px;
      text-align: center;
      color: #666;
    }

    .erweima{
      width: 100%;
      height: 346px;
      overflow: hidden;
      text-align: center;
      animation-delay: .3s;
    }
    .erweima img{
      width: 140px;
      height: 140px;
    }
    .erweima p{
      font-size: 20px;
      text-align: center;
      color: #999;
      margin-top: 20px;
    }

  }

  /*device-width: <= 400px*/
  @media screen and (max-width: 450px) {

    .download {
      width: 100%;
      height: auto;
      overflow: hidden;
    }

    .download_BG {
      width: 16rem;
      height: auto;
      padding-bottom: 1rem;
      margin-top: -.5rem;
      overflow: hidden;
      position: relative;
    }

    .download_BG img {
      width: 1200px;
      height: 500px;
      background-size: cover;
      position: absolute;
      left: 82%;
      top: 1rem;
      z-index: -1;
      margin-left: -720px;
    }

    .download_BG .asdap {
      width: 320px;
      height: 56px;
      margin: 400px auto 20px auto;
      display: flex;
    }

    .download_BG .asdap span {
      display: inline-block;
      font-size: 40px;
      color: #333;
      margin-left: 20px;
    }
    .testsd{
      font-size: .9rem;
      text-align: center;
      color: #666;
    }

    .erweima{
      width: 16rem;
      height: 10rem;
      overflow: hidden;
      text-align: center;
      animation-delay: .3s;
    }
    .erweima img{
      width: 140px;
      height: 140px;
    }
    .erweima p{
      font-size: .9rem;
      text-align: center;
      color: #999;
      margin-top: 20px;
    }

  }
</style>
