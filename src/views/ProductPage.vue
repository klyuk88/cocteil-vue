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
            <div class="product-mobile__title">Платье женское</div>
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
            <a class="cart-back centered" href="#">
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
          <h1 class="section-title">Блузка женская</h1>
          <div class="product-art">Арт 06578990-086</div>
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
                <SwiperSlide>
                  <div class="product-gallery__img">
                    <picture>
                      <source
                        srcset="@/assets/images/content/product.webp"
                        type="image/webp"
                      />
                      <img
                        src="@/assets/images/content/product.jpg"
                        width="575"
                        height="572"
                        alt="img"
                      />
                    </picture>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="product-gallery__img">
                    <picture>
                      <source
                        srcset="@/assets/images/content/product.webp"
                        type="image/webp"
                      />
                      <img
                        src="@/assets/images/content/product.jpg"
                        width="575"
                        height="572"
                        alt="img"
                      />
                    </picture>
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
              <SwiperSlide>
                <div class="product-thumbs__slide">
                  <div class="product-thumbs__img">
                    <picture>
                      <source
                        srcset="@/assets/images/content/thumb-1.webp"
                        type="image/webp"
                      />
                      <img
                        src="@/assets/images/content/thumb-1.jpg"
                        width="131"
                        height="110"
                        alt="img"
                      />
                    </picture>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="product-thumbs__slide">
                  <div class="product-thumbs__img">
                    <picture>
                      <source
                        srcset="@/assets/images/content/thumb-1.webp"
                        type="image/webp"
                      />
                      <img
                        src="@/assets/images/content/thumb-1.jpg"
                        width="131"
                        height="110"
                        alt="img"
                      />
                    </picture>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="product-content__right">
            <div class="product-mobile-title">
              <div class="product-mobile-title__txt">Платье женское</div>
              <div class="product-mobile-title__art">Арт 09456784</div>
            </div>
            <div class="product-price">
              <div class="product-price__title product-group-title">
                Стоимость
              </div>
              <div class="product-price__value">50.00 б.р.</div>
            </div>
            <div class="product-colors">
              <div class="product-colors__title product-group-title">Цвета</div>
              <div class="product-colors__list">
                <a
                  class="product-colors__link product-colors__link--white"
                  href="#"
                >
                </a
                ><a
                  class="product-colors__link product-colors__link--black"
                  href="#"
                >
                </a
                ><a
                  class="product-colors__link product-colors__link--green"
                  href="#"
                >
                </a
                ><a
                  class="product-colors__link product-colors__link--purp"
                  href="#"
                >
                </a
                ><a
                  class="product-colors__link product-colors__link--yellow"
                  href="#"
                >
                </a>
              </div>
            </div>
            <div class="product-size">
              <div class="product-size__group">
                <div class="product-size__title product-group-title">
                  Размер
                </div>
                <div class="product-size__list">
                  <div class="product-size__item">
                    <div class="product-size__item-value">S</div>
                    <div class="product-size__item-number">42</div>
                  </div>
                  <div class="product-size__item">
                    <div class="product-size__item-value">M</div>
                    <div class="product-size__item-number">44</div>
                  </div>
                  <div class="product-size__item">
                    <div class="product-size__item-value">L</div>
                    <div class="product-size__item-number">46</div>
                  </div>
                  <div class="product-size__item">
                    <div class="product-size__item-value">XL</div>
                    <div class="product-size__item-number">48</div>
                  </div>
                </div>
              </div>
              <a
                class="product-size__link product-link"
                href="#sizeModal"
                data-bs-toggle="modal"
                >Таблица размеров
              </a>
            </div>
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
            <div class="product-rating">
              <div class="product-rating__list">
                <div class="product-rating__star">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="product-rating__star">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="product-rating__star">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="product-rating__star">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="product-rating__star">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
              <div class="product-rating__links">
                <a class="product-rating__link product-link" href="#">
                  Смотреть все отзывы</a
                ><a
                  class="product-rating__link product-link product-link--hidden"
                  href="#"
                >
                  Добавить отзыв</a
                >
              </div>
            </div>
            <div class="product-desc">
              <div class="product-desc__title">Описание</div>
              <div class="product-desc__txt">
                <p>
                  Здесь будет какое-то неболшое описание о вещи <br />Здесь
                  будет какое-то неболшое описание о вещи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- рекомендуемые товары -->
    <div class="stocks section">
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
              <SwiperSlide>
                <ProductCard
                  title="Название"
                  price="200"
                  sale-price="100"
                  thumbnail="http://localhost:8080/img/card-4.fdf548c7.webp"
                  slug="nazvanie"
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
  </div>
</template>

<script>
import { ref } from "vue";
import BreadCrumbs from "@/components/Product/BreadCrumbs.vue";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import ProductCard from "../components/Base/ProductCard.vue";
import {useRoute} from 'vue-router'

export default {
  components: { BreadCrumbs, Swiper, SwiperSlide, ProductCard },
  setup(props) {

    const route = useRoute()
    console.log(route.params);
    
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
</style>