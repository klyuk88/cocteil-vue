<template>
  <div class="content content--inner">
    <div class="product">
      <div class="product-mobile">
        <div class="product-mobile__inner">
          <div class="product-mobile__col">
            <a class="product-mobile__back" href="#">
              <svg class="svg-sprite-icon icon-back">
                <use
                  xlink:href="@/assets/images/svg/symbol/sprite.svg#back"
                ></use></svg
              ><span>Корзина</span></a
            >
          </div>
          <div class="product-mobile__col">
            <div class="product-mobile__title">
              {{ store.state.product.name }}
            </div>
          </div>
          <div class="product-mobile__col">
            <a class="product-mobile__link" href="#">
              <svg class="svg-sprite-icon icon-copy">
                <use
                  xlink:href="@/assets/images/svg/symbol/sprite.svg#copy"
                ></use></svg
            ></a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="product-head">
          <div class="product-head__back">
            <a class="cart-back centered" href="#" @click.prevent="goBack">
              <svg class="svg-sprite-icon icon-arrow-5">
                <use
                  xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-5"
                ></use></svg
            ></a>
          </div>

          <BreadCrumbs />
        </div>

        <!-- название  -->
        <div class="product-title">
          <h1 class="section-title">{{ store.state.product.name }}</h1>
          <div class="product-art" v-if="store.state.product.sku">
            Арт {{ store.state.product.sku }}
          </div>
        </div>

        <div class="product-content">
          <div class="product-content__left">
            <div class="propduct-slider-wrap">
              <Swiper
                :slidesPerView="1"
                :modules="modules"
                :thumbs="{ swiper: thumbsSwiper }"
                class="product-gallery"
                :navigation="{
                  nextEl: '.product-gallery__next',
                  prevEl: '.product-gallery__prev',
                }"
              >
                <SwiperSlide
                  v-for="(image, index) in store.state.product.images"
                  :key="index"
                >
                  <div class="product-gallery__img">
                    <img :src="image.src" :alt="image.name" />
                  </div>
                </SwiperSlide>
              </Swiper>

              <button
                class="product-gallery__btn product-gallery__prev centered"
              >
                <img src="@/assets/images/general/prev.svg" alt="" />
              </button>
              <button
                class="product-gallery__btn product-gallery__next centered"
              >
                <img src="@/assets/images/general/next.svg" alt="" />
              </button>
            </div>
            <!-- propduct-slider-wrap  -->

            <Swiper
              class="product-thumbs"
              :modules="modules"
              :freeMode="true"
              :spaceBetween="20"
              watch-slides-progress
              :slidesPerView="4"
              @swiper="setThumbsSwiper"
            >
              <SwiperSlide
                v-for="(image, index) in store.state.product.images"
                :key="index"
              >
                <div class="product-thumbs__slide">
                  <div class="product-thumbs__img">
                    <img :src="image.src" :alt="image.name" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="product-content__right">
            <div class="product-mobile-title">
              <div class="product-mobile-title__txt">
                {{ store.state.product.name }}
              </div>
              <div class="product-mobile-title__art">Арт 09456784</div>
            </div>
            <div class="product-price">
              <div class="product-price__title product-group-title">
                Стоимость
              </div>
              <div class="product-price__value">
                {{ store.state.product.price }} б.р.
              </div>
            </div>

            <div class="product-attributes-wrap">
              <div
                class="product-attribute"
                v-for="(attr, index) in store.state.product.attributes"
                :key="index"
              >
                <h4 class="product-attribute-title">
                  {{attr.name}}
                </h4>
                <div class="product-attribute-list-wrap">
                  <img
                    src="@/assets/images/arrow-select.svg"
                    alt=""
                    class="product-attribute-select-arrow"
                  />
                  <select
                    :name="attr.name"
                    id=""
                    class="product-attribute-list"
                  >
                    <option
                    v-for="(option, index) in attr.options" :key="index"
                    :value="option"
                    >{{option}}
                    </option>

                  </select>
                </div>
              </div>
            </div>

            <a
              class="product-size__link product-link"
              href="#sizeModal"
              data-bs-toggle="modal"
              >Таблица размеров
            </a>
          
            <div class="product-actions">
              <a class="product-cart product-cart--hidden btn" href="#"
                >Купить сейчас</a
              ><a class="product-cart btn" href="#"
                >В корзину
                <svg class="svg-sprite-icon icon-bag">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                  ></use></svg></a
              ><a class="product-favorite" href="#">
                <svg class="svg-sprite-icon icon-heart">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                  ></use></svg
              ></a>
            </div>
            <!-- рейтинг  -->
            <div class="product-rating"
            v-if="store.state.oneProductReviews && store.state.product.reviews_allowed"
            >
              <div class="product-rating__list">
                <div class="product-rating__star"
                  v-for="(item, index) in store.getters.calcRaiting" :key="index"
                >
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
              <div class="product-rating__links">

                <a class="product-rating__link product-link" href="#reviews"
                @click.prevent="toAnchor"
                >
                  Смотреть отзывы
                </a>

              </div>
            </div>


            <div class="product-desc">
              <div class="product-desc__title">Описание</div>
              <div class="product-desc__txt">
                {{ store.state.product.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- отзывы  -->
    <ReviewSection
    v-if="store.state.oneProductReviews && store.state.product.reviews_allowed"
    :reviews="store.state.oneProductReviews"
    />

    <!-- отзывы  -->

    <!-- рекомендуемые товары -->
    <div class="stocks section" v-if="store.state.upSellProducts.length">
      <div class="container">
        <div class="stocks-title section-title">С этим товаром покупают</div>
      </div>

      <div class="stocks-slider-wrapper stocks-slider-wrapper--inner">
        <div class="container">
          <div class="stocks-slider-wrap">
            <Swiper
              :slidesPerView="'auto'"
              :spaceBetween="80"
              :modules="[Navigation]"
              class="swiper-sales"
              :navigation="{
                nextEl: '.stocks-slider__next',
                prevEl: '.stocks-slider__prev',
              }"
            >
              <SwiperSlide
                v-for="(item, index) in store.state.upSellProducts"
                :key="index"
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

            <button
              class="stocks-slider__btn stocks-slider__prev centered"
              type="button"
            >
              <img src="@/assets/images/general/prev.svg" alt="" />
            </button>

            <button
              class="stocks-slider__btn stocks-slider__next centered"
              type="button"
            >
              <img src="@/assets/images/general/next.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- рекомендуемые  -->
  </div>
</template>

<script>
import { ref, computed, onMounted, reactive, watch, onUnmounted } from "vue";

import BreadCrumbs from "@/components/Product/BreadCrumbs.vue";
import ProductCard from "../components/Base/ProductCard.vue";
import ReviewSection from '../components/Home/ReviewSection.vue'

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import {gsap} from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: { BreadCrumbs, Swiper, SwiperSlide, ProductCard, ReviewSection },
  setup(props) {
    gsap.registerPlugin(ScrollToPlugin);
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    store.dispatch("getProducts")
    .then(() => {
      store.commit("setProduct", route.params.slug);
      if (store.state.product.upsell_ids.length) {
        store.commit("setUpSellProducts", store.state.product.upsell_ids);
      } else {
        store.commit("clearUpSellProducts");
      }


    })
    .then(() => {
      store.dispatch('getProductReviews', store.state.product.id)

    })

    const toAnchor = () => {
       gsap.to(window, {
        duration: 1,
        scrollTo: '#reviews',
        ease: "power2",
      });

    }

    const goBack = () => {
      router.go(-1);
    };

    const modules = [Navigation, Thumbs];
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      modules,
      thumbsSwiper,
      setThumbsSwiper,
      Navigation,
      store,
      goBack,
      toAnchor
    };
  },
};
</script>

<style lang="sass">
.propduct-slider-wrap
  position: relative

.swiper.swiper-sales
  overflow: initial

.stocks-slider-wrap
  position: relative

.product-gallery__img
  width: 100%
  position: relative
  height: 700px
  img
    position: absolute
    width: 100%
    height: 100%
    object-fit: cover

// .product
//   padding-bottom: 100px

.product-attribute-list
  appearance: none
  background: transparent
  padding: 10px
  width: 100%
  border: 1px solid #514A7E
  width: 100%

.product-attribute
  margin-bottom: 20px

.product-actions
  margin-top: 30px

.product-size__link
  margin-top: 20px

.product-attribute-list-wrap
  position: relative
  width: 100%
  z-index: 1

.product-attribute-select-arrow
  position: absolute
  right: 10px
  top: 0
  width: 10px
  top: 50%
  transform: translateY(-50%)
  z-index: 10

.product-attribute-title
  font-size: 1.150rem
  font-weight: 400

</style>