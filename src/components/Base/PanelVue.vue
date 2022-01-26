<template>
  <div
    class="leftPanel"
    :class="{ 'leftPanel--open': openPanel }"
    @mouseleave="$emit('closePanel')"
  >
    <div class="leftPanel-head">
      <div class="leftPanel-title">Каталог</div>
      <div class="leftPanel-form">
        <form class="search-form" action="/">
          <button class="search-form__btn" type="submit" aria-label="search">
            <svg class="svg-sprite-icon icon-search">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#search"
              ></use>
            </svg>
            <svg class="svg-sprite-icon icon-m-search">
              <use
                xlink:href="@/assets/images/svg/symbol/sprite.svg#m-search"
              ></use>
            </svg>
          </button>
          <input class="search-form__input" type="text" placeholder="Поиск" />
        </form>
      </div>
    </div>
    <div class="leftPanel-logo">
      <router-link to="/">
        <picture class="desctop">
          <source
            srcset="@/assets/images/general/logo.webp"
            type="image/webp"
          />
          <img
            src="@/assets/images/general/logo.png"
            width="118"
            height="118"
            alt="img"
          />
        </picture>
      </router-link>

      <router-link to="/">
        <picture class="mobile">
          <source
            srcset="@/assets/images/general/logo-2.webp"
            type="image/webp"
          />
          <img
            src="@/assets/images/general/logo-2.png"
            width="96"
            height="118"
            alt="img"
          />
        </picture>
      </router-link>
    </div>
    <div class="leftPanel-inner">
      <div class="leftPanel-left">
        <ul class="menu">
          <MenuCategoryItem
            v-for="(item, index) in data.categories"
            :key="index"
            :name="item.attributes.Title"
            :slug="item.attributes.slug"
            :subcategories="item.attributes.subcategories.data"
          />
        </ul>
      </div>
      <div class="leftPanel-right">
        <div
          class="leftPanel-right-content collapse collapse-horizontal"
          id="collapseWidthExample"
        >
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="#">Блузки и рубашки</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import qs from "qs";
import MenuCategoryItem from "./MenuCategoryItem.vue";
export default {
  props: {
    openPanel: Boolean,
  },
  components: {
    MenuCategoryItem,
  },
  setup() {
    const data = reactive({
      categories: [],
    });
    async function getCategories(params) {
      const query = qs.stringify({
        populate: {
          subcategories: {
            fields: ["Title", "slug"],
          },
        },
        fields: ["Title", "slug"],
      });
      const res = await fetch(
        process.env.VUE_APP_API_URL + "/categories?" + query
      );
      if (res.ok) {
        const resData = await res.json();
        data.categories = resData.data
      }
    }

    onMounted(() => {
      getCategories();
    });
    return {
      data,
    };
  },
};
</script>

<style lang="sass">
.menu__item
  margin-bottom: 0

.menu__link--selected
  opacity: 0.5
</style>
