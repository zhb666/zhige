<template>
  <div class="animated fadeIn">

    <!--Pc-->
    <div class="Navigation">

      <div class="Navigation_main">
        <img @click="JumpHome" class="animated flash" src="../static/common/images/logo.png" alt="">
        <p @click="JumpHome">知阁（深圳）网络科技有限公司</p>

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

      <img @click="JumpHome" class="logo animated flash" src="../static/common/images/logo.png" alt="">
      <p @click="JumpHome" class="MobileNav_p">知阁（深圳）网络科技有限公司</p>

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
      <a href="tel:0755-86565601">电话咨询</a>
    </div>
    <div class="phone">
      0755-86565601
    </div>

    <div class="footer_div" data-animate="animated fadeInLeft">知阁（深圳）网络科技有限公司版权所有</div>
  </div>
</template>

<script>
  // import {CanvasParticle} from '../static/common/js/canvas-particle'
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

        $(function() {
          var windowHeight = $(window).height(); //窗口高度
          var element;

          // 元素在可视区域，即刻开始动画
          var dataAnimateEl = $('[data-animate]');
          if (dataAnimateEl.length > 0 || dataAnimateEl.length == 0 ) {
            dataAnimateEl.each(function() {
              element = $(this);
              // 元素在可视区域，即刻开始动画
              animationStart(element)
            })
          }

          // 监听页面滚动，开始动画
          $('html body').scroll(function(event) {
            var dataAnimateEl = $('[data-animate]');
            if (dataAnimateEl.length > 0 || dataAnimateEl.length == 0 ) {
              dataAnimateEl.each(function() {
                element = $(this);
                // 元素在可视区域，即刻开始动画
                animationStart(element)
              })
            }
          });

          //开始动画
          function animationStart(element) {
            var annimationVal = element.data("animate");
            if (viewingArea(element)) {
              element.removeClass(annimationVal).addClass(annimationVal)
            }else{
              element.removeClass(annimationVal)
            }
          }

          //函数作用：计算元素是否到达可视区域
          function viewingArea(element) {
            var objHeight = $(element).offset().top;　 //元素到顶部的高度
            let winPos = $(window).scrollTop(); //距离顶部滚动
            let val = objHeight - winPos;
            if (val < windowHeight && val > 0) {
              //可视区域
              return true;
            } else {
              //不可视区域
              return false;
            }
          }

        });

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

        $('.rooter_ul').on('click','li',function () {
          $('.drop-down').hide();
        })

      },
      JumpHome(){
        this.$router.push("/");
      },
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
      cursor: pointer;
    }

    .Navigation_main > p {
      float: left;
      margin-top: 9px;
      color: #fff;
      cursor: pointer;
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
      z-index: 2000;
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
      z-index: 2000;
    }
    .sidebar a{
      color: #FFF;
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
      height: 35px;
      background-size: cover;
      margin: 6px 20px 0 0;
      cursor: pointer;
    }

    .Navigation_main > p {
      float: left;
      margin-top: 9px;
      color: #fff;
      cursor: pointer;
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
    .sidebar a{
      color: #FFF;
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
      z-index: 1000000;
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
      font-size: .6rem;
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

    .footer_div{
      width: 16rem;
      height: 50px;
      text-align: center;
      font-size: .5rem;
      line-height: 50px;
      color: #999;
      background: #001629;
    }

    .sidebar{
      width: 1rem;
      height: 3.5rem;
      background: rgba(0,0,0,.6);
      position: fixed;
      right: -4px;
      top: 30%;
      padding: 10px 2px;
      text-align: center;
      cursor: pointer;
      color: #fff;
      border-radius: 6px;
      z-index: 100000;
      font-size: .65rem;
    }

    .phone{
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #8c939d;
      border-radius: 4px;
      position: fixed;
      right: -5rem;
      top: 34%;
      color: #FFF;
      display: none;
    }
    .sidebar a{
      color: #FFF;
    }

  }

</style>
