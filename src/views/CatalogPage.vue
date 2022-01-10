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
            <ul
              class="child-categories"
              v-if="store.state.childCategories.length"
            >
              <li
                v-for="(category, index) in store.state.childCategories"
                :key="index"
              >
              <router-link
              :to="{
                name: 'category',
                params: {
                  categoryName: category.slug
                }
              }"
              >
              {{ category.name }}<span>{{ category.count }}</span>
              </router-link>
                
              </li>
            </ul>

            <form class="catalog-filter" action="/">
              <FilterItemCatalog />

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
            </form>
          </div>

          <!-- товары  -->
          <div class="catalog-content__right">
            <div class="catalog-list flex">
              <!-- список товаров  -->
              <div
                class="catalog-list__item"
                v-for="(item, index) in store.state.productsOfCategory"
                :key="index"
              >
                <ProductCard
                  :title="item.name"
                  :price="item.regular_price"
                  :sale-price="item.sale_price"
                  :thumbnail="item.images[0].src"
                  :slug="item.slug"
                  :category="store.state.category.slug"
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
import {
  ref,
  reactive,
  computed,
  onMounted,
  watch,
  onUnmounted,
  watchEffect,
} from "vue";
import { useRoute, onBeforeRouteLeave, useRouter } from "vue-router";
import { useStore } from "vuex";
import ProductCard from "../components/Base/ProductCard.vue";
import FilterItemCatalog from "../components/FilterItemCatalog.vue";
export default {
  components: { ProductCard, FilterItemCatalog },

  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();


    const stop = watchEffect(() => {
      store.dispatch("getCategory", route.params.categoryName).then(() => {
      store.dispatch("getProductOfCategory", store.state.category.id);
      store.commit("setChildCategories", store.state.category.id);
    });
    })

    

    onBeforeRouteLeave(() => {
      stop()
    })


    return {
      store,
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
    line-height: 1
    span
      font-size: 0.75rem
      color: grey
      margin-left: 15px
</style>

текущая категория по слагу из роутера
дочерние категории текущей категории по ее айди
список товаров по айди текущей категории
спискок атрибутов и термины каждого

при изминении слага роутера получать по новой все данные

