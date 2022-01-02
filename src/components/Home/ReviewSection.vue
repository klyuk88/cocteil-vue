<template>
  <div class="reviews section">
    <div class="container">
      <div class="reviews__title section-title">Отзывы о товаре</div>
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
            <SwiperSlide>
              <div class="reviews-slider__slide swiper-slide">
                <div class="reviews-card">
                  <div class="reviews-card__left">
                    <div class="reviews-card__img">
                      <picture>
                        <source
                          srcset="@/assets/images/content/reviews-1.webp"
                          type="image/webp"
                        />
                        <img
                          src="@/assets/images/content/reviews-1.png"
                          width="94"
                          height="94"
                          alt="img"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="reviews-card__right">
                    <div class="reviews-card__rating flex">
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="reviews-card__txt">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </div>
                    <div class="reviews-card__group flex">
                      <div class="reviews-card__name">Анна Котлова</div>
                      <div class="reviews-card__date">23.05.2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="reviews-slider__slide swiper-slide">
                <div class="reviews-card">
                  <div class="reviews-card__left">
                    <div class="reviews-card__img">
                      <picture>
                        <source
                          srcset="@/assets/images/content/reviews-1.webp"
                          type="image/webp"
                        />
                        <img
                          src="@/assets/images/content/reviews-1.png"
                          width="94"
                          height="94"
                          alt="img"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="reviews-card__right">
                    <div class="reviews-card__rating flex">
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="reviews-card__txt">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </div>
                    <div class="reviews-card__group flex">
                      <div class="reviews-card__name">Анна Котлова</div>
                      <div class="reviews-card__date">23.05.2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="reviews-slider__slide swiper-slide">
                <div class="reviews-card">
                  <div class="reviews-card__left">
                    <div class="reviews-card__img">
                      <picture>
                        <source
                          srcset="@/assets/images/content/reviews-1.webp"
                          type="image/webp"
                        />
                        <img
                          src="@/assets/images/content/reviews-1.png"
                          width="94"
                          height="94"
                          alt="img"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="reviews-card__right">
                    <div class="reviews-card__rating flex">
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="reviews-card__txt">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </div>
                    <div class="reviews-card__group flex">
                      <div class="reviews-card__name">Анна Котлова</div>
                      <div class="reviews-card__date">23.05.2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="reviews-slider__slide swiper-slide">
                <div class="reviews-card">
                  <div class="reviews-card__left">
                    <div class="reviews-card__img">
                      <picture>
                        <source
                          srcset="@/assets/images/content/reviews-1.webp"
                          type="image/webp"
                        />
                        <img
                          src="@/assets/images/content/reviews-1.png"
                          width="94"
                          height="94"
                          alt="img"
                        />
                      </picture>
                    </div>
                  </div>
                  <div class="reviews-card__right">
                    <div class="reviews-card__rating flex">
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                      <div class="reviews-card__rating-item centered">
                        <svg class="svg-sprite-icon icon-star">
                          <use
                            xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="reviews-card__txt">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </div>
                    <div class="reviews-card__group flex">
                      <div class="reviews-card__name">Анна Котлова</div>
                      <div class="reviews-card__date">23.05.2021</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- <div class="reviews-slider swiper-container"> 
                  <div class="swiper-wrapper"> 
                    <div class="reviews-slider__slide swiper-slide"> 
                      <div class="reviews-card">
                        <div class="reviews-card__left"> 
                          <div class="reviews-card__img"> 
                            <picture> 
                              <source srcset="@/assets/images/content/reviews-1.webp" type="image/webp"><img src="@/assets/images/content/reviews-1.png" width="94" height="94" alt="img">
                            </picture>
                          </div>
                        </div>
                        <div class="reviews-card__right">
                          <div class="reviews-card__rating flex">
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="reviews-card__txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                          <div class="reviews-card__group flex"> 
                            <div class="reviews-card__name">Анна Котлова</div>
                            <div class="reviews-card__date">23.05.2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reviews-slider__slide swiper-slide"> 
                      <div class="reviews-card">
                        <div class="reviews-card__left"> 
                          <div class="reviews-card__img"> 
                            <picture> 
                              <source srcset="@/assets/images/content/reviews-2.webp" type="image/webp"><img src="@/assets/images/content/reviews-2.png" width="94" height="94" alt="img">
                            </picture>
                          </div>
                        </div>
                        <div class="reviews-card__right">
                          <div class="reviews-card__rating flex">
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="reviews-card__txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                          <div class="reviews-card__group flex"> 
                            <div class="reviews-card__name">Анна Котлова</div>
                            <div class="reviews-card__date">23.05.2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reviews-slider__slide swiper-slide"> 
                      <div class="reviews-card">
                        <div class="reviews-card__left"> 
                          <div class="reviews-card__img"> 
                            <picture> 
                              <source srcset="@/assets/images/content/reviews-1.webp" type="image/webp"><img src="@/assets/images/content/reviews-1.png" width="94" height="94" alt="img">
                            </picture>
                          </div>
                        </div>
                        <div class="reviews-card__right">
                          <div class="reviews-card__rating flex">
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="reviews-card__txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                          <div class="reviews-card__group flex"> 
                            <div class="reviews-card__name">Анна Котлова</div>
                            <div class="reviews-card__date">23.05.2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reviews-slider__slide swiper-slide"> 
                      <div class="reviews-card">
                        <div class="reviews-card__left"> 
                          <div class="reviews-card__img"> 
                            <picture> 
                              <source srcset="@/assets/images/content/reviews-2.webp" type="image/webp"><img src="@/assets/images/content/reviews-2.png" width="94" height="94" alt="img">
                            </picture>
                          </div>
                        </div>
                        <div class="reviews-card__right">
                          <div class="reviews-card__rating flex">
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="reviews-card__txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                          <div class="reviews-card__group flex"> 
                            <div class="reviews-card__name">Анна Котлова</div>
                            <div class="reviews-card__date">23.05.2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reviews-slider__slide swiper-slide"> 
                      <div class="reviews-card">
                        <div class="reviews-card__left"> 
                          <div class="reviews-card__img"> 
                            <picture> 
                              <source srcset="@/assets/images/content/reviews-1.webp" type="image/webp"><img src="@/assets/images/content/reviews-1.png" width="94" height="94" alt="img">
                            </picture>
                          </div>
                        </div>
                        <div class="reviews-card__right">
                          <div class="reviews-card__rating flex">
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="reviews-card__txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                          <div class="reviews-card__group flex"> 
                            <div class="reviews-card__name">Анна Котлова</div>
                            <div class="reviews-card__date">23.05.2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reviews-slider__slide swiper-slide"> 
                      <div class="reviews-card">
                        <div class="reviews-card__left"> 
                          <div class="reviews-card__img"> 
                            <picture> 
                              <source srcset="@/assets/images/content/reviews-2.webp" type="image/webp"><img src="@/assets/images/content/reviews-2.png" width="94" height="94" alt="img">
                            </picture>
                          </div>
                        </div>
                        <div class="reviews-card__right">
                          <div class="reviews-card__rating flex">
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                            <div class="reviews-card__rating-item centered"> 
                              <svg class="svg-sprite-icon icon-star">
                                <use xlink:href="@/assets/images/svg/symbol/sprite.svg#star"></use>
                              </svg>
                            </div>
                          </div>
                          <div class="reviews-card__txt">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                          <div class="reviews-card__group flex"> 
                            <div class="reviews-card__name">Анна Котлова</div>
                            <div class="reviews-card__date">23.05.2021</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="reviews-slider__pagination swiper-pagination"></div>
                </div> -->
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
      <div class="reviews-foot">
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
  setup() {
    const modules = [Navigation];

    return {
      modules,
    };
  },
};
</script>

<style lang="sass">

</style>