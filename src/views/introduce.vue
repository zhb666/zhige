<template>
  <div class="introduce">

    <div class="coonme_bg animated fadeInLeft" data-animate="animated fadeInLeft">
      <img src="../../static/common/images/jies_bg.png" alt="">
      <h3 class="animated fadeInLeft" data-animate="animated fadeInLeft">公司介绍</h3>
      <p class="animated fadeInRight" data-animate="animated fadeInRight">Company introduction</p>
    </div>

    <div class="introduce_text animated fadeInRight" data-animate="animated fadeInRight">

      <h3 class="title_text">公司简介</h3>
      <div class="title_line"></div>

      <p class="introduce_textP animated fadeInLeft" data-animate="animated fadeInLeft">
        知阁（深圳）网络科技有限公司于2018年08月成立，位于深圳市南山区高新园，是一站式的服务平台，打造社交、小说漫画、流量平台、应用商店、多云融合的混合式服务平台，是一家专注于提供技术解决方案的高新技术企业。</p>

      <img src="../../static/common/images/jianjie.png" class="animated fadeInUp" data-animate="animated fadeInUp" alt="">

    </div>

    <div class="introduceText animated fadeInUp" data-animate="animated fadeInUp" style="background: #F8F9FB;">

      <h3 class="title_text">技术团队</h3>
      <div class="title_line"></div>

      <p class="introduce_textP">
        目前公司的团队，是由国内顶尖的技术人才创办，核心团队来自阿里、摩托罗拉、腾讯等知名企业高管和技术专家，在社交、大数据、移动应用等领域具有丰富的实战经验，致力于打造以技术为核心，多项产品深入技术研发，为客户提供定制化完美解决方案的新型企业模式。
        近半年来，公司不断加大技术创新，完善公司创新体制建设，先后取得多项自主研发的软件著作权和多项行业资质证书，并投入大量人力、物力和财力对科技创新成果成功进行了成果转化。</p>

    </div>

    <div class="introduceText animated fadeInLeft" data-animate="animated fadeInLeft">

      <h3 class="title_text">公司展望</h3>
      <div class="title_line"></div>

      <p class="introduce_textP">
        知阁汇聚一批行业资深技术团队精英，研发团队约80人。在公司快速发展过程中，也注重人才培养，为员工提供具有竞争力的平台和个人成长，充分发挥个人的技能全面发展，实现个人与公司的共同成长。</p>

    </div>

  </div>
</template>

<script>
  export default {
    name: "introduce"
  }
</script>

<style scoped>

  /*device-width: >= 1000px*/
  @media screen and (min-width: 1000px) {

    .introduce {
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

    .introduce_text {
      width: 100%;
      height: 380px;
      background: #fff;
      text-align: center;
      overflow: hidden;
      animation-delay: .3s;
    }

    .title_text {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin: 50px 0 24px 0;
    }

    .title_line {
      width: 50px;
      height: 3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .introduce_textP {
      width: 900px;
      height: 44px;
      font-size: 16px;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
      margin: 30px auto 37px auto;
      text-align: center;
    }

    .introduce_text img {
      width: 788px;
      height: 128px;
      margin-top: 10px;
      animation-delay: .5s;
    }

    .introduceText {
      width: 100%;
      height: 264px;
      background: #fff;
      overflow: hidden;
    }


  }

  /*device-width:400px-1000px*/
  @media screen and (min-width: 450px) and (max-width: 1000px) {

    .introduce {
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

    .introduce_text {
      width: 100%;
      height: 380px;
      background: #fff;
      text-align: center;
      overflow: hidden;
      animation-delay: .3s;
    }

    .title_text {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin: 50px 0 24px 0;
    }

    .title_line {
      width: 50px;
      height: 3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .introduce_textP {
      width: 900px;
      height: 44px;
      font-size: 16px;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
      margin: 30px auto 37px auto;
      text-align: center;
    }

    .introduce_text img {
      width: 788px;
      height: 128px;
      margin-top: 10px;
      animation-delay: .5s;
    }

    .introduceText {
      width: 100%;
      height: 264px;
      background: #fff;
      overflow: hidden;
    }


  }

  /*device-width: <= 400px*/
  @media screen and (max-width: 450px) {

    .introduce {
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
      font-size: 36px;
      font-weight: normal;
      text-align: center;
      margin: 100px 0 10px 0;
      color: #fff;
    }

    .coonme_bg p {
      font-size: 18px;
      text-align: center;
      color: #fff;
      font-family: PingFangSC;
    }

    .introduce_text {
      width: 16rem;
      height: 16rem;
      background: #fff;
      text-align: center;
      overflow: hidden;
      animation-delay: .3s;
    }

    .title_text {
      color: #333;
      font-size: 24px;
      text-align: center;
      margin: 50px 0 24px 0;
    }

    .title_line {
      width: 50px;
      height: 3px;
      background: #327BFA;
      margin: 0 auto;
    }

    .introduce_textP {
      width: 92%;
      height: 44px;
      font-size: .7rem;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
      margin: 30px auto 37px auto;
      text-align: center;
      text-indent: .55rem;
    }

    .introduce_text img {
      width: 100%;
      height: auto;
      margin-top: 2rem;
      animation-delay: .5s;
    }

    .introduceText {
      width: 16rem;
      height: 16rem;
      background: #fff;
      overflow: hidden;
    }

  }
</style>
