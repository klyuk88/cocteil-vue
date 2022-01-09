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
            <SwiperSlide v-for="(review, index) in reviews" :key="index">
              <div class="reviews-card">
                <div class="reviews-card__left">
                  <div class="reviews-card__img">
                    <img
                      :src="review.reviewer_avatar_urls['96']"
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
                    v-for="(item, index) in review.rating" :key="index"
                    >
                      <svg class="svg-sprite-icon icon-star">
                        <use
                          xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                        ></use>
                      </svg>
                    </div>
                  </div>
                  <div class="reviews-card__txt">
                    {{ review.review }}
                  </div>
                  <div class="reviews-card__group flex">
                    <div class="reviews-card__name">{{ review.reviewer }}</div>
                    <div class="reviews-card__date">
                      {{ new Date(review.date_created).toLocaleDateString() }}
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
  setup() {
    const modules = [Navigation];



    return {
      modules,
    };
  },
};
</script>

<style lang="sass">
.reviews-card__img
  img
    border-radius: 50%
</style>