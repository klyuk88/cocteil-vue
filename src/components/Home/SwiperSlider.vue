<template>
  <swiper
    :slidesPerView="'auto'"
    :spaceBetween="80"
    :modules="modules"
    class="swiper-sales"
    :navigation="{
      nextEl: '.stocks-slider__next',
      prevEl: '.stocks-slider__prev',
    }"
  >
    <swiper-slide>
      <div class="stocks-slider__item swiper-slide">
        <div class="card">
          <a class="card__img" href="#">
            <picture>
              <source
                srcset="@/assets/images/content/card-1.webp"
                type="image/webp"
              />
              <img
                src="@/assets/images/content/card-1.jpg"
                width="278"
                height="319"
                alt="img"
              /> </picture
          ></a>
          <div class="card__info">
            <div class="card__info-left">
              <div class="card__price">
                <div class="card__price-new">50.00 р</div>
                <div class="card__price-old">65.00 р</div>
              </div>
              <a class="card__title" href="#">Блузка женская классная </a
              ><a class="card__btn" href="#"
                >Подробнее
                <svg class="svg-sprite-icon icon-arrow-2">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
                  ></use></svg
              ></a>
            </div>
            <div class="card__info-right">
              <div class="card__controls">
                <a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-heart">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                    ></use></svg></a
                ><a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-bag">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                    ></use></svg
                ></a>
              </div>
              <div class="card__rating">
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="stocks-slider__item swiper-slide">
        <div class="card">
          <a class="card__img" href="#">
            <picture>
              <source
                srcset="@/assets/images/content/card-1.webp"
                type="image/webp"
              />
              <img
                src="@/assets/images/content/card-1.jpg"
                width="278"
                height="319"
                alt="img"
              /> </picture
          ></a>
          <div class="card__info">
            <div class="card__info-left">
              <div class="card__price">
                <div class="card__price-new">50.00 р</div>
                <div class="card__price-old">65.00 р</div>
              </div>
              <a class="card__title" href="#">Блузка женская классная </a
              ><a class="card__btn" href="#"
                >Подробнее
                <svg class="svg-sprite-icon icon-arrow-2">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
                  ></use></svg
              ></a>
            </div>
            <div class="card__info-right">
              <div class="card__controls">
                <a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-heart">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                    ></use></svg></a
                ><a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-bag">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                    ></use></svg
                ></a>
              </div>
              <div class="card__rating">
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="stocks-slider__item swiper-slide">
        <div class="card">
          <a class="card__img" href="#">
            <picture>
              <source
                srcset="@/assets/images/content/card-1.webp"
                type="image/webp"
              />
              <img
                src="@/assets/images/content/card-1.jpg"
                width="278"
                height="319"
                alt="img"
              /> </picture
          ></a>
          <div class="card__info">
            <div class="card__info-left">
              <div class="card__price">
                <div class="card__price-new">50.00 р</div>
                <div class="card__price-old">65.00 р</div>
              </div>
              <a class="card__title" href="#">Блузка женская классная </a
              ><a class="card__btn" href="#"
                >Подробнее
                <svg class="svg-sprite-icon icon-arrow-2">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
                  ></use></svg
              ></a>
            </div>
            <div class="card__info-right">
              <div class="card__controls">
                <a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-heart">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                    ></use></svg></a
                ><a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-bag">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                    ></use></svg
                ></a>
              </div>
              <div class="card__rating">
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="stocks-slider__item swiper-slide">
        <div class="card">
          <a class="card__img" href="#">
            <picture>
              <source
                srcset="@/assets/images/content/card-1.webp"
                type="image/webp"
              />
              <img
                src="@/assets/images/content/card-1.jpg"
                width="278"
                height="319"
                alt="img"
              /> </picture
          ></a>
          <div class="card__info">
            <div class="card__info-left">
              <div class="card__price">
                <div class="card__price-new">50.00 р</div>
                <div class="card__price-old">65.00 р</div>
              </div>
              <a class="card__title" href="#">Блузка женская классная </a
              ><a class="card__btn" href="#"
                >Подробнее
                <svg class="svg-sprite-icon icon-arrow-2">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
                  ></use></svg
              ></a>
            </div>
            <div class="card__info-right">
              <div class="card__controls">
                <a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-heart">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                    ></use></svg></a
                ><a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-bag">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                    ></use></svg
                ></a>
              </div>
              <div class="card__rating">
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="stocks-slider__item swiper-slide">
        <div class="card">
          <a class="card__img" href="#">
            <picture>
              <source
                srcset="@/assets/images/content/card-1.webp"
                type="image/webp"
              />
              <img
                src="@/assets/images/content/card-1.jpg"
                width="278"
                height="319"
                alt="img"
              /> </picture
          ></a>
          <div class="card__info">
            <div class="card__info-left">
              <div class="card__price">
                <div class="card__price-new">50.00 р</div>
                <div class="card__price-old">65.00 р</div>
              </div>
              <a class="card__title" href="#">Блузка женская классная </a
              ><a class="card__btn" href="#"
                >Подробнее
                <svg class="svg-sprite-icon icon-arrow-2">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
                  ></use></svg
              ></a>
            </div>
            <div class="card__info-right">
              <div class="card__controls">
                <a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-heart">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                    ></use></svg></a
                ><a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-bag">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                    ></use></svg
                ></a>
              </div>
              <div class="card__rating">
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="stocks-slider__item swiper-slide">
        <div class="card">
          <a class="card__img" href="#">
            <picture>
              <source
                srcset="@/assets/images/content/card-1.webp"
                type="image/webp"
              />
              <img
                src="@/assets/images/content/card-1.jpg"
                width="278"
                height="319"
                alt="img"
              /> </picture
          ></a>
          <div class="card__info">
            <div class="card__info-left">
              <div class="card__price">
                <div class="card__price-new">50.00 р</div>
                <div class="card__price-old">65.00 р</div>
              </div>
              <a class="card__title" href="#">Блузка женская классная </a
              ><a class="card__btn" href="#"
                >Подробнее
                <svg class="svg-sprite-icon icon-arrow-2">
                  <use
                    xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
                  ></use></svg
              ></a>
            </div>
            <div class="card__info-right">
              <div class="card__controls">
                <a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-heart">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#heart"
                    ></use></svg></a
                ><a class="card__controls-item" href="#">
                  <svg class="svg-sprite-icon icon-bag">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#bag"
                    ></use></svg
                ></a>
              </div>
              <div class="card__rating">
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
                <div class="card__rating-item">
                  <svg class="svg-sprite-icon icon-star">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <button class="stocks-slider__btn stocks-slider__prev centered" type="button">
    <img src="@/assets/images/general/prev.svg" alt="" />
  </button>

  <button class="stocks-slider__btn stocks-slider__next centered" type="button">
    <img src="@/assets/images/general/next.svg" alt="" />
  </button>
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
  setup() {
    const modules = [Navigation];

    return {
      modules,
    };
  },
};
</script>

<style lang="sass" scoped>
.swiper.swiper-sales
    overflow: initial
    .swiper-slide
        width: 278px
</style>