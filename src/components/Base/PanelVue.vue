<template>
  <div
    class="leftPanel"
    :class="{ 'leftPanel--open': isMenuOpen }"
    @mouseleave="closeMenu"
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
            v-for="(item, index) in parentCategories"
            :key="index"
            :name="item.name"
            :id="item.id"
            :slug="item.slug"
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
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import MenuCategoryItem from "./MenuCategoryItem.vue";
export default {
  components: {
    MenuCategoryItem,
  },
  setup() {
    const store = useStore();
    store.dispatch("getCategories")

    const parentCategories = computed(() => {
      return store.getters.parentCategories;
    });

    const isMenuOpen = computed(() => {
      return store.state.openHeaderMenu;
    });

    const closeMenu = () => {
      store.commit("closeMenu");
    };

    return {
      closeMenu,
      isMenuOpen,
      parentCategories,
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
