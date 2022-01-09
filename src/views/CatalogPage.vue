<template>
  <div class="content content--inner">
 
    <div class="catalog">
      <div class="catalog-mobile">
        <div class="catalog-mobile__inner">
          <a class="catalog-mobile__back" href="#">
            <svg class="svg-sprite-icon icon-back">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#back"
              ></use></svg
          ></a>
          <ul class="catalog-mobile__menu">
            <li class="catalog-mobile__menu-item">
              <a class="catalog-mobile__menu-link" href="#">Женщинам</a>
            </li>
            <li class="catalog-mobile__menu-item">Блузки и рубашки</li>
          </ul>
          <button class="catalog-mobile__sorting">
            <svg class="svg-sprite-icon icon-sorting">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#sorting"
              ></use>
            </svg>
          </button>
          <button class="catalog-mobile__filter">
            <svg class="svg-sprite-icon icon-filter">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#filter"
              ></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="container">
        <div class="catalog-breadcrumbs breadcrumbs">
          <ul class="breadcrumbs-list">
            <li class="breadcrumbs-list__item">
              <a class="breadcrumbs-list__link" href="#">Главная</a>
            </li>
            <li class="breadcrumbs-list__item">
              <a class="breadcrumbs-list__link" href="#">Женщинам</a>
            </li>
            <li class="breadcrumbs-list__item">Блузки и рубашки</li>
          </ul>
        </div>

        <h1 class="content-title section-title">
          {{ store.state.category.name }}
        </h1>

        <div class="catalog-sorting">
          <div class="catalog-sorting__txt">Сортировать по:</div>
          <div class="catalog-sorting__list">
            <div class="sorting">
              <label class="sorting-label">
                <input class="sorting-input" type="radio" name="sorting" /><span
                  class="sorting-txt"
                  >Популярности</span
                >
              </label>
              <label class="sorting-label">
                <input class="sorting-input" type="radio" name="sorting" /><span
                  class="sorting-txt"
                  >Рейтингу</span
                >
              </label>
              <label class="sorting-label">
                <input class="sorting-input" type="radio" name="sorting" /><span
                  class="sorting-txt"
                  >Цене</span
                >
              </label>
              <label class="sorting-label">
                <input class="sorting-input" type="radio" name="sorting" /><span
                  class="sorting-txt"
                  >Скидке</span
                >
              </label>
              <label class="sorting-label">
                <input class="sorting-input" type="radio" name="sorting" /><span
                  class="sorting-txt"
                  >Обновлению</span
                >
              </label>
            </div>
          </div>
        </div>
        <div class="catalog-content">
          <!-- сайдбар  -->
          <div class="catalog-content__left">

            <ul class="child-categories"
            v-if="childCategories.length"
            >
                <li
                v-for="(category, index) in childCategories" :key="index"
                >
                {{category.name}}
                </li>
            </ul>

            <form class="catalog-filter" action="/">
              <div class="catalog-filter__group">
                <div class="catalog-filter__title">Цена, б.р</div>
                <div class="catalog-filter__range">
                  <div class="catalog-filter__range-inner">
                    <span class="catalog-filter__range-txt">От</span
                    ><span class="catalog-filter__range-txt">До</span>
                  </div>
                  <div id="filterSlider"></div>
                </div>
              </div>
              <div class="catalog-filter__group">
                <div
                  class="catalog-filter__title show-filter"
                  data-bs-toggle="collapse"
                  data-bs-target="#filter1"
                  aria-expanded="false"
                >
                  Размер
                  <svg class="svg-sprite-icon icon-up">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#up"
                    ></use>
                  </svg>
                </div>
                <div class="collapse" id="filter1">
                  <div class="catalog-filter__dropdown">
                    <div class="catalog-filter__list">
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >S</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >M</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >L</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >XL</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >2XL</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >3XL</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >36</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >38</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >40</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >42</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >44</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >46</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >48</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >50</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >52</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >54</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >56</span
                        >
                      </label>
                      <label class="checkbox catalog-filter__checkbox">
                        <input class="checkbox-input" type="checkbox" /><span
                          class="checkbox-txt"
                          >Универсальный</span
                        >
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="catalog-filter__group">
                <div
                  class="catalog-filter__title show-filter"
                  data-bs-toggle="collapse"
                  data-bs-target="#filter2"
                  aria-expanded="false"
                >
                  Цвета
                  <svg class="svg-sprite-icon icon-up">
                    <use
                      xlink:href="@/assets/images/svg/symbol/sprite.svg#up"
                    ></use>
                  </svg>
                </div>
                <div class="collapse" id="filter2">
                  <div class="catalog-filter__colors">
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-white"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-black"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-red"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-green"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-yellow"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-blue"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-gray"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-gray"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-gray"
                        ></span>
                      </label>
                    </div>
                    <div class="catalog-filter__colors-item">
                      <label class="catalog-filter__colors-label">
                        <input
                          class="catalog-filter__colors-input"
                          type="checkbox"
                        /><span
                          class="catalog-filter__colors-circle color-gray"
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- товары  -->
          <div class="catalog-content__right">
            <div class="catalog-list flex">
              <!-- список товаров  -->
              <div class="catalog-list__item"
              v-for="(item, index) in store.state.productsOfCategory" :key="index"
              >
                   <ProductCard
                  :title="item.name"
                  :price="item.regular_price"
                  :sale-price="item.sale_price"
                  :thumbnail="item.images[0].src"
                  :slug="item.slug"
                  :id="item.id"
                  />

              </div>
              <!-- catalog-list__item end -->

             

            </div>
            <!-- список товаров  -->
          </div>
        </div>
        <div class="catalog-foot">
          <a class="catalog-more" href="#">
            <span class="catalog-more__txt">Ещё</span
            ><span class="catalog-more__icon">
              <svg class="svg-sprite-icon icon-arrow-4">
                <use
                  xlink:href="@/assets/images/svg/symbol/sprite.svg#arrow-4"
                ></use></svg></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch, onUnmounted, watchEffect } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";
import ProductCard from '@/components/Base/ProductCard.vue'
export default {
  components: {ProductCard},
  setup(props) {
    const store = useStore();
    const route = useRoute();

    const getData = async () => {
      await store.dispatch("getCategory", route.params.categoryName)
      await store.dispatch('getProductOfCategory', store.state.category.id)
      await store.dispatch("getCategories")
    }
  
    const childCategories = computed(() => {
      return store.state.categories.filter(
        (category) =>
          category.parent === store.state.category.id && category.count > 0
          );
    });

    const stop = watchEffect(() => {
      getData()
    })


    onMounted(() => {
      getData()
      
    })

    onBeforeRouteLeave(() => {
      stop()
    })


    // watch(
    //   () => route.params.category,
    //   (newSlug, Slug) => {
    //     store.dispatch("getCategory", newSlug)
    //     store.dispatch('getProductOfCategory', store.state.category.id)
    //     store.dispatch("getCategories")
    //   }
    // );
    

    // store.dispatch("getCategory", route.params.category)
    // .then(() => {
    //   store.dispatch('getProductOfCategory', store.state.category.id)
    //   store.dispatch("getCategories")
    // })





   

    return {
      store,
      childCategories,
    };
  },
};
</script>

<style lang="sass">
.child-categories
  margin-bottom: 30px
  li
    font-size: 1rem
    cursor: pointer
    color: #514A7E

</style>