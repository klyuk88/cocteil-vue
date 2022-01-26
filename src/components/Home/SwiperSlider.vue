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
    <SwiperSlide v-for="(item, index) in saleProducts" :key="index">
      <ProductCard
        :title="item.attributes.Title"
        :price="item.attributes.Price"
        :sale-price="item.attributes.Sale"
        :thumbnail="item.attributes.Thumbnail.data.attributes.url"
        :slug="item.attributes.slug"
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
import { onMounted, computed, ref, reactive } from "vue";
// Import Swiper Vue.js components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import qs from 'qs'

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import ProductCard from "../Base/ProductCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
  },
  setup() {
    const modules = [Navigation];
    const saleProducts = ref([]);

    async function getSaleProducts(params) {
      const query = qs.stringify({
        filters: {
            sale: {
              $ne: 'null'
            }
        },
        populate: {
          Thumbnail: {
            fields: 'url'
          }
        }
        
      })
      try {
        const res = await fetch(`${process.env.VUE_APP_API_URL}/products?${query}`)
        if(res.ok) {
          let resData = await res.json()
          saleProducts.value = resData.data

        }
      } catch (error) {
        console.log(error);
      }

    }

    onMounted(() => {
      getSaleProducts()
    })

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