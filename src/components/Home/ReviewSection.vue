<template>
  <div class="reviews section" id="reviews">
    <div class="container">
      <div class="reviews__title section-title">Отзывы</div>
      <div class="reviews-content flex">
        <div class="reviews-content__left">
          <Swiper
            :slidesPerView="2"
            :spaceBetween="20"
            :modules="modules"
            class="reviews-slider"
            :navigation="{
              nextEl: '.reviews-btn',
              prevEl: '',
            }"
          >
            <SwiperSlide v-for="(item, index) in reviews" :key="index">
              <div class="reviews-card">
                <div class="reviews-card__left">
                  <div class="reviews-card__img">
                    <img
                      :src="adminUrl + item.attributes['users_permissions_user'].data.attributes.avatar.data.attributes.url || '@/assets/images/user_avatar.jpg'"
                      width="94"
                      height="94"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="reviews-card__right">
                  <div class="reviews-card__rating flex">
                    <div
                    class="reviews-card__rating-item centered"
                    v-for="(item, index) in item.attributes.raiting" :key="index"
                    >
                      <svg class="svg-sprite-icon icon-star">
                        <use
                          xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                        ></use>
                      </svg>
                    </div>
                  </div>
                  <div class="reviews-card__txt">
                    {{item.attributes.message}}
                  </div>
                  <div class="reviews-card__group flex">
                    <div class="reviews-card__name">
                      {{item.attributes['users_permissions_user'].data.attributes.username}}

                    </div>
                    <div class="reviews-card__date">
                      {{ new Date(item.attributes.publishedAt).toLocaleDateString() }}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="reviews-content__right">
          <button class="reviews-btn centered" type="button">
            <svg class="svg-sprite-icon icon-arrow-3">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-3"
              ></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="reviews-foot"
      >
        <a class="reviews-foot__btn btn" href="#">Добавить отзыв </a>
      </div>
    </div>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import {ref} from 'vue'

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    reviews: Array,
  },
  setup(props) {
    const modules = [Navigation];
    const adminUrl = ref(process.env.VUE_APP_ADMIN_URL)

    return {
      modules,
      adminUrl
    };
  },
};
</script>

<style lang="sass">
.reviews-card__img
  width: 100px
  height: 100px
  position: relative
  overflow: hidden
  border-radius: 60px
  img
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    object-fit: cover
</style>