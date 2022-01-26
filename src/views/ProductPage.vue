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
              {{ product.data.Title }}
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
          <h1 class="section-title">{{ product.data.Title }}</h1>
          <div class="product-art">Арт 123455</div>
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
                  v-for="(item, index) in product.gallery"
                  :key="index"
                >
                  <div class="product-gallery__img">
                    <img :src="adminUrl + item.attributes.url" alt="" />
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
                v-for="(item, index) in product.gallery"
                :key="index"
              >
                <div class="product-thumbs__slide">
                  <div class="product-thumbs__img">
                    <img :src="adminUrl + item.attributes.url" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="product-content__right">
            <div class="product-mobile-title">
              <div class="product-mobile-title__txt">
                {{ product.data.Title }}
              </div>
              <div class="product-mobile-title__art">Арт 09456784</div>
            </div>
            <div class="product-price">
              <div class="product-price__title product-group-title">
                Стоимость
              </div>
              <div class="product-price__value">
                {{ product.data.Price }} Br
              </div>
            </div>

            <div class="product-attributes-wrap">
              <template v-for="(item, index) in product.attrs" :key="index">
                <div class="product-attribute">
                  <h4 class="product-attribute-title">
                    {{ item.attributes.Title }}
                  </h4>
                  <div class="product-attribute-list-wrap">
                    <img
                      src="@/assets/images/arrow-select.svg"
                      alt=""
                      class="product-attribute-select-arrow"
                    />
                    <select
                      :name="item.attributes.Title"
                      id=""
                      class="product-attribute-list"
                    >
                      <template
                        v-for="(option, index) in item.attributes.terms.data"
                        :key="index"
                      >
                        <option v-if="option.attributes.products.data.length">
                          {{ option.attributes.Title }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>
              </template>
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
                  ></use></svg
              ></a>

              <a class="product-favorite" href="#">
                <svg class="svg-sprite-icon icon-heart">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                  ></use></svg
              ></a>
            </div>
            <!-- рейтинг  -->
            <div class="product-rating" v-if="product.raiting">
              <div class="product-rating__list">
                <div
                  class="product-rating__star"
                  v-for="(star, index) in product.raiting"
                  :key="index"
                >
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
              <div class="product-rating__links">
                <a
                  class="product-rating__link product-link"
                  href="#reviews"
                  v-if="product.reviews"
                  @click.prevent="toAnchor"
                >
                  Смотреть отзывы
                </a>
              </div>
            </div>

            <div class="product-desc">
              <div class="product-desc__title">Описание</div>
              <div class="product-desc__txt">
                {{ product.data.Description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- отзывы  -->
    <ReviewSection v-if="product.reviews.length" :reviews="product.reviews" />
    <!-- отзывы  -->

    <!-- рекомендуемые товары -->
    <!-- <div class="stocks section" v-if="store.state.upSellProducts.length">
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
    </div> -->
    <!-- рекомендуемые  -->
  </div>
</template>

<script>
import { ref, computed, onMounted, reactive, watch, onUnmounted } from "vue";

import BreadCrumbs from "@/components/Product/BreadCrumbs.vue";
import ProductCard from "../components/Base/ProductCard.vue";
import ReviewSection from "../components/Home/ReviewSection.vue";

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useRoute, useRouter } from "vue-router";
import qs from "qs";

export default {
  components: { BreadCrumbs, Swiper, SwiperSlide, ProductCard, ReviewSection },
  setup(props) {
    gsap.registerPlugin(ScrollToPlugin);
    const route = useRoute();
    const router = useRouter();
    const adminUrl = process.env.VUE_APP_ADMIN_URL;

    const product = reactive({
      data: {},
      gallery: [],
      attrs: [],
      reviews: [],
      raiting: null,
    });

    async function getProduct() {
      const query = qs.stringify({
        filters: {
          slug: {
            $eq: route.params.slug,
          },
        },
        populate: {
          Gallery: {
            feilds: "",
          },
          reviews: {
            populate: {
              users_permissions_user: {
                fields: ["username"],
                populate: {
                  avatar: {
                    fields: "url",
                  },
                },
              },
            },
          },
        },
      });
      try {
        const res = await fetch(
          `${process.env.VUE_APP_API_URL}/products?${query}`
        );
        if (res.ok) {
          const resData = await res.json();
          product.data = resData.data[0].attributes;
          product.gallery = resData.data[0].attributes.Gallery.data || [];
          product.reviews = resData.data[0].attributes.reviews.data || [];

          if (product.reviews) {
            let raitingSum = null;
            product.reviews.forEach((rev) => {
              raitingSum = raitingSum + rev.attributes.raiting;
            });
            product.raiting = raitingSum / product.reviews.length;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function getParameters() {
      const query = qs.stringify({
        filters: {
          product_page_display: {
            $eq: true,
          },
        },
        populate: {
          terms: {
            populate: {
              products: {
                filters: {
                  slug: {
                    $eq: route.params.slug,
                  },
                },
              },
            },
          },
        },
      });
      const res = await fetch(
        process.env.VUE_APP_API_URL + "/parameters?" + query
      );
      if (res.ok) {
        const resData = await res.json();
        product.attrs = resData.data;
      }
    }

    const toAnchor = () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: "#reviews",
        ease: "power2",
      });
    };

    const goBack = () => {
      router.go(-1);
    };

    const modules = [Navigation, Thumbs];
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    onMounted(() => {
      getProduct();
      getParameters();
    });

    return {
      modules,
      thumbsSwiper,
      setThumbsSwiper,
      Navigation,
      goBack,
      toAnchor,
      product,
      adminUrl,
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
  padding: 5px
  padding-left: 0
  width: 100%
  border: none

.product-attribute
  margin-bottom: 20px

.product-actions
  margin-top: 30px

.product-size__link
  margin-top: 20px

.product-attribute-list-wrap
  position: relative
  width: 50%
  z-index: 1
  border-bottom: 1px solid rgba(0,0,0,0.2)

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