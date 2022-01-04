<template>
  <div class="stocks-slider__item swiper-slide">
    <div class="card">
      <a class="card__img" href="#">
          <img
            :src="thumbnail"
            :alt="title"
          />
      ></a>
      <div class="card__info">
        <div class="card__info-left">
          <div class="card__price">
            <div class="card__price-new">{{price}} р</div>
            <div class="card__price-old">{{salePrice}} р</div>
          </div>
          <a class="card__title" href="#">{{title}}</a
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
</template>
<script>
export default {
    props: ['title','price','salePrice','thumbnail'],
    setup(props) {
        
    }
};
</script>
<style lang="sass">
.swiper.swiper-sales
    .swiper-slide
        width: 278px

.card__img
    display: block
    position: relative
    width: 100%
    height: 318px
    img
        position: absolute
        object-fit: cover
        width: 100%
        height: 100%
</style>