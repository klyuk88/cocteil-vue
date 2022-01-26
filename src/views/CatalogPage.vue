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
        <BreadCrumbs />

        <h1 class="content-title section-title">{{ data.title }}</h1>
        <div class="catalog-sorting">
          <div class="catalog-sorting__txt">Сортировать по:</div>
          <div class="catalog-sorting__list">
            <div class="sorting">
              <!-- <label class="sorting-label">
                <input class="sorting-input" type="radio" name="sorting" /><span
                  class="sorting-txt"
                  >Популярности</span
                >
              </label> -->
            </div>
          </div>
        </div>
        <div class="catalog-content">
          <!-- сайдбар  -->
          <TheSidebar @checkInput="inputCheck" />

          <!-- товары  -->

          <div class="catalog-content__right">
            <div class="catalog-list flex" v-if="data.products.length">
              <!-- список товаров  -->
              <div
                class="catalog-list__item"
                v-for="(item, index) in data.products"
                :key="index"
              >
                <ProductCard
                  :title="item.attributes.Title"
                  :price="item.attributes.Price"
                  :sale-price="item.attributes.Sale"
                  :thumbnail="item.attributes.Thumbnail.data.attributes.url"
                  :slug="item.attributes.slug"
                />
              </div>
              <!-- catalog-list__item end -->
            </div>
            <!-- список товаров  -->
            <h2 v-else>Отсутствуют товары, соответсвующие запросу</h2>
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
import { reactive, ref, watchEffect, watch, onMounted } from "vue";
import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";

import qs from "qs";

import ProductCard from "../components/Base/ProductCard.vue";
import TheSidebar from "../components/TheSidebar.vue";
import BreadCrumbs from "../components/Product/BreadCrumbs.vue";
export default {
  components: { ProductCard, TheSidebar, BreadCrumbs },

  setup(props) {
    const route = useRoute();
    const router = useRouter()

    const data = reactive({
      title: "",
      products: [],
    });


    const stop = watchEffect(() => {
      getCategory(route.params.slug, route.name);
      getProducts(route.params.slug);
    });


    async function getCategory(routeParam, routeName) {
      const query = qs.stringify({
        filters: {
          slug: {
            $eq: routeParam,
          },
        },
        fields: "Title",
      });
      try {
        const res = await fetch(
          `${process.env.VUE_APP_ADMIN_URL}/api/${routeName}?${query}`
        );
        if (res.ok) {
          const resData = await res.json();
          data.title = resData.data[0].attributes.Title;
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function getProducts(routeParam, attrs = []) {
      const query = qs.stringify({
        filters: {
          $or: [
            {
              subcategories: {
                slug: {
                  $eq: routeParam,
                },
              },
            },
            {
              categories: {
                slug: {
                  $eq: routeParam,
                },
              },
            },
          ],
          terms: {
            id: {
              $eq: attrs,
            },
          },
        },
        populate: {
          Thumbnail: {
            fields: "url",
          },
        },
        fields: ["Title", "Sale", "Price", "slug"],
      });
      try {
        const res = await fetch(
          process.env.VUE_APP_ADMIN_URL + "/api/products?" + query
        );
        if (res.ok) {
          const resData = await res.json();
          data.products = resData.data;
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }


    function inputCheck(ids) {
      getProducts(route.params.slug, ids);
    }


    router.beforeEach((to, from) => {
      if(to.name === 'product') {
        stop();
      }
    })

    return {
      data,
      inputCheck,
    };
  },
};
</script>

<style lang="sass">
.content-title
  margin-top: 50px
</style>