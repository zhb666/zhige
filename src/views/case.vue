<template>

  <div class="case">

    <div class="coonme_bg animated fadeInLeft" data-animate="animated fadeInLeft">
      <img src="../../static/common/images/anli_Bg.png" alt="">
      <h3 class="animated fadeInLeft" data-animate="animated fadeInLeft">案例</h3>
      <p class="animated fadeInRight" data-animate="animated fadeInRight">case</p>
    </div>

    <div class="animated fadeInUp">
      <div class="case_list" style="background: #F7F8FA;" data-animate="animated fadeInUp">
        <div class="case_listMain">
          <div class="case_listMain_L">
            <img src="../../static/common/images/logos2.png" alt="">
          </div>
          <div class="case_listMain_R">
            <h3>广信安</h3>
            <p>
              广信安是国内资质最全的信息系统解决方案提供商之一，拥有"广东省安全技术防范系统设计、施工、维修资格证(壹级)"、"信息系统集成及服务资质证书(壹级)"、"电子与智能化工程专业承包(贰级)"、ISO9001质量管理体系认证、ISO14000环境管理体系标准认证、OHSAS18000安全及卫生管理系统验证标准认证等资质证书。公司荣获在2016年度荣获广东省电子政务优秀企业奖、2016国际智慧城市建设优秀企业奖，2015年-2017年连续三年荣获广东省优秀安防企业，2018-2019年度智慧城市最具成长性企业等；承接的项目工程深受业界认可与好评。</p>
            <div>
              <img src="../../static/common/images/info.png" alt="">IM即时通讯
            </div>
          </div>
        </div>
      </div>

      <div class="case_list" data-animate="animated fadeInUp">
        <div class="case_listMain">
          <div class="case_listMain_L">
            <img src="../../static/common/images/logos3.png" alt="">
          </div>
          <div class="case_listMain_R">
            <h3>宜搜</h3>
            <p>
              深圳宜搜天下科技股份有限公司，简称“宜搜科技”，成立于2005年4月，注册资金2000万，现有员工400多名。宜搜科技是国家高新技术企业，国内最早的中文移动搜索服务提供商，深耕移动搜索领域十一年，基于多年积累的移动搜索技术，深度挖掘手机用户对移动搜索的需求和行为习惯，将用户主动输入的搜索方式改为通过用户行为分析把信息推荐给用户，完成了传统搜索引擎到“发现引擎”的升级 ，并在国内处于领先地位。</p>
            <div>
              <img src="../../static/common/images/info.png" alt="">IM即时通讯
            </div>
          </div>
        </div>
      </div>

      <div class="case_list" style="background: #F7F8FA;" data-animate="animated fadeInUp">
      <div class="case_listMain">
        <div class="case_listMain_L">
          <img src="../../static/common/images/logos1.png" alt="">
        </div>
        <div class="case_listMain_R">
          <h3>爱问医生</h3>
          <p>
            爱问医生是新浪微博推出的一款健康咨询应用，在医生和患者之间搭建在线咨询平台。患者可在微博上找到合适的医生，进行健康图文咨询、预约挂号等。微博用户线上咨询全国名医和专家，平均两个半小时即可得到回复。在每月1日、11日及21日“微博爱医日”还可免费咨询。爱问医生通过举办微博爱医日活动，组织全国三甲医院医生免费接受网友的咨询，不断吸引广大微博网友及医生的关注；另一方面筹划与各地挂号网站联合，实现微博预约挂号服务，构建“诊前咨询—预约挂号—线下面诊—线上随访”的服务闭环。</p>
          <div>
            <img src="../../static/common/images/info.png" alt="">IM即时通讯
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "case"
  }
</script>

<style scoped>

  /*device-width: >= 1000px*/
  @media screen and (min-width: 1000px) {

    .case {
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

    .case_list {
      width: 100%;
      height: 264px;
      background: #fff;
      overflow: hidden;
    }

    .case_listMain {
      width: 1068px;
      height: 220px;
      margin: 20px auto;
    }

    .case_listMain_L {
      float: left;
      width: 18%;
      height: 100%;
      /*background: red;*/
    }

    .case_listMain_L img {
      margin-top: 15px;
    }

    .case_listMain_R {
      float: left;
      width: 82%;
      height: 100%;
      /*background: yellow;*/
    }

    .case_listMain_R h3 {
      font-size: 24px;
      color: #333;
      font-weight: normal;
      margin-top: 15px;
    }

    .case_listMain_R p {
      font-size: 16px;
      color: #666666;
      margin-top: 8px;
    }

    .case_listMain_R div {
      width: 100%;
      height: 30px;
      margin-top: 6px;
      color: #333333;
      font-size: 16px;
    }

    .case_listMain_R div img {
      vertical-align: top;
      margin: 2px 8px 0 0;
    }

  }

  /*device-width:400px-1000px*/
  @media screen and (min-width: 450px) and (max-width: 1000px) {

    .case {
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

    .case_list {
      width: 100%;
      height: 264px;
      background: #fff;
      overflow: hidden;
    }

    .case_listMain {
      width: 1068px;
      height: 220px;
      margin: 20px auto;
    }

    .case_listMain_L {
      float: left;
      width: 18%;
      height: 100%;
      /*background: red;*/
    }

    .case_listMain_L img {
      margin-top: 15px;
    }

    .case_listMain_R {
      float: left;
      width: 82%;
      height: 100%;
      /*background: yellow;*/
    }

    .case_listMain_R h3 {
      font-size: 24px;
      color: #333;
      font-weight: normal;
      margin-top: 15px;
    }

    .case_listMain_R p {
      font-size: 16px;
      color: #666666;
      margin-top: 8px;
    }

    .case_listMain_R div {
      width: 100%;
      height: 30px;
      margin-top: 6px;
      color: #333333;
      font-size: 16px;
    }

    .case_listMain_R div img {
      vertical-align: top;
      margin: 2px 8px 0 0;
    }

  }

  /*device-width: <= 400px*/
  @media screen and (max-width: 450px) {

    .case {
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

    .case_list {
      width: 16rem;
      height: auto;
      background: #fff;
      overflow: hidden;
    }

    .case_listMain {
      width: 16rem;
      height: auto;
      overflow: hidden;
      padding: 0 0 .5rem 0;
      margin: 20px auto;
      position: relative;
    }

    .case_listMain_L {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: .2rem;
      left: .8rem;
    }

    .case_listMain_L img {
      width: 2rem;
      height: 2rem;
    }

    .case_listMain_R {
      width: 92%;
      height: 100%;
      margin: 0 auto;
    }

    .case_listMain_R h3 {
      font-size: 24px;
      color: #333;
      font-weight: normal;
      margin-top: 15px;
      text-align: right;
    }

    .case_listMain_R p {
      font-size: .7rem;
      color: #666666;
      margin-top: .5rem;
    }

    .case_listMain_R div {
      width: 100%;
      height: 30px;
      margin-top: 6px;
      color: #333333;
      font-size: 16px;
    }

    .case_listMain_R div img {
      vertical-align: top;
      margin: 2px 8px 0 0;
    }

  }


</style>
