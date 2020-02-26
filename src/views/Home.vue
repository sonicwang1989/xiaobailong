<template>
  <div class="main">
    <!-- Slider main container -->
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(item,index) in swiperItems" :key="index">
          <div class="swiper-bg-img" :style="item.style"></div>
        </div>
      </div>
      <!-- If we need pagination -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev" v-if="swiperIndex>0">
        <van-icon name="arrow-up" />
      </div>
      <div class="swiper-button-next" v-if="swiperIndex<2">
        <van-icon name="arrow-down" />
      </div>

      <!-- If we need scrollbar -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { Icon } from 'vant';
import bg1 from '@/assets/images/bg1.jpg';
import bg2 from '@/assets/images/bg2.jpg';
import bg3 from '@/assets/images/bg3.jpg';

export default {
  name: 'Home',
  components: {
    'van-icon': Icon,
  },
  data: function() {
    return {
      swiper: null,
      swiperIndex: 0,
      swiperItems: [
        { style: { backgroundImage: `url(${bg1})` } },
        { style: { backgroundImage: `url(${bg2})` } },
        { style: { backgroundImage: `url(${bg3})` } },
      ],
    };
  },
  mounted() {
    const self = this;
    self.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function() {
          self.swiperIndex = this.activeIndex;
        },
      },
    });
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  position: fixed;
  width: 100%;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
  font-size: 2rem;
}

.swiper-button-next {
  bottom: 0;
  text-align: center;
  animation: shake-down 1s infinite;
}

.swiper-button-prev {
  top: 0;

  animation: shake-up 1s infinite;
  color: #fff;
}

.swiper-bg-img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}

@keyframes shake-up {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes shake-down {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(6px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
