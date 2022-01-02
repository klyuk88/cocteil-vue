<template>
  <div class="stocks section">
    <div class="container">
      <div class="stocks-head section-title">
        <div class="stocks-head__title-1">Успей купить!</div>
        <div class="stocks-head__title-2 f-script">Акции</div>
      </div>
    </div>
    <div class="stocks-slider-wrapper">
      <div class="container">
        <SwiperSlider />
      </div>
    </div>

    <div class="stocks-mobile">
      <div class="container">
        <StockMobileList />
      </div>
    </div>
  </div>
</template>

<script>
import StockMobileList from "./StockMobileList.vue";
import SwiperSlider from "./SwiperSlider.vue";
export default {
  components: {
    SwiperSlider,
    StockMobileList,
  },
  setup(props) {
    return {};
  },
};
</script>

<style>
</style>