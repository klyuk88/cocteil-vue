<template>
    <div class="card">
      <a class="card__img" href="#" @click.prevent="goToProductPage">
          <img
            :src="adminUrl + thumbnail"
            :alt="title"
          />
      >
      </a>
      <div class="card__info">
        <div class="card__info-left">
          <div class="card__price">
            <div class="card__price-new">{{price}} Br</div>
            <div class="card__price-old" v-if="salePrice">{{salePrice}} Br</div>
          </div>
          <a class="card__title" @click.prevent="goToProductPage">
            {{title}}
          </a>
          <a class="card__btn" @click.prevent="goToProductPage">
            Подробнее
            <svg class="svg-sprite-icon icon-arrow-2">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-2"
              ></use></svg
          >
          </a>
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
          <!-- <div class="card__rating">
            <div class="card__rating-item">
              <svg class="svg-sprite-icon icon-star">
                <use
                  xlink:href="@/assets/images/svg/symbol/sprite.svg#star"
                ></use>
              </svg>
            </div>
          </div> -->
        </div>
      </div>
    </div>
</template> 
<script>
import {useRouter,} from 'vue-router'
import {computed, ref} from 'vue'
export default {
    props: {
      title: String,
      price: Number,
      salePrice: Number,
      thumbnail: String,
      slug: String,
    },
    setup(props) {
      const router = useRouter()
      const adminUrl = ref(process.env.VUE_APP_ADMIN_URL)
  
      const goToProductPage = () => {
        router.push({
          name: 'product',
          params: {
            slug: props.slug,
          }
        })
      }
      return {
        goToProductPage,
        adminUrl
      }
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