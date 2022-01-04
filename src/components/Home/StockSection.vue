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
    
  },
};
</script>

<style>
</style>



      const getProducts = async () => {
        let res = await fetch(process.env.VUE_APP_API_URL + "/products", {
          headers: {
            'Authorization': "Basic " + process.env.VUE_APP_API_KEY,
          },
        });
        if (res.ok) {
          let resData = await res.json();
          console.log(resData);
        } else {
          console.log('ddf');
        }
      };

    onMounted(() => {
      getProducts();
    });