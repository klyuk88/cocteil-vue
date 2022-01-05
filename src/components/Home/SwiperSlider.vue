<template>
  <Swiper
    :slidesPerView="'auto'"
    :spaceBetween="80"
    :modules="modules"
    class="swiper-sales"
    :navigation="{
      nextEl: '.stocks-slider__next',
      prevEl: '.stocks-slider__prev',
    }"
  >
    <SwiperSlide
    v-for="(item, index) in saleProducts" :key="index"
    >
      <ProductCard
      :title="item.name"
      :price="item.regular_price"
      :sale-price="item.sale_price"
      :thumbnail="item.images[0].src"
      :slug="item.slug"
      :id="item.id"
      />
    </SwiperSlide>
  </Swiper>

  <button class="stocks-slider__btn stocks-slider__prev centered" type="button">
    <img src="@/assets/images/general/prev.svg" alt="" />
  </button>

  <button class="stocks-slider__btn stocks-slider__next centered" type="button">
    <img src="@/assets/images/general/next.svg" alt="" />
  </button>
</template>
<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
// Import Swiper Vue.js components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import ProductCard from '../Base/ProductCard.vue';


export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard
  },
  setup() {
    const modules = [Navigation];
    const store = useStore();
    store.dispatch("getProducts");
    const saleProducts = computed(() => {
      return store.getters.salePraceProducts;
    });

    return {
      modules,
      saleProducts
    };
  },
};
</script>

<style lang="sass" scoped>
.swiper.swiper-sales
  overflow: initial
</style>