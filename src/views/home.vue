<template>
  <div class="home">

    <div class="home_banner">
      <div id="mydiv"></div>
      <img src="../../static/common/images/home_banne.png" alt="">
      <h1 class="animated fadeInLeft" data-animate="animated fadeInLeft">安全专业的定制化IM即时通讯工具</h1>
      <div class="downClick animated fadeInRight" data-animate="animated fadeInRight" @click="download">立即下载</div>
    </div>

    <div class="home_imgList">
        <h3 class="title_text animated fadeInRight" data-animate="animated fadeInRight">产品优势</h3>
        <div class="title_line animated fadeInLeft" data-animate="animated fadeInLeft"></div>

        <ul class="home_imgListUl animated fadeInUp" data-animate="animated fadeInUp">
          <li>
            <img src="../../static/common/images/list1.png" alt="">
            <p>安全</p>
          </li>
          <li>
            <img src="../../static/common/images/list2.png" alt="">
            <p>专业</p>
          </li>
          <li>
            <img src="../../static/common/images/list3.png" alt="">
            <p>定制化</p>
          </li>
        </ul>
    </div>

    <div class="home_bg1" data-animate="animated fadeInLeft">
      <img src="../../static/common/images/home_bg1.png" alt="">
      <h3>安全</h3>
      <p>采用令牌技术，在服务端、客户端，对数据流进行双重加密和校验，确保数据的安全性，通过密钥协商机制实现</p>
      <p>移动端数据快速加密。</p>
    </div>

    <div class="home_bg1" data-animate="animated fadeInUp">
      <img src="../../static/common/images/home_bg2.png" alt="">
      <h3>专业</h3>
      <p>支持推送、多终端登录、群应用管理、历史消息、广播、数据统计，可扩展位置分享、定位等。</p>
    </div>

    <div class="home_bg1" data-animate="animated fadeInUp">
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
      this.canvas();
    },
    methods: {
      canvas(){

        var num = 0;

        if (~navigator.userAgent.indexOf('Mobile')) {
          num = 70;
        } else {
          num = 300;
        }

        var config = {
          vx: 4,	//小球x轴速度,正为右，负为左
          vy: 4,	//小球y轴速度
          height: 2,	//小球高宽，其实为正方形，所以不宜太大
          width: 2,
          count: num,		//点个数
          color: "121, 162, 185", 	//点颜色
          stroke: "130,255,255", 		//线条颜色
          dist: 6000, 	//点吸附距离
          e_dist: 20000, 	//鼠标吸附加速距离
          max_conn: 10 	//点到点最大连接数
        }
            //调用
        CanvasParticle(config);
      },
      download(){
        this.$router.push("download");
      },
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
      height: auto;
      position: relative;
      overflow: hidden;
    }

    .home_banner img{
      width: 100%;
      height: auto;
    }

    #mydiv{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1000;
      overflow: hidden;
    }

    .home_banner h1{
      width: 100%;
      position: absolute;
      top: 20%;
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
      top: 40%;
      left: 50%;
      margin-left: -75px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      animation-delay: .5s;
      z-index: 1585555;
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
      height: 100%;
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
      height: 495px;
      position: relative;
      overflow: hidden;
    }

    .home_banner img{
      width: 100%;
      height: auto;
    }

    #mydiv{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1000;
      overflow: hidden;
    }

    .home_banner h1{
      width: 100%;
      position: absolute;
      top: 20%;
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
      top: 35%;
      left: 50%;
      margin-left: -75px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      z-index: 151456456;
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
      height: 100%;
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
      height: 300px;
      position: relative;
      overflow: hidden;
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

    #mydiv{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 2rem;
      z-index: 10000;
      overflow: hidden;
    }

    .home_banner h1{
      width: 16rem;
      position: absolute;
      top: 106px;
      left: 0;
      text-align: center;
      font-size: .8rem;
      color: #fff;
      font-weight: normal;
      z-index: 1000;
    }

    .downClick{
      width:150px;
      height:40px;
      border: 1px solid #fff;
      font-size:18px;
      color: #fff;
      position: absolute;
      top: 7rem;
      left: 8rem;
      margin-left: -75px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      z-index: 100000;
    }

    .home_imgList{
      width: 16rem;
      height: 10rem;
      background: #fff;
    }

    .title_text{
      color: #333;
      font-size:1.2rem;
      text-align: center;
      margin:.5rem 0 .5rem 0;
    }

    .title_line{
      width:50px;
      height:3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .home_imgListUl{
      width: 16rem;
      height: 80px;
      margin-top: 40px;
      display: flex;
    }
    .home_imgListUl li{
      flex: 1;
      text-align: center;
    }
    .home_imgListUl li:nth-child(2) img{
      margin-bottom: .9rem;
    }
    .home_imgListUl li:nth-child(3) img{
      margin-bottom: .9rem;
    }
    .home_imgListUl li img{
      margin-bottom: 10px;
    }
    .home_imgListUl li p{
      font-size: .8rem;
      color: #333;
    }
    .home_bg1{
      width: 16rem;
      height: 8rem;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
    }
    .home_bg1 img{
      width: auto;
      height: 100%;
      background-size: cover;
      position: absolute;
      left: -50%;
      top: 0;
      margin-left: -8rem;
      z-index: -1;
    }

    .home_bg1 h3{
      font-size:1.2rem;
      text-align: center;
      color: #fff;
      font-weight: normal;
      margin: 1rem 0 .8rem 0;
    }

    .home_bg1 p{
      font-size:.6rem;
      text-align: center;
      color: #fff;
      line-height: 30px;
      padding: 0 .5rem;
      box-sizing: border-box;
    }

  }

</style>
