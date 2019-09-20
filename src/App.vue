<template>
  <div class="animated fadeIn">

    <!--Pc-->
    <div class="Navigation">

      <div class="Navigation_main">
        <img class="animated flash" src="../static/common/images/logo.png" alt="">
        <p>知阁（深圳）网络科技有限公司</p>

        <div class="rooter">
          <ul class="rooter_ul">
            <router-link to="/" exact tag="li">
              首页
            </router-link>

            <router-link to="/case" exact tag="li">
              案例
            </router-link>

            <router-link to="/price" tag="li">
              价格
            </router-link>

            <router-link to="/download" tag="li">
              下载地址
            </router-link>

            <router-link to="/introduce" tag="li">
              公司介绍
            </router-link>
          </ul>
        </div>
      </div>

    </div>

    <!--Mobile-->
    <div class="MobileNav">

      <img class="logo" src="../static/common/images/logo.png" alt="">
      <p class="MobileNav_p">知阁（深圳）网络科技有限公司</p>

      <img class="open" src="../static/common/images/open.png" alt="">

      <div class="drop-down">

        <ul class="rooter_ul">
          <router-link to="/" exact tag="li">
            首页
          </router-link>

          <router-link to="/case" exact tag="li">
            案例
          </router-link>

          <router-link to="/price" tag="li">
            价格
          </router-link>

          <router-link to="/download" tag="li">
            下载地址
          </router-link>

          <router-link to="/introduce" tag="li">
            公司介绍
          </router-link>
        </ul>

      </div>


    </div>


    <router-view id="app"></router-view>

    <!--  sidebar  -->
    <div class="sidebar">
      电话咨询
    </div>
    <div class="phone">0755-8888888</div>

    <div class="footer_div">知阁（深圳）网络科技有限公司版权所有</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {

      }
    },
    mounted() {
      this._jq();
    },
    methods: {
      _jq(){

        //移动端点击
        $('.open').on('click',function () {
          if ($('.drop-down').css('display')=='none'){
            $('.drop-down').css('display','block');
          }else{
            $('.drop-down').css('display','none');
          }
        })

        $('.sidebar').hover(function () {
          $(this).addClass('animated tada')
          $('.phone').show().addClass('animated fadeInLeft');
        }, function () {
          $(this).removeClass('animated tada')
          $('.phone').hide().removeClass('animated fadeInLeft');
        });

      // 滚动监听
      //   if ($(document).scrollTop() > 1000) {
      //     $('.index_sidebar').show(300)
      //   } else {
      //     $('.index_sidebar').hide(300)
      //   }

      }
    }
  }
</script>

<style>

  /*device-width: >= 1000px*/
  @media screen and (min-width: 1000px) {

    .Navigation {
      width: 100%;
      height: 46px;
      background: #001629;
      display: block;
    }

    .MobileNav{
      width: 100%;
      height: 50px;
      background: #001629;
      position: fixed;
      left: 0;
      top: 0;
      display: none;
    }

    .Navigation_main {
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }

    .Navigation_main img {
      float: left;
      width: 37px;
      height: 35px;
      background-size: cover;
      margin: 6px 20px 0 0;
    }

    .Navigation_main > p {
      float: left;
      /*line-height: 36px;*/
      margin-top: 9px;
      color: #fff;
    }

    .rooter {
      width: 60%;
      height: 100%;
      float: left;
      margin-left: 84px;
    }

    .rooter_ul {
      width: 100%;
      height: 100%;
    }

    .active {
      color: #fff !important;
    }

    .rooter_ul li {
      float: left;
      margin-right: 60px;
      color: #999;
      margin-top: 10px;
      cursor: pointer;
    }

    .footer_div{
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 14px;
      line-height: 50px;
      color: #999;
      background: #001629;
    }

    .sidebar{
      width: 30px;
      height: 90px;
      background: rgba(0,0,0,.7);
      position: fixed;
      right: -4px;
      top: 30%;
      padding: 10px 2px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      border-radius: 6px;
    }

    .phone{
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #8c939d;
      border-radius: 4px;
      position: fixed;
      right: 40px;
      top: 34%;
      color: #FFF;
      display: none;
    }
  }

  /*device-width:400px-1000px*/
  @media screen and (min-width: 450px) and (max-width: 1000px) {

    .Navigation {
      width: 100%;
      height: 46px;
      background: #001629;
      display: block;
    }

    .MobileNav{
      width: 100%;
      height: 50px;
      background: #001629;
      position: fixed;
      left: 0;
      top: 0;
      display: none;
    }

    .Navigation_main {
      width: 90%;
      height: 100%;
      margin: 0 auto;
    }

    .Navigation_main img {
      float: left;
      width: 37px;
      height: 30px;
      background-size: cover;
      margin: 6px 20px 0 0;
    }

    .Navigation_main > p {
      float: left;
      /*line-height: 36px;*/
      margin-top: 9px;
      color: #fff;
    }

    .rooter {
      width: 60%;
      height: 100%;
      float: left;
      margin-left: 84px;
    }

    .rooter_ul {
      width: 100%;
      height: 100%;
    }

    .active {
      color: #fff !important;
    }

    .rooter_ul li {
      float: left;
      margin-right: 60px;
      color: #999;
      margin-top: 10px;
      cursor: pointer;
    }

  }

  /*device-width: <= 400px*/
  @media screen and (max-width: 450px) {
    .Navigation {
      width: 100%;
      height: 46px;
      display: none;
    }
    .MobileNav{
      width: 100%;
      height: 50px;
      background: #001629;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10000;
    }
    .open{
      width: 26px;
      height: 26px;
      position: absolute;
      top: 10px;
      right:6%;
    }
    .logo{
      width: 37px;
      height: 30px;
      float: left;
      margin: 10px;
    }
    .MobileNav_p{
      color: #fff;
      float: left;
      margin-top: 15px;
      font-size: 10px;
    }
    .drop-down{
      width: 60%;
      height: auto;
      background: #001629;
      position: absolute;
      left: 20%;
      top: 50px;
    }

    .drop-down {
      width: 60%;
      height: auto;
      background: #001629;
      position: absolute;
      left: 20%;
      top: 45px;
      display: none;
    }
    .rooter_ul{
      width: 100%;
      height: auto;
      overflow: auto;
      border-radius: 6px;
      padding-bottom: 4px;
    }
    .rooter_ul li{
      width: 90%;
      /*height: 25px;*/
      color: #999;
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      margin: 0 auto;
      padding: 6px;
    }
    .active {
      color: #fff !important;
    }

  }

</style>
